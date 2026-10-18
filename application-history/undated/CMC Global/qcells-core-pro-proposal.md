# Qcells CORE Pro Installer Application: Technical Design Document

| 항목 | 내용 |
|---|---|
| **문서 목적** | 현장 기사용 ESS 커미셔닝 앱의 iOS 기술 설계 제안 |
| **대상 장비** | Qcells CORE Pro (ESS Inverter + Battery) |
| **플랫폼 / 기술 스택** | iOS 16+, SwiftUI, CoreBluetooth, Keychain, Swift Concurrency, Combine |
| **작성 기준** | UX 기획서 역추적, 하드웨어 스펙 미확보 전제 (미확정 값은 `TBD`) |

---

## 1. 시스템 개요

### 1.1 ESS 상태 기반 설치 워크플로우

**설치 워크플로우는 서버 사전 동기화 → 현장 오프라인 설정 → 설치 완료 후 사후 동기화의 3단계로 분리된다**

- **Stage 1. 사전 동기화**
  - 로그인 후에 설치 기사 ID 기반으로 오늘 자 작업 명령을 수신
  - 작업 대상 ESS의 Serial No, NMI No, 모델 정보, 최신 펌웨어 바이너리를 로컬에 다운로드
  - 이후 단계는 현장 인터넷 연결 여부와 무관하게 진행 가능
- **Stage 2. 오프라인 주도 설정 (Offline-First Commissioning)**
  - 앱과 장비 간 BLE 1:1 직결로 모든 설정 입/출력 수행
  - 서버 왕복 없이 장비의 자체 정보를 기반으로 동작
  - 펌웨어 업데이트는 ESS 내장 WiFi와 1:1 통신으로 수행
- **Stage 3. 설치 완료 및 동기화 (Completion & Cloud Sync)**
  - Apply 시점에 장비 상태가 Incomplete → Run으로 확정
  - 변경 이력은 고유한 ID로 앱내 Transaction으로 저장
  - 외부 인터넷망 회복 시 클라우드로 변경 이력 자동 동기화

```
[로그인] ──▶ Work Order Sync ──▶ Dashboard (오늘 자 작업 목록)
                                      │
              ┌───────────────────────┴───────────────────────┐
              ▼                                               ▼
        ESS Row 탭 (다운로드 기반)                    Install Wizard (+) (수동)
              │                                     Serial No 입력 / 바코드 스캔
              └───────────────────────┬───────────────────────┘
                                      ▼
                     BLE 1:1 Connect + Bulk Read  [UI Lock]
                                      ▼
              Off-Grid / Test Site / Energy Policy / Pricing / NMI No 설정
                                      ▼
                            Apply ──▶ [Run] + Security Lockdown
                                      ▼
                Local Database ──(망 회복)──▶ Cloud Sync
```

### 1.2 핵심 ESS 상태 정의

**앱의 모든 화면 권한과 입력 가능 범위는 아래 4가지 상태에 의해 결정된다**

| 상태 | 정의 | 현장 실무 의미 | 앱 권한 정책 |
|---|---|---|---|
| **Incomplete** | 공장 출하 초기화 상태, 설정 미완료 | 신규 설치 대상 장비 | 비밀번호 Bypass, 전체 설정 편집 허용 |
| **Run** | 설정 완료 후 상업 가동 중 | 유지보수 / 재설정 대상 장비 | 상태 값 확인만 가능, 설정 시 임시 비밀번호 인증 필수 |
| **Warning / Error** | 장비 자가진단 경고 또는 정지 | 현장 장애 대응 대상 | 진단 데이터 확인 우선, 설정 변경은 운영 정책에 따름 |
| **Wifi / non-Wifi** | 장비의 외부 인터넷 연결 여부 | 클라우드 원격 모니터링 가능 여부 | non-Wifi 시 로컬 저장소 동기화 필요 표시 |

- **Wifi / non-Wifi는 위 상태와 결합하는 독립 연결성 상태** (예: `Run + non-Wifi` = 정상 가동 중이나 클라우드 미보고)

### 1.3 확인된 동작과 가정

**UX 기획서 역추적으로 확인된 7가지 현장 동작과 그에 대한 설계 해석을 정의한다**

**① Dashboard 리스트의 실체**
- 실시간 BLE 스캔 목록이 아닌, 기사 ID 기반으로 다운로드/동기화된 오늘 자 작업 목록
- **설계 반영**: Dashboard 렌더링은 BLE 상태와 완전 분리, 로컬 저장소 기반으로 오프라인 모드 보장

**② Install Wizard (+) 버튼**
- 다운로드 되지 않은 예외 상황 전용 수동 입력 진입점
- 발생 케이스: 전산 누락 가구 방문, 현장 실물 장비 교체로 인한 정보 미일치
- 기사가 실물 장비의 Serial No를 수동 입력 또는 바코드 저격 스캔
- **설계 반영**: 입력된 Serial No를 BLE Local Name 매칭 키로 사용하여 1:1 직결 통로 확보, 진입 이력은 서버에 기록

**③ 상세 진입 및 새로고침 시 UI 잠금**
- ESS Row 탭 시점에 BLE 1:1 연결과 실시간 Bulk Read가 동시 발생
- 명령 충돌 방지를 위해 새로 고침 중 모든 UI 조작을 모달 형태로 강제 차단
- 서버 호출이 아닌 BLE / 소켓 로컬 직결로 장비 내부 정보를 실시간 강제 갱신
- **설계 반영**: Session 단위 단일 Command Queue와 Modal Lock Guard 적용 (2.1 참조)

**④ Incomplete 상태의 권한**
- 공장 출하 초기화 상태이므로 보호 대상 비밀번호 자체가 부재, Temporary Installer Password 입력 단계를 완전히 Bypass
- 진행 순서: 상단 Off-Grid 안전 인터록 세팅 → 하단 NMI No 입력 → Apply
- Apply 순간 최종 [Run] 상태 확정 및 보안 Lockdown 모드 전환
- **설계 반영**: Apply는 비가역 트랜잭션으로 취급, 확인 다이얼로그와 설정값 요약 화면을 필수 경유

**⑤ NMI No 삭제 후 입력 불가 결함**
- 미설치 건 편집 화면에서 기존 NMI No를 삭제 처리하면 수동 재입력이 차단되는 Runtime Lockout 발생
- 원인: NMI No는 기사가 임의 생성하는 값이 아닌 서버 / 정산망 발급 조회형 고유 자산 (Read-Only Subscribed Asset)
- **설계 반영**
  - NMI No 필드는 자유 텍스트 입력이 아닌 Lookup Picker로 재정의, 삭제 대신 "재조회" 액션 제공
  - 오프라인 상황 대비 사전 동기화 단계에서 작업 대상에 NMI No 선적재

**⑥ Energy Policy와 Pricing 메뉴 연동**
- 평상시 Standby 모드에서는 단가표 불필요로 하위 Pricing 메뉴 진입 원천 차단
- 상단 설정에서 [Time-based Mode]로 전환 주입하는 런타임 시점에 한해 Pricing 입력 폼(kWh 단위 수동 단가) 잠금 해제
- **설계 반영**: Pricing 활성 여부는 로컬 UI 상태가 아닌 장비 자체 정보 값 기준으로 판정

**⑦ 하드웨어 마스터 스위치 정의**
- **Off-Grid**
  - 외부 전력망 단절 시 에러 정지 대신 태양광과 배터리만으로 독립 가동할지 결정하는 안전 잠금 해제 스위치
  - 설정 오류 시 인명 / 설비 안전에 직결되므로 2단계 확인 UI 적용
- **Test Site**
  - 상업 가동 전 통신 시험용 실험 자산 여부, Yes 설정 시 백엔드가 계측 데이터를 일반 과금 통계 파이프라인에서 제외
  - 상업 전환 시 No 미전환 누락 방지를 위해 Run 확정 직전 경고 배너 노출

---

## 2. 모바일 아키텍처 및 코어 인터페이스

### 2.1 정보 계층화 및 Clean Architecture 패턴 적용

**UI / Domain / Data 3계층 분리로 하드웨어 스펙 변경이 UI까지 전파되지 않도록 격리한다**

| Layer | 구성 요소 | 책임 |
|---|---|---|
| **UI Layer** | SwiftUI View, `@MainActor` ViewModel | 화면 렌더링, UI Lock 표시, 사용자 액션 전달 |
| **Domain Layer** | UseCase, Entity, `ESSStateMachine` | 상태 전이 규칙, 권한 정책, Pricing 활성 판정 |
| **Data Layer** | Repository, `BLETransport`, `SoftAPTransport`, REST Client, Local Store | 장비 레지스터 I/O, 서버 통신, 로컬 영구저장 |

- **의존 방향**
  - UI → Domain ← Data (Domain은 Protocol만 소유)
  - `BLETransport`는 Protocol로 정의하여 Mock / 실물 구현체 교체 가능
- **Dashboard 새로고침 스펙**
  - Pull-to-Refresh는 작업 대상 목록을 서버와 재동기화
  - Home 상세 화면 Refresh는 장비 정보 수신 (BLE 통신)
- **Modal UI Lock Guard 스펙**
  - 장비 정보 입/출력 진행 중 `fullScreenCover` 기반 화면 차단
  - 하위 View는 `.allowsHitTesting(false)` 및 `.interactiveDismissDisabled()` 적용
  - 장비 무응답 대비 Timeout `TBD`초 경과 시 Lock 해제 및 재시도 선택지 제공
  - `actor DeviceSession`으로 세션 단위 배타 접근, 동일 세션 내 중복 명령은 Command Queue 단계에서 거절

```swift
protocol BLETransport {
    var connectionState: AnyPublisher<ConnectionState, Never> { get }
    func connect(serialNo: String) async throws
    func read(_ register: Register) async throws -> Data
    func write(_ register: Register, value: Data) async throws
}
```

### 2.2 하드웨어 기반 민감 정보 보안 플랫폼 규격 준수

**민감 정보는 Keychain에만 저장하고, BLE 명령은 actor 기반 대기열로 스레드 정합성을 보장한다**

| 데이터 | 저장 위치 | Accessibility / Access Control |
|---|---|---|
| 기사 인증 Token | Keychain | `kSecAttrAccessibleWhenUnlockedThisDeviceOnly` + `.biometryCurrentSet` |
| Refresh Token | Keychain | `kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly` |
| Temporary Installer Password | 메모리 전용 | 영속 저장 금지, 사용 직후 폐기 |
| 작업 대상 데이터 | 로컬 DB | Data Protection `.complete` |

- **보안 원칙**
  - `ThisDeviceOnly` 속성으로 iCloud Keychain 동기화 및 백업 복원 차단
  - 생체 인증 재등록 시 `.biometryCurrentSet`에 의해 Token 자동 무효화
  - 로그 / Crash Report에 Serial No, NMI No, 비밀번호 마스킹 처리
- **Async-Await 기반 BLE 통신**
  - CoreBluetooth Delegate Callback을 `CheckedThrowingContinuation`으로 변환
  - Characteristic 단위 Pending Continuation을 1개로 제한하여 이중 Resume 방지
  - Disconnect 발생 시 대기 중인 모든 Continuation을 일괄 Throw 처리
- **상태 스트림 및 스레드 정합성**
  - 연결 상태, RSSI, 실시간 계측값은 Combine `CurrentValueSubject`로 발행, 명령 실행 경로와 관찰 경로 분리
  - `CBCentralManager`는 전용 Serial `DispatchQueue`에서 운용, GATT Write는 actor 내부 큐로 직렬화

---

## 3. 탄력적 설정 변경 상세 설계

### 3.1 기종별 Service UUID 타겟 스캔 및 무선 제약 극복 전략

**Service UUID로 기종을 1차 필터링하고, Local Name 매칭으로 Serial No 단위 1:1 식별을 수행한다**

- **기종별 Service UUID 하드웨어 필터링**
  - `scanForPeripherals(withServices:)`에 기종별 고유 Service UUID 지정, 주변 무관 BLE 기기 노이즈 원천 제거
  - 기종별 UUID / Local Name 포맷은 `TBD` (예: `AACCB-{SerialNo}`), 기종 확장 시 서버 Remote Config로 갱신
- **iOS CoreBluetooth MAC 주소 가상화 제약**
  - iOS는 물리 MAC 주소를 앱에 노출하지 않음
  - `CBPeripheral.identifier`는 기기별로 무작위 생성된 UUID로, 다른 iPhone 간 동일 장비 식별 불가
- **Advertising Data Local Name 스트링 매칭 우회 전략**
  - `advertisementData[CBAdvertisementDataLocalNameKey]`에서 Serial No 추출 후 작업 목록 또는 수동 입력값과 비교
  - Advertising 길이 제한으로 축약 형태 판정 시 Connect 후 Serial Number String (`0x2A25`) Read로 2차 확정
- **스캔 운용 정책**
  - Foreground 한정 스캔, 대상 확정 즉시 `stopScan()` 호출로 배터리 소모 최소화
  - 동일 Serial No 다중 응답 시 RSSI 최상위 장비 선택 및 기사 확인 요청

### 3.2 BLE Wake-up 명령 기반 오프라인 펌웨어 5단계 수명 주기 주입

**Wi-Fi는 상시 가동하지 않고, BLE 명령으로 가동 요청한 동안만 자체 Wi-Fi를 기동한다**

- **설계 배경**
  - 장비 Wi-Fi 상시 개방은 외부 공격 표면 확대 리스크, BLE 대역폭만으로는 수 MB 펌웨어 전송 시간 초과
  - 결론: 제어는 BLE, 대용량 전송은 일시 기동 Wi-Fi로 채널 분리
- **Wi-Fi 동적 트리거 시퀀스**
  - 앱 → 장비: BLE Wake-up Command 전송
  - 장비: 일회성 SSID / Passphrase 생성 후 자체 Wi-Fi 기동, BLE로 접속 정보 회신
  - 앱: `NEHotspotConfiguration` (`joinOnce = true`)으로 Wi-Fi로 접속
  - 전송 완료 또는 Timeout `TBD`분 경과 시 장비가 Wi-Fi 자동 종료
  - iOS 필수 권한: Hotspot Configuration Entitlement, Local Network 권한
- **펌웨어 5단계 수명 주기**

| 단계 | 장비 동작 | 앱 동작 | 실패 처리 |
|---|---|---|---|
| **1. 파일 전송** | Inactive Bank에 바이너리 수신 | 사전 동기화로 적재한 바이너리를 Chunk 단위 전송, 진행률 표시 | 중단 지점부터 재시작 |
| **2. 무결성 검증** | Checksum / MD5 비교, Secure Boot 서명 검증 | 검증 결과 BLE Read | 검증 실패 시 Inactive Bank 폐기 |
| **3. 플래싱** | Dual-Bank Flash Memory의 Inactive Bank 기록 | UI Lock 유지, 화면 꺼짐 방지 (`isIdleTimerDisabled`) | Active Bank 무손상 유지 |
| **4. 하드웨어 재시작** | Boot Bank 전환 후 Reboot | BLE 재연결 대기 및 재스캔 | 부팅 실패 시 이전 Bank 자동 Rollback |
| **5. 신규 버전 확정** | 신규 Bank를 Active로 Commit | 버전 레지스터 Read-back으로 최종 확인 | 버전 불일치 시 재시도 또는 장애 보고 |

- **사전 조건 가드**: 장비 측 Flash 허용 조건(배터리 SOC, 계통 상태) `TBD`, iPhone 배터리 잔량 `TBD`% 미만 시 업데이트 시작 차단

### 3.3 원샷 트랜잭션 인증 및 UUID 기반 클라우드 사후 동기화

**Run 상태 장비의 설정 변경은 명령 단위 일회성 인증으로 보호하고, 클라우드 반영은 고유 UUID로 중복 없이 수행한다**

- **Authenticated One-Shot Write**
  - 패킷 구조: `[Register ID][Parameter Payload][OTP Suffix (Time-based)]`
  - Run 상태에서 설정 변경 시 Temporary Installer Password 기반 시간 OTP 토큰을 접미사로 결합하여 단일 패킷 전송
  - 장비는 OTP 검증 성공 시에만 해당 명령 1건 적용, 세션 단위 권한 유지 없음
  - Write 직후 동일 레지스터 Read-back으로 적용 결과 확정, Incomplete 상태는 OTP 결합 생략
- **OTP 운용 규칙**
  - Time Step `TBD`초, 허용 오차 ±1 Step, 연속 실패 `TBD`회 시 장비 측 일시 Lockout
  - 오지 현장의 장비 상태를 고려하여 정보를 읽어오는 시점에 장비 시각 확인
- **UUID 기반 클라우드 사후 동기화**
  - 설정 성공 시점에 고유 UUID를 발급, 변경 내역을 로컬 저장소에 영구 저장 (앱 종료 / 재부팅에도 유지)
  - `NWPathMonitor`로 외부 인터넷망 회복 감지 시 변경 내역 순차 업로드
  - 서버는 동일 UUID 재수신 시 중복 반영 없이 기존 결과 반환
  - 실패 시 Timeout 시간을 늘려가며 재시도, 미동기화 상태 Dashboard 목록에 표시

---

## 4. 검증 및 테스트 접근 방식

### 4.1 공식 에뮬레이션 및 모바일 가상 가동 (Mock & Simulators)

**하드웨어 없이도 상태 전이와 UI 제약을 자동 검증할 수 있도록 레지스터 레벨 Mock을 구축한다**

- **Mock Peripheral 설계**
  - `BLETransport` Protocol의 Mock 구현체로 가상 장비 정보 Dictionary 보유
  - iOS Simulator는 실 BLE 미지원이므로 Mock 주입으로 전체 플로우 가동, 실행 인자 `-UITestMockBLE`로 교체
- **장비 정보 프로토콜 모킹 예**
  - Energy Policy Standby → Time-based 전환 응답, Incomplete → Run 전환 및 이후 OTP 요구 응답 재현
  - 응답 지연, 무응답, 연결 단절 등 강제 장애 상태 주입 옵션 제공

| ID | 시나리오 | 기대 결과 |
|---|---|---|
| UT-01 | Energy Policy Standby 상태에서 Pricing 진입 | 메뉴 비활성 |
| UT-02 | Time-based Mode 전환 후 Pricing 진입 | kWh 단위 요금 입력 폼 활성 |
| UT-03 | 상세 진입 정보 조회 중 화면 터치 | 모든 입력 차단 |
| UT-04 | Incomplete 장비 진입 | 비밀번호 입력 단계 Bypass |
| UT-05 | Apply 실행 | 상태 Run 전환, 재진입 시 OTP 요구 |
| UT-06 | NMI No 재조회 액션 | Lookup Picker로 서버값 재주입 |
| UT-07 | 오프라인 설정 후 망 회복 | 영구 저장소 1회 업로드, 중복 반영 없음 |

### 4.2 실물 연동 검증 구조

**Mock으로 검증 불가능한 전력 안전 동작과 무선 환경 변수는 테스트 환경으로 검증**

- **테스트 환경 구성**: CORE Pro 실물 장비, Grid Simulator 또는 차단기 기반 계통 단절 장치, PV Simulator, RF Attenuator 및 차폐 박스, iPhone Device Farm (다기종 / 다버전)

| ID | 조건 | 조작 | 기대 결과 |
|---|---|---|---|
| 1 | Off-Grid ON | 계통 차단 | EPS 자동 전환, 태양광 + 배터리 독립 가동 |
| 2 | Off-Grid OFF | 계통 차단 | 에러 정지, 앱에 Error 상태 표시 |
| 3 | EPS 가동 중 | 계통 복구 | 계통 재연계 및 Run 복귀 |
| 4 | 플래싱 단계 | 장비 전원 차단 | 재부팅 후 이전 Bank Rollback |
| 5 | RSSI 경계값 | Attenuator 감쇄 | 임계치 정책대로 연결 허용 / 차단 |

- **EPS 전환 시간 허용 기준**: 하드웨어 스펙 확보 후 `TBD`ms로 확정

---

## 5. 트레이드오프 및 리스크 관리

### 5.1 운영 및 데이터 모델 관점의 주요 가정

**스케줄링 주체 외재화 가정**
- 작업 배정 및 일정 조정은 본사 시스템 소관, 앱은 작업 대상 목록을 소비만 하며 일정 편집 기능 미보유
- 영향: 앱 범위 축소 및 오프라인 단순화, 단 현장 일정 변경은 서버 재동기화 의존

**NMI No Primary Key 결합성 가정**
- NMI는 계량 지점 단위 고유 식별자, NMI No ↔ Site ↔ ESS를 1:1:1로 결합하여 Primary Key로 사용
- 검증 필요: 동일 NMI 하에 ESS 다중 설치 사례 존재 여부, 확인 시 복합 키(NMI No + Serial No)로 전환

### 5.2 기술적 트레이드오프

**실시간 계측 폴링 주기 데이터 스트림 제한**
- 고빈도 폴링(1초)은 실시간성 확보 대신 설정 변경 지연 및 장비 MCU 부하, 저빈도 폴링(`TBD`초)은 그 반대
- **채택안**: 계측 화면 Foreground 노출 시에만 폴링, 설정 명령 대기 시 폴링 일시 중단, Background 진입 시 즉시 정지

**동적 RSSI Guard Threshold 완화 및 MFA 결합**
- 고고도 지붕 / 외벽 설치 가구는 기사와 장비 간 거리 및 차폐로 RSSI 저하 불가피
- 고정 Threshold는 정상 현장 작업 차단, 무제한 허용은 인접 가구 장비 오연결 리스크
- **채택안**: 신원 확인 강도에 따라 최저 신호 세기를 단계적으로 완화

| 확인 수준 | 확인 수단 | RSSI Guard |
|---|---|---|
| Level 1 | Local Name 매칭 | 기본값 `TBD` dBm |
| Level 2 | Local Name + 바코드 / QR 스캔 | 완화값 `TBD` dBm |
| Level 3 | Level 2 + One-Shot OTP | Write 허용 |

### 5.3 주요 리스크 및 향후 미결 과제

**리스크 1. ESS 자체 Wi-Fi 장애**
- 자체 Wi-Fi 미동작 시 장기 non-Wifi 상태 발생
- 조치: 기사 방문 시 앱이 BLE로 장비 누적 로그를 수집하여 대신 업로드, 임계 시간 초과 시 서버가 재방문 작업 명령 자동 생성
- 과제: 장비 내부 로그 버퍼 용량 및 보존 기간

**리스크 2. 완전 독립 오지 가구의 NMI No 필수 조항**
- 계통 미연결 오지 가구는 NMI No 자체가 미발급 상태일 수 있어, 현행 Apply 조건상 설정 완료 불가
- 개선 과제: 백엔드가 Off-Grid 전용 임시 식별자를 자동 채움(Auto-fill), 해당 건은 정산 파이프라인에서 격리, 정식 NMI 발급 시 서버 측 키 치환

**리스크 3. 하드웨어 스펙 부재**
- Service UUID, Local Name 포맷, 레지스터 맵, OTP 알고리즘 미확정
- 대응: `BLETransport` Protocol 경계로 격리하여 스펙 확정 시 Data Layer만 교체

**미결 질문 (Open Questions)**
- Local Name이 Serial No 전체를 포함하는가, Shortened 형태인가
- Temporary Installer Password의 발급 주체, 유효 기간, OTP 생성 알고리즘은 무엇인가
- 펌웨어 바이너리 크기 및 자체 Wi-Fi 전송 속도 기준치는 얼마인가
- Test Site → 상업 가동 전환 권한이 기사에게 있는가, 본사에 있는가
- Off-Grid 설정 변경이 Run 상태에서도 허용되는가
