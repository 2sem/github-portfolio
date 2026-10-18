# 이영준

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

iOS를 중심으로 다양한 도메인과 플랫폼에서 크래시 대응부터 성능 최적화, CI/CD 구축까지 안정적인 서비스 운영을 위한 전 과정을 다뤄왔습니다. 모바일 엔지니어 2~3명을 리드하며 코드 리뷰 프로세스와 기술부채 해소 사이클을 팀에 정착시켰고, 처음 사용하는 도구도 연구해서 기존 동료도 모르는 방법을 찾아 공유해 모두의 효율을 개선했습니다. 기획과 API Spec에 적극적으로 피드백하고 더 좋은 제품을 위한 방안을 함께 찾으며, AI 코딩 에이전트를 동료로 취급하되 결과는 비판적으로 검증합니다. 아직 경험하지 못한 핀테크 도메인에서, 사용자가 믿고 쓰는 금융 앱의 안정성을 핀다와 함께 만들어가고 싶습니다.

**모바일 8년+ (iOS 5년+)** · 총 경력 15년+

---

## 경력

### SK AX (계약: 디투엘) · iOS Developer
**2024.06 – 2025.10 (1년+) · 프리랜서**
IT 외주 SK 계열 · SKT의 3개 iOS 프로젝트 유지보수 (T world B2C, SWING Enterprise B2B, AI Layer SDK)

- WKWebView Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 기존 PR을 의심하고 근본 원인을 찾아 해결. 전임자 PR의 가설로는 동일한 Crash가 재현되지 않아, 코드 역추적으로 재현시켜 원인 특정
- 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열(Queue) 기능** 구현으로 트래픽 급증 구간 안정성 확보
- **RxSwift** 기반 코드를 API 호출은 **Swift Concurrency**로, 신규 UI는 **Combine** 기반으로 구현·점진 전환하여 개발 생산성 향상과 성능 개선
- 보안 기능을 설정한 사용자가 **SwiftUI 위젯**을 이용하지 못하던 문제를, 앱과 위젯 간 Cookie Storage 공유로 세션을 재사용하고 위젯 API를 분석하여 서버 개발자에게 수정 방안을 전달해 해결
- 설명 없는 대형 MR로 리뷰가 불가능하던 문제를 Jira에 Epic을 도입해서 Subtask 단위 MR을 제출할 수 있게 하고 **MR Template**으로 설명을 의무화해서 개발 문화 개선, 매니저 만족으로 타 프로젝트에도 전파
- 주니어 엔지니어 **2명**을 Subtask 단위 업무 할당과 분할 위임 방식으로 리딩
- CocoaPods 종료에 대비해 라이브러리별 **SPM** 전환을 진행하고, Objective-C 코드를 Extension을 사용하여 메소드 단위로 Swift에 점진 마이그레이션
- GitLab CI 실행 권한이 없는 환경에서 **Fastlane**로 빌드부터 **TestFlight**, Slack IPA 업로드까지 자동화. 신규 API 추가 시 **Unit Test**를 작성해 예외 사항 검증

`Swift` `SwiftUI` `UIKit` `Objective-C` `RxSwift` `Combine` `Swift Concurrency` `WidgetKit` `WKWebView` `MVVM` `Unit Test` `XCTest` `SPM` `CocoaPods` `Firebase` `GitLab` `Fastlane` `Jira` `Confluence`

---

### 올룰로 (킥고잉) · App Developer → **Mobile Tech Lead**
**2021.06 – 2023.10 (2년+) · 정규직**
국내 최초 공유 킥보드(모빌리티) 서비스 · React Native 크로스플랫폼

**리드로서 (2022.04 – 2023.10)**

- 모바일 엔지니어 **2~3명**을 리드하며 **1일 1시간** 기술부채 해소 시간을 도입, React Native 버전 업그레이드 등 미뤄지던 기술 과제를 해소
- 월간 모바일 개발자 회의를 운영해 노하우와 신기술을 공유하고, 기술적 도전 과제 도출과 도전자 선정
- **PR Template** 도입으로 코드 리뷰 프로세스를 정비하고, Jira Workflow 개선으로 업무 프로세스 효율화
- UX팀과 협의로 Figma와 소스 상의 Asset 이름을 일치시켜, 디자인 부서와 커뮤니케이션 및 구현 비용 절감

**개발자로서 (2021.06 – 2022.03)**

- OS별로 분리돼 있던 GitHub Workflow를 **Fastlane** 기반으로 통합하고 빌드 캐시를 적용해 **배포 소요 시간 50% 감축**

- AWS S3 업로드 후 링크를 공유하던 Android 배포를 **Slack에 직접** **APK를** **업로드**하는 방식으로 개선해 테스트 단계 단축
- 구역 정보 API 호출을 **4회에서 1회로 줄여 데이터 사용량 최소 75% 절감**, 사용자와 인프라의 네트워크 트래픽 최적화에 기여
- Naver Map SDK의 **Native Bridge**에 축척 계산 로직을 추가해 조회된 경로 전체를 지도에서 미리 볼 수 있도록 자동 Zoom(길안내) 구현
- 전화 전용이던 고객 지원을 인앱으로 전환하기 위해 **Channel Talk SDK**를 통합, 제공된 알림 분류 메소드에서 발생한 Crash를 원인 분석해 제보하고 **수정안 PR 제출**

- BLE 통신 로직을 최적화하고 스캔·연결 소요 시간을 **Amplitude**로 지표화해 개선 효과를 검증
- **Jest** 기반 Unit 테스트를 보강하고 실행 Parameter를 조정, 캐시 적용으로 테스트 실행 성능 개선

`React Native` `TypeScript` `Redux` `Native Bridge(Java/Objective-C, Java/Kotlin)` `Naver Map SDK` `BLE` `Channel Talk SDK` `Amplitude` `Jest` `Fastlane` `GitHub Actions` `GitLab CI/CD`

---

### 에스제이더블유인터내셔널 (시원스쿨) · iOS Developer
**2018.06 – 2021.05 (3년) · 정규직**
국내 1위 온라인 어학 교육 플랫폼

- 합류 후 한 달째 정체돼 있던 프로젝트의 기획서를 재검토하고, 서버 개발자와 소통하여 제로베이스에서 신규 iOS 앱을 단독 개발하고 일정 완수에 기여
- **RxSwift** 도입과 함께 **MVVM 아키텍처**를 적용해 화면 단위 상태 관리
- 인앱 리뷰 요청 노출 시점을 설계·구현해 앱 평점 **4.1에서 4.7**로 상향
- 민원 발생 전에 불량 영상을 선탐지하기 위해, 전체 강의를 순회하며 재생 가능 여부를 검증하는 **XCUITest** 기반 QA 프로세스를 구축해 검출된 정보를 담당 부서에 전달
- 최소화·최대화 기능을 전 화면에서 재사용할 수 있도록 기반 ViewController를 설계·구현하고, **AVFoundation** 기반 공용 영상 플레이어 라이브러리를 개발해 다른 프로젝트와 공유
- React Native, Unity, Xamarin 등 크로스 플랫폼 프레임워크를 선행 학습해 **팀 내 교육** 및 파일럿 프로젝트 수행

`Swift` `UIKit` `RxSwift` `MVVM` `Objective-C` `AVFoundation` `StoreKit` `XCUITest` `Instruments` `Fastlane` `Firebase` `Storyboard`

---

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+)**

- 9시 출근 6시 퇴근 형태로 개인 앱 다수를 기획·개발·출시해 운영
- '관련주식검색기'에 푸시 알림을 제안하고 Node.js와 **FCM** 기반 서버를 구축해 **매출 2배** 달성
- 앱 업데이트 없이 콘텐츠 갱신이 필요한 앱은 별도 서버 없이 **Google Drive Xlsx를 원격 데이터소스**로 활용하는 경량 아키텍처로 구성
- iPad용 PDF 프레젠테이션 앱 'ShowNote'의 기획을 전면 개편하며 특허 핵심 개념을 고안, **특허 출원**과 2018.07 **10억 원 규모 엔젤 투자 유치(Enable Holdings)**에 기여

`Swift` `UIKit` `Firebase` `PDFKit` `Node.js` `Google Drive API`

---

### 크레디프 · 개발자
**2009.08 – 2017.02 (7년+) · 정규직**
이동통신 3사·공공기관 대상 SI/SM 전문기업

- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 7년 이상 **풀스택**으로 **30개 이상 프로젝트** 개발·유지보수
- 저전력 **Beacon** 구매자에게 Service와의 통신을 제공하는 SKT **O2O Android SDK**를 JNI 대신 **AIDL** 기반으로 개발
- 담당자 공백, 인수인계 부재, 장애 등 위기 상황 투입돼 문제 해결하고 신규 언어·플랫폼 선행 연구

`C` `C#` `Java` `WPF` `Python` `AIDL` `Beacon` `RESTful API` `MySQL` `Oracle` `MSSQL` `PostgreSQL`

---

## AI 활용 경험

- SK AX에서 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 MR 리뷰 에이전트**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9)를 구축, 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원하고 비개발자 매니저의 AI 활용 KPI 달성에 기여
- Storyboard 기반 개인 앱 유지보수를 위해 **Claude Code**와 opencode(Codex 기반)로 [**SwiftUI 마이그레이션 자동화 Skill**](https://github.com/2sem/swiftui-migrator-skill)을 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**

- 유료 버전 전용 MCP를 무료 버전에서 쓰기 위해 [**Davinci Resolve Lite MCP**](https://github.com/2sem/davinci-resolve-lite-mcp)를 구축, 장면 분류·편집·검증 단계를 Skill과 Script로 분리해 신뢰성 향상

---

## 외부 활동

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 적용해 모듈화 구조를 구축·운영(개인 프로젝트 한정). 게임도우미는 SwiftUI 전환 시 **Clean Architecture**를 함께 적용
- Tuist 경험을 [Article](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)로 정리해 Tuist CEO Pedro Piñera와 연결되었고, [한국어 문서 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65)에 기여. 이후 운영 중인 Tuist 노하우 공유 오픈채팅방에 CEO를 초대
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- Dev Korea Meetup 등 커뮤니티 정기 참여, [**Medium**](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5), [React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682), TCA 등 기술 아티클 다수 발행

---

## 학력

**서일대학교**  2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품(Ubicon2), 졸업작품 WIPI Designer
