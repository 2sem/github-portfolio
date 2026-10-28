# 이영준

Mobile Tech Lead · React Native / iOS

toyboy2@hanmail.net · [GitHub](https://github.com/2sem) · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com)

React Native와 iOS를 중심으로 다양한 도메인에서 담당 영역을 단독으로 책임져 왔습니다. 모바일 엔지니어 2~3명을 리드하며 코드 리뷰 프로세스와 기술부채 해소 사이클을 팀에 정착시켰고, 이슈나 장애 상황에서도 원인을 끝까지 추적해 침착하게 해결합니다. AI 코딩 도구를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다.

**모바일 8년+** (iOS 5년+ · React Native 2년+) · Mobile Tech Lead

## 경력

**올룰로 (킥고잉) · 2021.06 – 2023.10 · 정규직 · App Developer → Mobile Tech Lead**
국내 최초 공유 킥보드(모빌리티) 서비스 · React Native/Redux 기반 크로스플랫폼 앱(iOS·Android)
- 엔지니어 2~3명 리드, **1일 1시간** [기술부채 해소 시간 도입](https://toyboy2.medium.com/%EC%9E%91%EC%9D%80-%EA%B2%83%EB%B6%80%ED%84%B0-%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EA%B2%83%EB%B6%80%ED%84%B0-%EB%B0%94%EA%BF%94%EB%82%98%EA%B0%80%EA%B8%B0-ff21ea4fb6c2) → [**React Native 점진적 업그레이드**](https://medium.com/@toyboy2/migration-react-native-from-0-65-to-0-68-troubleshooting-guide-0a8a7401c581)로 **0.71**까지 상향 등 기술부채 해소
- PR Template·Jira Workflow로 **코드 리뷰**·업무 프로세스 표준화
- **Redux**로 앱 전역 **상태 관리**
- [**Flipper**](https://toyboy2.medium.com/debugging-react-native-with-flipper-262da7bcadc7)로 렌더링을 분석해 불필요한 UI 업데이트 감소
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(+위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- **Channel Talk(외부 CX SDK) 통합**: [채팅 상담](https://youtube.com/shorts/tC-np8ShcZU) 기능 추가, 통합 후 알림 분류 메소드에서 발생한 **Crash**를 제조사에 제보하고 [수정안 PR 제출](https://github.com/channel-io/react-native-channel-io/pull/107)
- Naver Map SDK **Native Bridge**에 [축척 계산 로직 추가](https://github.com/team-olulo/react-native-naver-map/pull/7)해 지도 자동 Zoom(길안내) 구현
- **react-native-vision-camera**의 Android 빌드 오류(Unresolved reference: resolveView)를 메서드 이름 기반 동적 호출로 바꿔 해결하고 [오픈소스 PR 제출](https://github.com/mrousavy/react-native-vision-camera/pull/1318)
- react-native-ble-plx가 Xcode 13과 호환되는 Pod을 참조하지 않아 발생한 빌드 오류를 [Pod과 라이브러리를 fork해 CocoaPods·npm에 배포하는 방식으로 해결](https://toyboy2.medium.com/react-native-ble-plx-xcode-13-troubleshootings-dca3f793b1e0)
- BLE 통신 로직 최적화: Library 옵션 및 제조사 펌웨어 조정 후 스캔·연결 소요 시간 지표화로 개선 검증
- [빌드 캐시 적용](https://toyboy2.medium.com/how-to-deploy-react-native-app-all-in-one-click-part1-54362deaeda2)으로 **배포 소요 시간 50% 감축**
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**
- **Jest** 기반 **Unit 테스트** 보강, [실행 Parameter 조정과 캐시 적용](https://medium.com/@toyboy2/how-to-speed-up-jest-8c8f5d40f4f9)
- Android Build-tools 31 이후 dx를 찾지 못해 로컬 빌드가 실패하던 문제를 **d8 링크 생성 Gradle 스크립트**로 해결하고 직접 등록한 [공개 이슈](https://github.com/channel-io/react-native-channel-io/issues/109)에 해결 방법 공유
- 외국어 지원 프로젝트에서 [다국어 대응 구축](https://toyboy2.medium.com/supporting-multi-language-in-react-native-applications-8bf4ddc8a8ef), [Android 언어 설정 관련 오픈소스 기여](https://toyboy2.medium.com/react-native-android-per-app-language-settings-5f9d4a29e9d2)
`React Native` `TypeScript` `Redux` `Java/Objective-C(Native Bridge)` `Naver Map SDK` `Channel Talk SDK` `BLE` `Jest` `Fastlane` `GitHub Actions` `Crashlytics`

**개인 프로젝트 (직딩) · 2024.01 – 2024.02 · 개인 · React Native 앱 개발자**
직장인 워라밸 앱(iOS·Android) · UX 디자이너 협업 · [GitHub](https://github.com/2sem/zicding-app)
- React Native·TypeScript로 UX 디자이너와 협업해 워라밸 앱을 단독 개발
- [App Store](https://apps.apple.com/app/id6448208169)·Play Store 출시
- 공공데이터 공휴일 API 연동으로 남은 [공휴일 표시](https://medium.com/@toyboy2/%EC%A7%81%EB%94%A9-%EA%B0%9C%EB%B0%9C%EA%B8%B0-%EA%B3%B5%ED%9C%B4%EC%9D%BC-%EC%A1%B0%ED%9A%8C-394715feb9ea?sharedUserId=toyboy2)·연차 계획 제안, [커스텀 캘린더](https://medium.com/@toyboy2/%EC%A7%81%EB%94%A9-%EA%B0%9C%EB%B0%9C%EA%B8%B0-%EC%9E%85%EC%82%AC%EC%9D%BC-%EC%84%A0%ED%83%9D-ffec8c67e36d?sharedUserId=toyboy2) 구현
- Realm 오프라인 우선 로컬 저장소 구성, 오늘 남은 근무시간 실시간 카운트다운 구현
- [개발 과정](https://toyboy2.medium.com/list/ba6efa6fce3c) 기록

`React Native` `TypeScript` `Realm`

**SK AX (계약: 디투엘) · 2024.06 – 2025.10 · 프리랜서 · iOS Developer**
IT 외주 SK 계열 · SKT의 3개 iOS 프로젝트 유지보수 (SWING, T world, AI Layer SDK) · T world MAU 800만
- **Crashlytics**로 확인한 **WKWebView** Delegate 강제 언래핑 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결
- 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열(Queue) 기능** 구현으로 **트래픽 급증 구간 안정성** 확보
- **AI Layer iOS SDK** 유지보수, Accessibility·UI 개선
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 API를 분석 후 서버 개발자에게 수정안 제시로 해결
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + [**MR Template**](https://toyboy2.medium.com/automate-your-tasks-with-mr-template-using-gitlab-commands-b1af5c84ce7b) 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파
- Closure 기반 API 호출은 Swift Concurrency, 신규 UI는 Combine으로 점진 전환해 생산성·성능 개선
- Objective-C를 Swift로 점진적 마이그레이션(Extension 단위)

`Swift` `Objective-C` `SwiftUI` `WidgetKit` `WKWebView` `Combine` `Swift Concurrency` `MVVM` `Unit Test` `Fastlane` `GitLab CI/CD` `Jira` `Crashlytics`

**에스제이더블유인터내셔널 (시원스쿨) · 2018.06 – 2021.05 · 정규직 · iOS Developer**
국내 1위 온라인 어학 교육 플랫폼
- **빅토익보카**: 기획·디자인·Android 앱이 모두 다른 상황에서 기획을 새로 정립해 iOS 버전 개발 / **StoreKit 기반 인앱결제**를 직접 제안·구현해 도서 부록을 넘어 자체 수익화
- **SNS 소셜 로그인**(Google·Kakao·Facebook·Naver) 연동
- 전체 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 [**QA 프로세스**](https://toyboy2.medium.com/xcuielement-wait-extension-c6c40cdce458) 구축
- **Instruments**로 메모리 릭 탐지, Memory Graph로 순환 참조 해결
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향
- 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 제로베이스로 자체 앱 단독 개발
- **React Native, Unity, Xamarin** 등 CrossPlatform 선행 학습, 팀 내 교육 및 파일럿 프로젝트 수행

`Swift` `MVVM` `RxSwift` `AVFoundation` `StoreKit` `SNS Login` `XCUITest` `Instruments` `Crashlytics`

**개인 iOS 개발자 · 2017.02 – 2018.06 · 개인**
- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 **광고 수익 월 $100 이상** 달성(2017.12 기준, 2020년 기준 $800+)
- '관련주식검색기': 푸시 알림 제안 + Node.js·**FCM** 기반 발송 서버 구축으로 **매출 2배** 달성

`Swift` `UIKit` `Firebase` `Crashlytics` `Node.js`

**크레디프 · 2009.08 – 2017.02 · 정규직 · 개발자**
이동통신 3사·공공기관 대상 SI/SM 전문기업
- 서버(C)부터 클라이언트(C#/Java, 모바일 **iOS/Android 네이티브**)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결, 신규 언어·플랫폼 선행 연구
- ShowNote: PDF 페이지를 배경으로 렌더링하고 개체를 위에 표시하는 방식 구현, 기획을 전면 개편하며 기존 기획서에 없던 특허 핵심 **'Trigger'** 개념 고안

`C` `C#` `Java` `iOS` `Android` `MySQL` `Oracle` `MSSQL`

## 외부 활동
- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영(개인 프로젝트 한정)
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- [**Medium**](https://toyboy2.medium.com)에 [React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682)·[iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5) 등 기술 Article 다수 발행, Dev Korea Meetup 등 커뮤니티 정기 참여

## AI 활용 경험
- 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- 개인 앱 유지보수를 위해 **ios-developer·designer·marketer·cs·reporter 에이전트로 팀을 구성**하고, CLAUDE.md에 역할·위임 규칙·QA 게이트를 정의해 메인 에이전트가 목표를 나눠 위임하고 결과를 검토하는 **멀티 에이전트 오케스트레이션** 운영 (cs가 피드백 수집 → reporter가 이슈 작성 → 검토 후 담당 에이전트에 배정)
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**

## 학력
**서일대학교** · 2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
