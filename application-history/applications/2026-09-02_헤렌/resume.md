# 이영준

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

iOS 설계부터 배포, 운영까지 전 과정을 단독으로 책임져 온 엔지니어입니다. 공유 모빌리티 O2O를 비롯한 다양한 도메인에서 B2C와 B2B 앱을 함께 다루며 아키텍처 결정과 테스트·배포 프로세스를 스스로 구축했고, 크래시와 CS 지표를 근거로 개선 우선순위를 결정합니다. AI 에이전트는 동료로 대하고, 산출물은 비판적으로 검증하고 책임집니다. 성격이 다른 두 프로덕트를 오가며 사용자에서 매장으로 이어지는 경험을 공비서에서 함께 만들고 싶습니다.

**iOS 5년+** (모바일 8년+ · 총 경력 15년+)

---

## 경력

### SK AX (계약: 디투엘) · 2024.06 – 2025.10 · 프리랜서 · iOS Developer
IT 외주 SK 계열 · SKT 3개 iOS 프로젝트 유지보수 단독 담당 (B2C T world, B2B SWING, AI Layer SDK)
- **Firebase Crashlytics**에서 **주간 5,000건 이상**으로 집계되던 Crash를 해결. 전임자의 가설로는 동일한 크래시가 재현되지 않아 코드를 직접 따라가며 **WKWebView** Delegate 강제 언래핑을 원인으로 특정
- **SwiftUI** **Widget**에 새로고침 버튼을 추가하고, 보안 기능을 설정한 사용자가 위젯을 이용하지 못하던 문제를 API 분석·수정 제안과 앱·위젯 간 Cookie Storage 공유로 해결
- **AI Layer iOS SDK**(네이티브 화면에서 WebView로 AI 서비스를 호스팅하는 브릿지 SDK) 유지보수·확장, 코드 기반으로 구성된 SDK UI에 Accessibility와 UI 개선을 적용
- API 호출을 **Swift Concurrency**로 점진 전환하고, AI 추천 툴팁·넛지 등 신규 UI를 **프로그래매틱 UI**로 구현해 **Combine** 기반으로 View Model과 연동
- 설명 없는 대형 MR로 리뷰가 불가능하던 문제를 Subtask 단위 MR과 MR Template, Jira Epic·Task 구조화로 해결. 리뷰 가능한 단위로 분할해 **주니어 개발자 2명**에게 할당했고 타 프로젝트로도 전파
- **Fastlane**로 빌드부터 **TestFlight** 업로드, Slack에 IPA 공유까지 자동화
- 보안 제약으로 외부 AI 사용이 불가능한 환경에서 사내 GitLab Runner에 [**Ollama를 연결한 MR 리뷰 에이전트**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9)를 구축, 변경 사항을 빠르게 리뷰할 수 있도록 지원하고 비개발자 매니저의 AI 활용 KPI 달성에 기여

`Swift` `SwiftUI` `UIKit` `Objective-C` `WidgetKit` `Combine` `Swift Concurrency` `WKWebView` `MVVM` `RxSwift` `Unit Test` `SPM` `CocoaPods` `Fastlane` `GitLab CI/CD` `Firebase` `Jira`

### 올룰로 (킥고잉) · 2021.06 – 2023.10 · 정규직 · App Developer → Mobile Tech Lead
국내 최초 공유 킥보드 O2O 서비스 · React Native 크로스플랫폼
- 구역 정보 API 호출을 **4회에서 1회로** 줄여 데이터 사용량 **최소 75% 절감**
- 전화 전용이던 고객 지원을 Channel Talk SDK 통합으로 인앱 전환. 통합 후 발견한 SDK 알림 분류 크래시를 원인 분석해 제보하고 업체 Repo에 수정안 PR 제출
- **Amplitude**로 사용자 경험 데이터를 수집해 기능 개선 성과를 측정하고, BLE 스캔·연결 소요 시간을 지표화해 통신 로직 최적화를 검증
- iOS와 Android로 분리돼 있던 GitHub 기반 CI/CD를 **Fastlane**으로 통합하고 빌드 캐시를 적용해 배포 소요 시간 **50% 감축**, Android 배포를 S3 링크 공유에서 Slack APK 직접 업로드로 개선
- Naver Map SDK Native Bridge(Java/Objective-C)에 축척 계산 로직을 추가해 길안내에 지도 자동 Zoom 구현
- 엔지니어 2~3명을 리드하며 **1일 1시간** 기술부채 해소 시간을 도입해 React Native 업그레이드 등을 진행
- PR Template으로 코드 리뷰 프로세스를, Jira Workflow 설정으로 업무 프로세스를 표준화하고 Jest 테스트 보강 및 실행 성능 개선
- 개발 환경에서 동작하지 않던 Install Referrer의 상용 동작과 BLE 통신 개선을 **Amplitude** Log로 확인

`React Native` `TypeScript` `Redux` `Native Bridge(Java/Objective-C)` `BLE` `Amplitude` `Jest` `Fastlane` `GitHub` `Channel Talk SDK`

### 에스제이더블유인터내셔널 (시원스쿨) · 2018.06 – 2021.05 · 정규직 · iOS Developer
국내 1위 온라인 어학 교육 플랫폼
- 합류 당시 한 달째 정체돼 있던 프로젝트를 기획서 전면 재검토로 재정립하고, 서버 개발자와 소통하여 제로베이스로 자체 앱을 단독 개발
- 인앱 리뷰 요청 노출 시점을 설계·구현해 App Store 평점을 **4.1에서 4.7로** 상향
- **RxSwift** 도입과 함께 **MVVM** 아키텍처를 적용하고, **AVFoundation** 기반 공용 영상 플레이어와 최소화·최대화를 전 화면에서 재사용하는 ViewController를 **프로그래매틱 UI**로 설계
- 민원이 발생하기 전에 먼저 탐지하기 위해, 전체 강의를 순회하며 재생 버튼 노출을 검증하는 **XCUITest** 기반 QA 프로세스를 구축해 유휴 시간에 실행하고 실패 콘텐츠 ID를 컨텐츠 관리 부서에 전달
- **Instruments**로 메모리 릭을 탐지하고 **Memory Graph**로 순환 참조를 찾아 해결
- **Fastlane** 기반 CI/CD를 처음부터 구축해 빌드·배포를 자동화하고 릴리즈 프로세스 개선
- 빅토익보카: Android 전용이던 단어장 앱의 iOS 버전을 단독 개발하고 **StoreKit** 기반 인앱결제를 제안·구현해 자체 수익화
- **App Store 리뷰** 직접 답변 및 무선 키보드 등 기획이 필요 없는 사항은 직접 조치

`Swift` `UIKit` `RxSwift` `MVVM` `AVFoundation` `StoreKit` `XCUITest` `Instruments` `Fastlane` `Firebase`

### 개인 iOS 개발자 · 2017.02 – 2018.06 · 개인
- '관련주식검색기'에 푸시 알림을 제안하고 발송 서버를 Node.js·FCM으로 구축해 **매출 2배** 달성
- 게임 유틸리티 앱 '게임도우미'를 **일일 사용자 500명 이상** 규모로 단독 기획·개발·운영
- 공인중개사 요약집 앱에서 개발자 후원 팝업 디자인 4가지를 Firebase **A/B 테스트**로 비교 검증
- 서버 없이 콘텐츠를 갱신하기 위해 Google Drive의 Xlsx를 원격 데이터소스로 사용하는 경량 아키텍처 구현

`Swift` `UIKit` `Node.js` `Google Drive API` `Firebase`

### 크레디프 · 2009.08 – 2017.02 · 정규직 · 개발자
이동통신 3사·공공기관 대상 SI/SM 전문기업
- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개 이상 프로젝트**를 개발·유지보수
- 담당자 공백과 인수인계 부재, 장애 등 위기 상황마다 투입돼 문제를 해결했고 판교 R&D센터 IBS/FMS 클라이언트 개발·리드
- 저전력 Beacon 구매자에게 Service 통신을 제공하기 위한 SKT **O2O** Android SDK를 JNI 대신 AIDL 기반으로 개발

`C` `C#` `Java` `WPF` `MySQL` `Oracle` `MSSQL`

---

## 외부 활동
- Storyboard 기반 개인 앱 유지보수를 위해 opencode(Codex 기반)와 Claude Code로 [**SwiftUI 마이그레이션 자동화 Skill**](https://github.com/2sem/swiftui-migrator-skill)을 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- 유료 전용 기능이던 Davinci Resolve **MCP**를 [무료 버전](https://github.com/2sem/davinci-resolve-lite-mcp)용으로 구축하며, 장면 분류와 편집 방법, 검증 단계를 Skill과 Script로 분리해 AI 산출물을 그대로 신뢰하지 않는 구조로 설계
- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 적용해 모듈화 구조를 구축·운영하고, 게임도우미는 SwiftUI 전환과 함께 **Clean Architecture**를 적용
- 위 경험을 [아티클](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)로 작성해 Tuist CEO와 직접 연결되었고, [한국어 문서 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65) 기여 후 한국 개발자와의 소통을 원한 CEO를 직접 운영하는 한국 오픈채팅방에 초대
- Seoul iOS Meetup에서 [**'Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'**](https://youtu.be/FFkEbqG4ips) 발표
- **TCA**를 미출시 개인 프로젝트에 적용해 Settings·Modal·SwiftData 연동을 구성하고 [Medium 아티클](https://toyboy2.medium.com/list/tca-8b33da822cae)로 정리, Medium에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682) 기술 아티클 다수 발행

---

## 학력

### 서일대학교
2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품 Ubicon2, 졸업작품 WIPI Designer
