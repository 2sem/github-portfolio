# 이영준

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

iOS 설계부터 배포, 운영까지 전 과정을 단독으로 책임져 온 엔지니어입니다. 공유 모빌리티 O2O를 비롯한 다양한 도메인에서 B2C와 B2B 앱을 함께 다루며 아키텍처 결정과 테스트·배포 프로세스를 스스로 구축했고, 크래시와 CS 지표를 근거로 개선 우선순위를 결정합니다. AI 에이전트는 동료로 대하고, 산출물은 비판적으로 검증하고 책임집니다.

**모바일 8년+ (iOS 5년+)** · 총 경력 15년+

---

## 경력

### SK AX (계약: 디투엘) · 2024.06 – 2025.10 · 프리랜서 · iOS Developer
IT 외주 SK 계열. SKT의 3개 Hybrid iOS 프로젝트 유지보수 : SWING(대리점 B2B) · T world(고객센터) · AI Layer SDK(AI 서비스 WebView)
- **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 **Cookie Storage 공유로 세션을 재사용**하고 API를 분석 후 서버 개발자에게 수정안 제시로 해결
- **AI Layer iOS SDK** 인수 후 Splash 화면이 넘어가지 않던 버그를 Timer로 애니메이션을 초기화·재실행하는 구조가 원인임을 파악하고 무한 재생 후 로딩 완료 시점에 Splash를 종료하는 방식으로 해결
- 프론트엔드 이슈 원인 파악을 위한 디버깅 가능 버전 배포 및 Safari 디버깅 지원
- 트래픽 급증 시 서버 과부하를 줄이기 위해 DB를 사용하는 API 호출 전에 접속 가능 여부를 확인하는 **대기열 기능** 구현으로 안정성 확보
- 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- Objective-C를 Swift로 점진적 마이그레이션, CocoaPods 종료 대비 라이브러리별 **SPM 전환**
- **Fastlane**으로 빌드 및 TestFlight, Slack 업로드 자동화
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + **MR Template** 적용으로 해결하고 타 프로젝트에도 전파
- 신규 API 연동 추가 시 **Unit Test 작성**으로 예외 사항 검증

`Swift` `Objective-C` `WKWebView` `JavaScript Bridge` `Hybrid App` `SwiftUI` `WidgetKit` `UIKit` `RxSwift` `MVVM` `Combine` `Swift Concurrency` `Firebase` `Fastlane` `GitLab CI/CD` `SPM` `CocoaPods` `Unit Test` `Jira`

### 올룰로 (킥고잉) · 2021.06 – 2023.10 · 정규직 · App Developer → Mobile Tech Lead
국내 최초 공유 킥보드(모빌리티) 서비스. React Native 기반 크로스플랫폼 앱(iOS·Android) 개발 및 운영
- Native Bridge의 Manifest 수정으로 **Android 12 권한 정책** 대응
- OS별 분리돼 있던 GitHub Workflow를 **Fastlane 기반으로 통합**, 빌드 캐시 적용으로 **배포 소요 시간 50% 감축**
- Android 배포를 AWS S3 링크 공유 방식에서 **APK Slack 직접 업로드**로 개선해 테스트 단계 단축
- **Channel Talk(외부 CX SDK) 통합** 후 알림 분류 메소드에서 발생한 Crash를 제조사에 제보하고 수정안 PR 제출
- 구역 정보 API 호출 **4회에서 1회로 데이터 사용량 최소 75% 절감**(+데이터 캐싱), 네트워크 트래픽 최적화에 기여
- **Amplitude**로 사용자 경험 데이터 수집, BLE 로직 개선 성과 측정
- 엔지니어 2~3명 리드, **1일 1시간** 기술부채 해소 시간을 도입해 React Native 업그레이드 등 묵은 과제 정리
- PR Template·Jira Workflow로 코드 리뷰·업무 프로세스 표준화

`React Native` `TypeScript` `Redux` `Jest` `Java Objective-C` `Fastlane` `GitHub Actions` `Amplitude` `Channel Talk SDK`

### 에스제이더블유인터내셔널 (시원스쿨) · 2018.06 – 2021.05 · 정규직 · iOS Developer
국내 1위 온라인 어학 교육 플랫폼
- 합류 당시 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 제로베이스로 자체 앱 단독 개발
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1에서 **4.7**로 상향
- **Facebook · Google · Kakao · Naver 소셜 로그인** 연동, Apple 로그인의 가상 이메일 정책 이슈는 **심사 기간 중 소셜 로그인 UI를 숨기는 방식**으로 해결
- App **Store 리뷰**에 직접 답변하고, 기획이 불필요한 개선 사항은 직접 조치하여 평점 유지
- 전체 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 **QA 프로세스** 구축
- **Instruments**로 메모리 누수 탐지, Memory Graph로 순환 참조 해결
- StoreKit 기반 **인앱결제**를 직접 제안·구현해 도서 부록 앱을 자체 수익화

`Swift` `Objective-C` `RxSwift` `MVVM` `XCUITest` `Instruments` `StoreKit` `AVFoundation` `Social Login SDK(Facebook · Google · Kakao · Naver)` `Fastlane` `Firebase`

### 개인 iOS 개발자 · 2017.02 – 2018.06 · 개인
- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 **광고 수익 월 $100 이상** 달성(2017.12 기준, 2020년 기준 $800+)
- '관련주식검색기' : 푸시 알림 제안 + Node.js·**FCM** 기반 발송 서버 구축으로 **매출 2배** 달성(최대 **MAU 5,899**, 평균 MAU 1,100)
- '문자행동'(국회의원 연락처·SNS 조회 앱) : SBS 등 언론사 주목

`Swift` `UIKit` `Firebase` `FCM` `Node.js`

### 크레디프 · 2009.08 – 2017.02 · 정규직 · 개발자
이동통신 3사·공공기관 대상 SI/SM 전문기업
- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- BLE Beacon 구매자 대상 SKT **O2O Android SDK**를 JNI 대신 **AIDL**로 만들어 Java 기반으로 개발할 수 있는 환경 제공
- Android 기압 센서 기반 층 추정 측위 솔루션 개발
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결, 신규 언어·플랫폼 선행 연구

`C` `C#` `Java` `Python` `RESTful API` `MySQL` `Oracle` `MSSQL` `AIDL`

---

## 외부 활동
- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영(개인 프로젝트 한정). 게임도우미는 **Clean Architecture**도 함께 적용
- 위 경험을 [Article](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)로 작성해 Tuist CEO Pedro Piñera와 직접 연결, [한국어 문서 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65)에 기여. 이후 운영 중인 **Tuist 노하우 공유 오픈채팅방**에 CEO 초대
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- Dev Korea Meetup 등 커뮤니티 정기 참여, [**Medium**](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682)·TCA 등 기술 Article 다수 발행

---

## 학력

### 서일대학교
2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품: Ubicon2, 졸업작품: WIPI Designer
