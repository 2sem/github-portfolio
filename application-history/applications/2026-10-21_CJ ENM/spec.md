# 씨제이이엔엠(CJ ENM) · [Mnet Plus] 앱 개발(React Native) 지원 재료

> 상세 이력서가 아니라 JD에 맞춰 가져온 재료입니다. 문장은 `master.md` 불릿 뱅크 원문입니다. 매일 이 재료로 이력서를 작성하세요.

## 필터 판별
- 업무 동사: 개발·개선 중심, 설계·리딩은 약함 (🟡)
- 팀 상황: 기존 앱 고도화, 신규 아님 (🟡)
- 우대·요건 수준: 크래시·ANR·렌더링·메모리 지표와 관측 체계 운영 (🟢)
- 신호: 2개 (경계선, 담당자 확인 가능)

## 베이스
② React Native / 크로스플랫폼

## JD 항목별 근거 불릿 후보

**RN 서비스 개발·운영 5년+ (RN·iOS·Android 중 주력)**
- **Redux**로 앱 전역 상태 관리
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(+위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- Naver Map SDK **Native Bridge**에 [축척 계산 로직 추가](https://github.com/team-olulo/react-native-naver-map/pull/7)해 지도 자동 Zoom(길안내) 구현

**RN으로 풀리지 않는 문제를 네이티브 레이어까지 확인**
- **react-native-vision-camera**의 Android 빌드 오류(Unresolved reference: resolveView)를 메서드 이름 기반 동적 호출로 바꿔 해결하고 [오픈소스 PR 제출](https://github.com/mrousavy/react-native-vision-camera/pull/1318)
- Naver Map SDK **Native Bridge**에 [축척 계산 로직 추가](https://github.com/team-olulo/react-native-naver-map/pull/7)해 지도 자동 Zoom(길안내) 구현
- react-native-ble-plx가 Xcode 13과 호환되는 Pod을 참조하지 않아 발생한 빌드 오류를 [Pod과 라이브러리를 fork해 CocoaPods·npm에 배포하는 방식으로 해결](https://toyboy2.medium.com/react-native-ble-plx-xcode-13-troubleshootings-dca3f793b1e0)
- Android Build-tools 31 이후 dx를 찾지 못해 로컬 빌드가 실패하던 문제를 **d8 링크 생성 Gradle 스크립트**로 해결하고 직접 등록한 [공개 이슈](https://github.com/channel-io/react-native-channel-io/issues/109)에 해결 방법 공유

**상태 관리·렌더링 성능·메모리 진단**
- **Redux**로 앱 전역 상태 관리
- **Instruments**로 메모리 릭 탐지, Memory Graph로 순환 참조 해결
- BLE 통신 로직 최적화: Library 옵션 및 제조사 펌웨어 조정 후 스캔·연결 소요 시간 지표화로 개선 검증

**크래시·안정성 지표 개선**
- **Crashlytics**로 확인한 **WKWebView** Delegate 강제 언래핑 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결 (2026-10 비버웍스: 모니터링 도구 명시 목적의 변형. 원문은 아래)
- **Channel Talk(외부 CX SDK) 통합**: [채팅 상담](https://youtube.com/shorts/tC-np8ShcZU) 기능 추가, 통합 후 알림 분류 메소드에서 발생한 **Crash**를 제조사에 제보하고 [수정안 PR 제출](https://github.com/channel-io/react-native-channel-io/pull/107)

**멤버십·인앱결제**
- **StoreKit 기반 인앱결제**를 직접 제안·구현해 도서 부록을 넘어 자체 수익화

**빌드·배포 자동화**
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**
- [빌드 캐시 적용](https://toyboy2.medium.com/how-to-deploy-react-native-app-all-in-one-click-part1-54362deaeda2)으로 **배포 소요 시간 50% 감축**
- Jest 기반 Unit 테스트 보강, [실행 Parameter 조정과 캐시 적용](https://medium.com/@toyboy2/how-to-speed-up-jest-8c8f5d40f4f9)으로 테스트 시간 **37초 → 27초** 단축

**AI 도구 활용**
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션  Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- 개인 앱 유지보수를 위해 **ios-developer·designer·marketer·cs·reporter 에이전트로 팀을 구성**하고, CLAUDE.md에 역할·위임 규칙·QA 게이트를 정의해 메인 에이전트가 목표를 나눠 위임하고 결과를 검토하는 **멀티 에이전트 오케스트레이션** 운영 (cs가 피드백 수집 → reporter가 이슈 작성 → 검토 후 담당 에이전트에 배정) (2026-10 사용자 확인: 오케스트레이션 경험, 비버웍스 JD 요구. 에이전트 구성은 사용자 진술과 개인 앱 CLAUDE.md 팀 구조 기준)
- SK AX에서 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원

## 공백 (이력서로 메우기 어려운 것)
- 대규모 실시간 이벤트(투표·라이브·채팅) 트래픽 경험 없음
- ANR·렌더링·메모리 관측 체계(Datadog 등) 운영 경험 없음 (Crashlytics만)
- RN 경력 2년+ 한 곳(2023.10 이후 공백), 직딩 개인 프로젝트로 보완
