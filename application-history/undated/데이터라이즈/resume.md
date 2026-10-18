# 데이터라이즈 · Mobile SDK Engineer 지원 재료

> 상세 이력서가 아니라 JD에 맞춰 가져온 재료입니다. 문장은 `master.md` 불릿 뱅크 원문입니다. 매일 이 재료로 이력서를 작성하세요.

## 필터 판별
- 업무 동사: 엔터프라이즈 네이티브 SDK를 제로 베이스에서 설계·리딩 (🟢)
- 팀 상황: 신규 SDK (🟢)
- 우대 수준: RN/Flutter 네이티브 브릿지, 큐잉·전송 최적화, 안정화 (🟢)
- 신호: 3개 (지원 권장)

## 베이스
① Senior iOS (SDK/플랫폼형)

## JD 항목별 근거 불릿 후보

**iOS/Android 네이티브 5년+, SDK 직접 설계·개발·배포**
- **AI Layer iOS SDK** 유지보수, Accessibility·UI 개선
- 저전력 **Beacon** 구매자 대상 SKT **O2O Android SDK**를 JNI 대신 **AIDL** 기반으로 개발
- AVFoundation 기반 공용 영상 플레이어 라이브러리 개발해서 다른 앱과 공유

**DX 중심 API 설계, 외부 SDK 연동**
- **Channel Talk(외부 CX SDK) 통합**: [채팅 상담](https://youtube.com/shorts/tC-np8ShcZU) 기능 추가, 통합 후 알림 분류 메소드에서 발생한 **Crash**를 제조사에 제보하고 [수정안 PR 제출](https://github.com/channel-io/react-native-channel-io/pull/107)
- **react-native-vision-camera**의 Android 빌드 오류(Unresolved reference: resolveView)를 메서드 이름 기반 동적 호출로 바꿔 해결하고 [오픈소스 PR 제출](https://github.com/mrousavy/react-native-vision-camera/pull/1318)

**RN/Flutter 네이티브 브릿지 개발 (우대)**
- Naver Map SDK **Native Bridge**에 [축척 계산 로직 추가](https://github.com/team-olulo/react-native-naver-map/pull/7)해 지도 자동 Zoom(길안내) 구현
- **react-native-vision-camera**의 Android 빌드 오류(Unresolved reference: resolveView)를 메서드 이름 기반 동적 호출로 바꿔 해결하고 [오픈소스 PR 제출](https://github.com/mrousavy/react-native-vision-camera/pull/1318)

**대용량 트래픽·큐잉·전송 최적화 (우대)**
- 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열(Queue) 기능** 구현으로 트래픽 급증 구간 안정성 확보
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(+위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여

**크래시·성능 이슈 분석 (필수)**
- **Crashlytics**로 확인한 **WKWebView** Delegate 강제 언래핑 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결 (2026-10 비버웍스: 모니터링 도구 명시 목적의 변형. 원문은 아래)
- BLE 통신 로직 최적화: Library 옵션 및 제조사 펌웨어 조정 후 스캔·연결 소요 시간 지표화로 개선 검증

**SDK 배포·운영 자동화**
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**
- CocoaPods 종료 대비 라이브러리별 SPM 전환 진행

**오픈소스 기여**
- **react-native-vision-camera**의 Android 빌드 오류(Unresolved reference: resolveView)를 메서드 이름 기반 동적 호출로 바꿔 해결하고 [오픈소스 PR 제출](https://github.com/mrousavy/react-native-vision-camera/pull/1318)

## 공백 (이력서로 메우기 어려운 것)
- Braze, AppsFlyer, Amplitude 등 마케팅·분석 SDK 연동 경험 없음
- 공개 SDK 배포·API 문서화·호환성 관리 경험이 약함 (SK AX AI Layer는 유지보수)
- B2B SaaS 환경과 백그라운드 데이터 수집 파이프라인 설계 경험 없음
