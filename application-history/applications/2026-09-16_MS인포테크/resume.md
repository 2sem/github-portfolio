# 이영준

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

iOS를 중심으로 공유 모빌리티, 어학, 통신사 도메인에서 다양한 플랫폼의 B2C·B2B 프로젝트를 수행했습니다. 개발 환경 제약에 포기하지 않고 점진적인 전환으로 기술부채를 해결하며, 도구의 기능을 연구해 모두의 업무를 효율화합니다. 담당 기술을 넘어 좋은 제품을 만들기 위해 되물으며 함께 고민하고, AI를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다.

**iOS 5년+ (모바일 8년+)** · 총 경력 15년+

---

## 주요 경력

### SK AX (계약: 디투엘) — IT 외주 SK 계열
**2024.06 – 2025.10 (1년+) · iOS Developer**
SKT의 3개 iOS 프로젝트 유지보수 (SWING, T world, AI Layer SDK)

- **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 역추적하여 동일 Crash 재현 및 원인 해결
- **AI Layer iOS SDK**의 Splash에서 넘어가지 않는 버그를 매회 Timer를 재실행하는 대신 로딩 종료 시 종료하도록 개선하여 해결
- SWING의 **레거시 Objective-C**를 점진 전환으로 Swift로 **마이그레이션** 완료
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 API를 분석 후 **서버 개발자에게 수정안 제시**로 해결
- Closure 기반 API 호출은 Swift Concurrency로 점진 전환, 신규 UI는 RxSwift대신 Combine으로 구현해 생산성·성능 개선
- 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열 기능** 구현으로 트래픽 급증 구간 안정성 확보
- 프론트엔드 이슈 발생 시 원인 파악을 위한 디버깅 지원
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + **MR Template** 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파
- 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- Fastlane으로 빌드 및 TestFlight, Slack IPA **업로드 자동화**
- **주니어** 엔지니어 2명을 Subtask 단위 업무 할당·분할 위임 방식으로 **코칭**

`Swift` `Objective-C` `UIKit` `Storyboard` `WKWebView` `SwiftUI` `WidgetKit` `Combine` `Swift Concurrency` `MVVM` `RxSwift` `Unit Test` `SPM` `CocoaPods` `Firebase` `Fastlane` `GitLab CI/CD` `Jira` `Confluence`

---

### 올룰로 (킥고잉) — 국내 최초 공유 킥보드(모빌리티) 서비스
**2021.06 – 2023.10 (2년+) · 정규직 · App Developer → Mobile Tech Lead**
React Native 기반 크로스플랫폼 앱(iOS·Android)

- **Channel Talk(외부 CX SDK) 통합** — 전화 전용 고객 지원을 인앱 전환, 통합 후 알림 분류 메소드에서 발생한 Crash를 제조사에 제보하고 수정안 PR 제출
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**, 빌드 캐시 적용으로 **배포 소요 시간 50% 감축**
- 엔지니어 2~3명 리드, **1일 1시간** 기술부채 해소 시간 도입 → React Native 업그레이드 등 기술부채 해소
- PR Template·Jira Workflow로 코드 리뷰·업무 프로세스 표준화

`React Native` `TypeScript` `Java/Objective-C(Native Bridge)` `Jest` `Fastlane` `GitHub Actions`

---

### 에스제이더블유인터내셔널 (시원스쿨) — 국내 1위 온라인 어학 교육 플랫폼
**2018.06 – 2021.05 (3년) · 정규직 · iOS Developer**

- 합류 당시 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 **소통**하여 제로베이스에서 신규 앱 단독 개발
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향
- App **Store 리뷰**에 **직접 답변**하고, 기획이 불필요한 개선 사항은 직접 조치
- RxSwift 도입과 함께 **MVVM 아키텍처** 적용
- AVFoundation 기반 공용 영상 플레이어 라이브러리 개발해서 다른 앱과 공유
- 최소화·최대화 기능을 전 화면에서 **재사용** 가능하도록 기반 ViewController 설계·구현
- 전체 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 **QA 프로세스** 구축
- **Instruments**로 메모리 릭 탐지, Memory Graph로 순환 참조 해결
- 화면 녹화 방지·탈옥 감지 등 콘텐츠 보호 기능 구현

**암기고래** — **Objective-C로 된 계열사 앱을 인수해 Swift로 점진 마이그레이션**, 레거시 리팩토링

**빅토익보카** — 기획·디자인·Android 앱이 모두 다른 상황에서 기획을 새로 정립해 iOS 버전 개발 / **StoreKit 기반 인앱결제**를 직접 제안·구현해 도서 부록을 넘어 자체 수익화

`Swift` `Objective-C` `UIKit` `Storyboard` `MVVM` `RxSwift` `StoreKit` `AVFoundation` `XCUITest` `Instruments` `Fastlane` `Firebase`

---

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+) · 개인**

- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 **광고 수익 월 $100 이상** 달성(2017.12 기준, 2020년 기준 $800+)
- '관련주식검색기': 푸시 알림 제안 + Node.js·**FCM** 기반 발송 서버 구축으로 **매출 2배** 달성(최대 **MAU 5,899**, 평균 MAU 1,100)
- 공인중개사 요약집 앱: 팝업 디자인 4가지 **Firebase A/B 테스트**로 비교 검증
- 앱 업데이트 없이 콘텐츠 갱신이 필요한 앱(공인중개사요약집 등)은 별도 서버 없이 **Google Drive Xlsx를 원격 데이터소스**로 활용하는 경량 아키텍처 구축

`Swift` `UIKit` `Storyboard` `StoreKit` `Firebase` `Node.js` `Google Drive API`

---

### 크레디프 — 이동통신 3사·공공기관 대상 SI/SM 전문기업
**2009.08 – 2017.02 (7년+) · 정규직 · 개발자**

- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결, 신규 언어·플랫폼 선행 연구
- KT 유전체 클라우드(gStorage) 크로스플랫폼 재구축

`C` `C#` `Java` `RESTful API` `MySQL` `Oracle` `MSSQL` `PostgreSQL`

---

## 외부 활동

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영(개인 프로젝트 한정)
- [**Medium**](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682) 등 기술 Article 다수 발행, Dev Korea Meetup 등 커뮤니티 정기 참여

---

## 기술 스택

```
Swift · Objective-C · SwiftUI · UIKit · Storyboard
WKWebView(Hybrid) · Combine · Swift Concurrency(async/await) · RxSwift
MVVM · Clean Architecture(게임도우미 한정) · TCA(미출시 개인 프로젝트)
SPM · CocoaPods · Tuist(개인 프로젝트 한정)
Git · Fastlane · CI/CD · GitLab CI/CD · GitHub Actions
Unit Test · XCUITest · Instruments
RESTful API · StoreKit · AVFoundation · WidgetKit · Firebase
React Native · TypeScript · Jest · Node.js
```

---

## 학력

**서일대학교**
2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
