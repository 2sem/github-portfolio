# 비전아이 · iOS 앱 개발자 (PASS ME, SwiftUI·BLE) 지원 재료

> 상세 이력서가 아니라 JD에 맞춰 가져온 재료입니다. 문장은 `master.md` 불릿 뱅크 원문입니다. 매일 이 재료로 이력서를 작성하세요.

## 필터 판별
- 업무 동사: SwiftUI 앱 설계·개발, BLE 안정성 개선 (🟡)
- 팀 상황: 개발부서 3명 소수 (🟢)
- 우대 수준: BLE 연결 안정성, 단위 테스트·CI/CD (🟢)
- 신호: 2개 (연차 3년+라 오버스펙, 레벨 확인 후 판단. 마감 2026-10-31)

## 베이스
① Senior iOS

## JD 항목별 근거 불릿 후보

**SwiftUI 기반 iOS 앱 설계·개발·유지보수**
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 API를 분석 후 서버 개발자에게 수정안 제시로 해결
- Closure 기반 API 호출은 Swift Concurrency, 신규 UI는 Combine으로 점진 전환해 생산성·성능 개선

**BLE 스캔·연결·재연결·백그라운드 안정성**
- BLE 통신 로직 최적화: Library 옵션 및 제조사 펌웨어 조정 후 스캔·연결 소요 시간 지표화로 개선 검증
- react-native-ble-plx가 Xcode 13과 호환되는 Pod을 참조하지 않아 발생한 빌드 오류를 [Pod과 라이브러리를 fork해 CocoaPods·npm에 배포하는 방식으로 해결](https://toyboy2.medium.com/react-native-ble-plx-xcode-13-troubleshootings-dca3f793b1e0)

**REST 서버 통신·펌웨어·백엔드 협업**
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(+위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 API를 분석 후 서버 개발자에게 수정안 제시로 해결
- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수

**앱 출시·업데이트·App Store 심사 대응**
- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 **광고 수익 월 $100 이상** 달성(2017.12 기준, 2020년 기준 $800+)
- **StoreKit 기반 인앱결제**를 직접 제안·구현해 도서 부록을 넘어 자체 수익화
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향

**단위 테스트·CI/CD (우대)**
- 신규 API 연동 추가 시 **Unit Test 작성**으로 예외 사항 검증
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**
- Jest 기반 Unit 테스트 보강, [실행 Parameter 조정과 캐시 적용](https://medium.com/@toyboy2/how-to-speed-up-jest-8c8f5d40f4f9)으로 테스트 시간 **37초 → 27초** 단축

**긴급 장애 1차 대응**
- **Crashlytics**로 확인한 **WKWebView** Delegate 강제 언래핑 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결 (2026-10 비버웍스: 모니터링 도구 명시 목적의 변형. 원문은 아래)
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결, 신규 언어·플랫폼 선행 연구

**IoT·하드웨어 연동 (우대)**
- 저전력 **Beacon** 구매자 대상 SKT **O2O Android SDK**를 JNI 대신 **AIDL** 기반으로 개발
- BLE 통신 로직 최적화: Library 옵션 및 제조사 펌웨어 조정 후 스캔·연결 소요 시간 지표화로 개선 검증

## 공백 (이력서로 메우기 어려운 것)
- CoreBluetooth 직접 사용 경험이 아닌 RN(ble-plx) 기반 BLE였음. 네이티브 CoreBluetooth 경험을 확인해 쓸 것
- GATT 구조 이해·배터리 최적화 경험은 이력서에 근거 없음
- 출입통제·스마트홈 도메인 경험 없음
