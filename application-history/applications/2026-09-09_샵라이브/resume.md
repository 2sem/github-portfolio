# 이영준

Senior iOS Developer · Mobile SDK

toyboy2@hanmail.net · [GitHub](https://github.com/2sem) · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [App Store](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114)

---

iOS를 중심으로 SDK를 제공하는 쪽과 소비하는 쪽을 모두 경험했습니다. 두 개의 상용 앱이 함께 사용하는 사내 iOS SDK를 인수해 유지보수·확장했고, 외부 SDK를 상용 앱에 통합하는 과정에서는 벤더 SDK의 크래시 원인을 추적해 업스트림 수정안까지 제출했습니다. 재현되지 않는 문제도 코드를 따라가며 끝까지 원인을 특정하고, 기획·서버 등 타 직군에 되물으며 해결 방안을 함께 찾습니다. AI 코딩 도구는 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다. 어학 도메인에서 다뤄온 영상 플레이어 경험을 비디오 커머스라는 새로운 무대에서 Shoplive와 함께 넓히고 싶습니다.

**총 경력 15년+ (모바일 8년+ · iOS 5년+)**

---

## 경력

### SK AX — IT 외주 SK 계열
**2024.06 – 2025.10 (1년+) · 프리랜서 · iOS Developer**
SKT의 3개 iOS 프로젝트 유지보수 단독 담당 — T world(B2C 앱), SWING(WebView 기반 Hybrid, 대리점 대상 Enterprise B2B), AI Layer SDK

- **AI Layer iOS SDK** 유지보수·확장 — 네이티브 화면에서 WebView로 AI 서비스를 호스팅하는 브릿지 **SDK**로 T world·T membership 2개 앱이 소비. 타인이 설계한 코드를 인수해 코드 기반으로 구성된 SDK UI에 Accessibility·UI 개선을 적용하고, SDK 팀 대상 **MR Template** 셋업
- **WKWebView** Delegate 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**(Firebase Crashlytics 집계 기준)를 원인 분석 후 근본 해결 — 전임자 PR의 가설로는 동일 크래시가 재현되지 않아, **코드를 따라가며 동일한 Crash를 직접 발생시켜 원인을 특정**
- 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열(Queue) 기능** 구현
- **SwiftUI** 위젯(WidgetKit)에서 시간제한 보안 기능을 설정한 사용자가 비밀번호 입력 후에도 위젯을 이용하지 못하던 문제를, 앱·위젯 간 Cookie Storage 공유로 세션을 연결하고 위젯 API 분석 결과를 서버 개발자에게 수정 방안으로 제시해 해결
- API 호출을 **Swift Concurrency**로 점진 전환, AI 추천 툴팁·넛지 등 신규 UI는 RxSwift 대신 **Combine** 기반으로 View Model과 연동. 신규 API 추가 시 **Unit Test**로 예외 사항 검증
- **Objective-C**로 작성된 SWING을 함수·Extension 단위로 **Swift 마이그레이션**, CocoaPods 종료에 대비해 라이브러리별 **SPM 전환** 진행
- 설명 없는 대형 MR로 사실상 리뷰가 불가능하던 문제를 Subtask 단위 MR과 **MR Template**, Jira Epic·Task 구조화로 개선하고, 리뷰하기 쉬운 단위로 분할해 **주니어 엔지니어 2명에게 할당·코칭**
- 보안 제약을 고려해 GitLab Runner에 [**Ollama 기반 MR 리뷰 에이전트**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9)를 구축, 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원

`Swift` `SwiftUI` `UIKit` `Objective-C` `WidgetKit` `Combine` `Swift Concurrency` `WKWebView` `Unit Test` `XCTest` `SPM` `CocoaPods` `Firebase` `GitLab CI/CD` `MVVM` `RxSwift` `Jira`

---

### 올룰로 (킥고잉) — 국내 최초 공유 킥보드 서비스
**2021.06 – 2023.10 (2년+) · 정규직 · App Developer → Mobile Tech Lead**
React Native 기반 크로스플랫폼 앱 개발 및 모바일 조직 리드

- **Channel Talk(외부 CX SDK) 통합**으로 전화 전용이던 고객 지원을 인앱으로 전환. 통합 과정에서 SDK의 알림 처리 로직에서 발생한 크래시를 원인 분석해 벤더 지원 채널로 리포트하고 **업스트림 수정안까지 제출**
- Naver Map SDK의 **Native Bridge(Java/Objective-C)** 에 축척(zoom level) 계산 로직을 추가해, 조회된 경로 전체가 화면에 들어오도록 지도 자동 Zoom(길안내) 구현
- 구역 정보 API 호출을 **4회에서 1회로 줄여 데이터 사용량 최소 75% 절감**, 사용자 및 인프라 네트워크 트래픽 최적화에 기여
- iOS·Android Workflow가 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**하고 빌드 캐시를 적용해 **배포 소요 시간 50% 감축**
- 다국어(영어 등) 대응 구축(string 리소스 처리) 및 Android 언어 설정 관련 **오픈소스 기여**
- 엔지니어 2~3명 리드, **1일 1시간** 기술부채 해소 시간을 도입해 React Native 버전 업그레이드 등 부채 해소. 월간 모바일 개발자 회의를 운영해 프레임워크·OS 레벨 업그레이드 오너십을 배정
- **PR Template** 도입으로 코드 리뷰 프로세스를 개선하고 Jira Workflow 설정으로 업무 프로세스 표준화, UX팀과 협업해 Figma 에셋 명 매핑 체계 구축
- **Jest** 기반 Unit 테스트 보강 및 테스트 실행 성능 개선

`React Native` `TypeScript` `Redux` `Native Bridge (Java/Objective-C)` `Jest` `Fastlane` `GitHub Actions` `Naver Map SDK` `Channel Talk SDK` `BLE` `Amplitude`

---

### 에스제이더블유인터내셔널 (시원스쿨) — 국내 1위 온라인 어학 교육 플랫폼
**2018.06 – 2021.05 (3년) · 정규직 · iOS Developer**

- **AVFoundation 기반 공용 영상 플레이어 라이브러리**를 개발해 계열사 앱(빅토익보카)과 공유하고, 플레이어 최소화·최대화를 전 화면에서 재사용할 수 있도록 기반 ViewController를 설계·구현
- 민원 발생 전에 불량 영상 파일을 탐지하기 위해, 전체 강의를 순회하며 재생 버튼 노출 여부를 검증하는 **XCUITest 기반 QA 프로세스**를 구축해 담당 부서에 전달
- 화면 녹화 방지·탈옥 감지 등 **영상 콘텐츠 보호** 기능 구현
- **Instruments**로 메모리 릭을 탐지하고 Memory Graph로 순환 참조를 찾아 해결
- 인앱 리뷰 요청 노출 시점을 설계·구현해 앱 평점 **4.1 → 4.7** 상향, App Store 리뷰에 직접 답변하며 별도 기획이 필요 없는 사항은 즉시 조치
- 합류 당시 한 달째 정체돼 있던 프로젝트를 기획서 전면 재검토로 재정립하고, 서버 개발자와 소통하며 제로베이스로 자체 앱 단독 개발. RxSwift 도입 시 **MVVM 아키텍처** 적용
- Objective-C로 개발된 계열사 앱(암기고래)을 인수해 **Swift로 마이그레이션**하고 레거시 코드 리팩토링·기능 개선. 빅토익보카는 기획을 새로 정립해 iOS 버전을 단독 개발하고 **StoreKit 기반 인앱결제**를 제안·구현
- **Fastlane** 기반 CI/CD 인프라를 처음부터 구축해 빌드·배포 자동화, React Native·Unity·Xamarin 등 크로스 플랫폼 프레임워크를 선행 학습해 팀 내 교육 진행

`Swift` `Objective-C` `AVFoundation` `MVVM` `RxSwift` `XCUITest` `Instruments` `StoreKit` `Fastlane` `Firebase` `Storyboard`

---

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+)**

- 9-6 근무 형태로 개인 앱 다수를 기획·개발·출시해 앱 전체 합산 **광고 수익 월 $100 이상** 달성(2017.12 기준), 게임 유틸리티 앱 '게임도우미'는 **일일 사용자 500명 이상** 규모로 단독 운영
- '관련주식검색기'에 푸시 알림을 제안하고 Node.js·**FCM** 기반 서버를 구축해 **매출 2배** 달성
- **ShowNote**(iPad용 PDF 기반 프레젠테이션 앱): PDF 페이지를 배경으로 렌더링하고 개체를 위에 표시하는 방식을 구현, 기획을 전면 개편하며 특허의 핵심인 'Trigger' 개념을 고안해 **특허 출원** 및 2018.07 **10억 원 규모 엔젤 투자 유치(Enable Holdings)**에 기여

`Swift` `UIKit` `PDFKit` `Node.js` `Firebase`

---

### 크레디프 — 이동통신 3사·공공기관 대상 SI/SM 전문기업
**2009.08 – 2017.02 (7년+) · 정규직 · 개발자**

- 저전력 **Beacon** 구매자에게 Service 통신을 제공하기 위한 SKT **O2O Android SDK**를 JNI 대신 **AIDL** 기반으로 개발
- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개 이상의 프로젝트**를 개발·유지보수
- 담당자 공백, 인수인계 부재, 장애 등 위기 상황마다 투입돼 문제를 정의하고 해결

`C` `C#` `Java` `WPF` `Python` `AIDL` `Beacon` `RESTful API` `MySQL` `Oracle` `MSSQL`

---

## AI 활용 경험

- Storyboard 기반 개인 앱 유지보수를 위해 opencode(Codex 기반)·Claude Code로 [**SwiftUI 마이그레이션 자동화 Skill**](https://github.com/2sem/swiftui-migrator-skill)을 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- 영상 편집을 위해 유료 버전 전용 기능인 [**Davinci Resolve MCP**](https://github.com/2sem/davinci-resolve-lite-mcp)를 무료 버전용으로 구축, 장면 분류·편집 방법·검증 단계를 Skill과 Script로 분리해 신뢰성 향상

---

## 외부 활동

- 채팅 기능이 들어간 앱을 직접 만들어보며 **Flutter**를 학습 — 카카오톡 UI를 참고해 채팅 리스트·입력창을 구현하고 **Firestore 실시간 스트리밍**으로 메시지를 연동. Sliver 렌더링 오류(RenderViewport/RenderParagraph) 원인 분석, **Mockito 기반 Stream Unit Test**, ViewModel을 통한 Bottom Sheet 표시, TypeScript 개발자 관점의 **Dart** 정리 등 과정을 [아티클 8편](https://toyboy2.medium.com/list/flutter-c6e656a0db03)으로 공유 (실무 적용 경험은 없는 학습 단계)
- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 적용해 모듈화 구조 구축·운영(개인 프로젝트 한정), 게임도우미는 SwiftUI 전환 시 **Clean Architecture**를 함께 적용
- 위 경험을 [Article](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)로 작성해 Tuist CEO Pedro Piñera와 직접 연결되었고, [한국어 문서 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65)에 기여. 이후 CEO를 직접 운영 중인 Tuist 노하우 공유 오픈채팅방에 초대
- Seoul iOS Meetup에서 [**'Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'**](https://youtu.be/FFkEbqG4ips) 발표
- **TCA(The Composable Architecture)**를 개인 프로젝트에 적용하고 관련 경험을 [Medium 아티클](https://toyboy2.medium.com/list/tca-8b33da822cae)로 연재(미출시 프로젝트)
- Dev Korea Meetup 등 커뮤니티 정기 참여, [**Medium**](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682) 기술 Article 다수 발행

---

## 기술 스택

```
Swift · SwiftUI · UIKit · Objective-C
Combine · Swift Concurrency(async/await) · RxSwift
MVVM · Clean Architecture(개인 프로젝트) · TCA(개인 프로젝트)
AVFoundation · WidgetKit · StoreKit · WKWebView · PDFKit
SPM · CocoaPods · Tuist(개인 프로젝트)
Unit Test · XCTest · XCUITest · Instruments
Fastlane · GitLab CI/CD · GitHub Actions · Firebase
React Native · TypeScript · Native Bridge(Java/Objective-C) · Jest
Flutter · Dart(학습 · 아티클 연재)
C · C# · Java · Node.js · MySQL · Oracle · MSSQL
```

---

## 학력

**서일대학교** · 2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품(Ubicon2), 졸업작품 WIPI Designer
