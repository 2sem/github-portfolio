# 이영준

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

**모바일 8년+ (iOS 5년+) · 총 경력 15년+**

iOS를 중심으로 설계부터 배포, 운영까지 단독으로 책임져 본 엔지니어입니다. 문제 해결을 위해 담당 분야를 넘어 적극적으로 의견을 제시하며 함께 고민하고, 새로운 기술과 도구를 먼저 실험하고 기존 구성원도 모르는 방법을 찾아 공유해왔습니다. AI 코딩 도구를 워크플로우에 결합해 개발 속도를 끌어올리되, 산출물은 비판적으로 검증하고 책임집니다. SDK를 만드는 쪽과 쓰는 쪽을 모두 경험했습니다.

---

## AI 활용 경험

- SK AX에서 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- 유료 버전 전용 기능인 Davinci Resolve MCP를 무료 버전 [davinci-resolve-lite-mcp](https://github.com/2sem/davinci-resolve-lite-mcp)으로 구축, 장면 분류·편집 방법·검증 단계를 Skill과 Script로 분리해 신뢰성 향상

---

## 주요 경력

### SK AX (계약: 디투엘) — IT 외주 SK 계열
**2024.06 – 2025.10 (1년+) · iOS Developer**
SKT의 3개 iOS 프로젝트 유지보수 (T world: B2C 고객센터 앱, SWING: 대리점 대상 B2B 하이브리드 앱, AI Layer SDK)

- **AI Layer iOS SDK** 인수 후 Splash 화면이 넘어가지 않던 버그를 Timer로 애니메이션을 초기화·재실행하는 구조가 원인임을 파악하고 무한 재생 후 종료 시점에 멈추는 방식으로 해결. 네이티브 화면에서 WebView로 AI 서비스를 호스팅하는 브릿지 구조로 2개 앱(T world·T membership)이 소비
- **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 API를 분석 후 서버 개발자에게 수정안 제시로 해결
- 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열(Queue) 기능** 구현으로 트래픽 급증 구간 안정성 확보
- Closure 기반 API 호출은 **Swift Concurrency**, 신규 UI는 **Combine**으로 점진 전환해 생산성·성능 개선. Objective-C는 Extension 단위로 Swift 마이그레이션, CocoaPods 종료 대비 라이브러리별 **SPM** 전환 진행
- 신규 API 연동 추가 시 **Unit Test 작성**으로 예외 사항 검증
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + MR Template 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파

`Swift` `SwiftUI` `UIKit` `Objective-C` `WKWebView` `WidgetKit` `Combine` `Swift Concurrency` `RxSwift` `MVVM` `Unit Test` `SPM` `Fastlane` `GitLab CI/CD` `Firebase`

### 올룰로 (킥고잉) — 국내 최초 공유 킥보드 서비스
**2021.06 – 2023.10 (2년+) · 정규직 · App Developer → Mobile Tech Lead**
React Native 기반 크로스플랫폼 앱(iOS·Android) 개발 및 모바일 조직 리드

- **Channel Talk**(외부 CX SDK) 통합으로 전화 전용 고객 지원을 인앱 전환, 통합 후 알림 분류 메소드에서 발생한 Crash를 채널톡에 제보하고 수정안 PR 제출
- 전기 자전거 잠금 장치·헬멧 잠금 장치 등 신규 장비 **BLE 연동** 구현, 대여 시 잠금 해제·반납 시 잠금 상태 확인 처리
- 구역 정보 API 호출 4회→1회로 데이터 사용량 최소 75% 절감(위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- iOS/Android로 분리돼 있던 GitHub CI/CD를 Fastlane 기반으로 통합, 빌드 캐시 적용으로 배포 소요 시간 50% 감축
- 엔지니어 2~3명 리드, **1일 1시간** 기술부채 해소 시간 도입으로 React Native 업그레이드 등 기술부채 해소

`React Native` `TypeScript` `Redux` `Java/Kotlin(Native Bridge)` `Java/Objective-C(Native Bridge)` `Channel Talk SDK` `BLE` `Fastlane` `GitHub Actions`

### 에스제이더블유인터내셔널 (시원스쿨) — 국내 1위 온라인 어학 교육 플랫폼
**2018.06 – 2021.05 (3년) · 정규직 · iOS Developer**

- 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 자체 앱 단독 개발
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향
- AVFoundation 기반 공용 영상 플레이어 라이브러리 개발해서 다른 앱과 공유
- 전체 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 **QA 프로세스** 구축
- **Instruments**로 메모리 릭 탐지, Memory Graph로 순환 참조 해결
- **React Native, Unity, Xamarin** 등 CrossPlatform 선행 학습, 팀 내 교육 및 파일럿 프로젝트 수행
- App Store 리뷰에 답변하고, 기획이 불필요한 개선 사항은 조치

**빅토익보카** · **StoreKit 기반 인앱결제**를 제안·구현해 도서 부록을 넘어 자체 수익화, 백그라운드 재생(자동 단어 넘김) 기능 제안·구현
**암기고래** · Objective-C로 된 앱을 인수해 Swift로 점진 마이그레이션, 레거시 리팩토링

`Swift` `Objective-C` `AVFoundation` `StoreKit` `XCUITest` `Instruments`

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+) · 개인**

- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 광고 수익 월 $100 이상 달성(2017.12 기준, 2020년 기준 $800+)
- '관련주식검색기': 푸시 알림 제안 + Node.js·**FCM** 기반 발송 서버 구축으로 매출 2배 달성(최대 MAU 5,899, 평균 MAU 1,100)
- 앱 업데이트 없이 콘텐츠 갱신이 필요한 앱은 별도 서버 없이 **Google Drive Xlsx를 원격 데이터소스**로 활용하는 경량 아키텍처 구축
- 공인중개사 요약집 앱: 팝업 디자인 4가지 **Firebase A/B 테스트**로 비교 검증
- ShowNote(iPad용 PDF 기반 프레젠테이션 앱): 기획을 전면 개편하며 특허 핵심 'Trigger' 개념 고안, 퇴사 후에도 유지보수를 지속해 특허 출원 및 2018.07 10억 원 규모 엔젤 투자 유치(Enable Holdings)에 기여

`Swift` `UIKit` `Firebase` `PDFKit` `Node.js` `Google Drive API`

### 크레디프 — 이동통신 3사·공공기관 대상 SI/SM 전문기업
**2009.08 – 2017.02 (7년+) · 정규직 · 개발자**

- 서버(C)부터 클라이언트(C#/Java, 모바일)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수. KT 유전체 클라우드(gStorage) 크로스플랫폼 재구축, WIFI 실내측위 연구 플랫폼 풀스택 단독 개발
- 저전력 **Beacon** 구매자 대상 SKT **O2O Android SDK**를 JNI 대신 **AIDL** 기반으로 개발

`C` `C#` `Java` `RESTful API` `AIDL` `Beacon` `MySQL` `Oracle` `MSSQL` `PostgreSQL`

---

## 외부 활동

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 적용해 모듈화 구조 구축·운영(개인 프로젝트 한정). 게임도우미는 Clean Architecture도 함께 적용
- 위 경험을 [Article](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)로 작성해 Tuist CEO Pedro Piñera와 LinkedIn으로 직접 연결, [한국어 페이지 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65)에 기여. 이후 한국 개발자와의 소통을 원한 CEO를 운영 중인 **Tuist 노하우 공유 오픈채팅방**에 초대
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- Dev Korea Meetup 등 커뮤니티 정기 참여, [**Medium**](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682)·TCA 등 기술 Article 다수 발행

---

## 스킬

Swift · SwiftUI · UIKit · Objective-C · Java/Kotlin(Native Bridge) · Combine · Swift Concurrency · RxSwift
MVVM · Clean Architecture(게임도우미 한정) · TCA(미출시 개인 프로젝트) · Tuist(개인 프로젝트 한정) · SPM · CocoaPods
WKWebView · WidgetKit · AVFoundation · StoreKit · BLE · Firebase · Unit Test · XCUITest · Instruments
Fastlane · GitLab CI/CD · GitHub Actions · React Native · TypeScript · Jest
C · C# · Java · RESTful API · Node.js · MySQL · Oracle · PostgreSQL

---

## 학력

**서일대학교** · 2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품: Ubicon2, 졸업작품: WIPI Designer
