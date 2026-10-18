# 이영준 (Young-jun Lee)

**Senior iOS Developer · Mobile SDK**

toyboy2@hanmail.net · [GitHub](https://github.com/2sem) · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io)

**iOS 5년+ (모바일 8년+)** · 총 경력 15년+

---

## 소개

iOS를 중심으로 다양한 도메인과 플랫폼에서 크래시 대응부터 성능 최적화, CI/CD 구축까지 안정적인 서비스 운영을 위한 전 과정을 다뤄왔습니다. 처음 사용하는 도구도 업무 효율을 높이는 방법을 연구해서 기존 동료도 모르는 방법을 찾아 공유합니다. 스타트업 테크 리드 후 유지보수 프리랜서로 기술력을 인정 받아 3개의 프로젝트를 동시에 리드했습니다. 누구나 필요한 순간에 도움을 받을 수 있는 경험을 아토머스에서 함께 만들고 싶습니다.

---

## AI 활용 경험

- SK AX에서 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- Youtube 영상 편집을 위해 유료 버전 전용 기능인 Davinci Resolve MCP를 무료 버전 [davinci-resolve-lite-mcp](https://github.com/2sem/davinci-resolve-lite-mcp)으로 직접 구축, 장면 분류·편집 방법·검증 단계를 Skill과 Script로 분리해 신뢰성 향상

---

## 경력

### SK AX (계약: 디투엘) — IT 외주 SK 계열
**2024.06 – 2025.10 (1년+) · iOS Developer**
SKT의 3개 iOS 프로젝트 유지보수 (SWING, T world, AI Layer SDK)

- 타 SKT 앱이 소비하는 브릿지 SDK **AI Layer iOS SDK** 유지보수를 담당하여 Accessibility·UI 등 개선
- **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 코드를 추적하여 동일 Crash 재현 및 원인 해결
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 API를 분석 후 **서버 개발자에게 수정안 제시**로 해결
- Closure 기반 API 호출은 **Swift Concurrency**, 신규 UI는 **Combine**으로 점진 전환해 생산성·성능 개선
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + **MR Template** 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파

`Swift` `SwiftUI` `UIKit` `WidgetKit` `Combine` `Swift Concurrency` `RxSwift` `MVVM` `WKWebView` `Unit Test` `XCTest` `SPM` `Firebase` `GitLab CI/CD` `Jira`

### 올룰로 (킥고잉) — 국내 최초 공유 킥보드(모빌리티) 서비스
**2021.06 – 2023.10 (2년+) · App Developer → Mobile Tech Lead**
기술 스택: React Native (Native Bridge는 Objective-C / Java)

- Channel Talk(외부 CX 서비스) **SDK 통합** 후 제공된 알림 분류 메소드에서 발생한 Crash를 제조사에 제보하고 **수정안 PR 제출**
- 구역 정보 API 호출 4회→1회로 **데이터 사용량 최소 75% 절감**으로 네트워크 트래픽 최적화에 기여
- Naver Map SDK **Native** Bridge에 축척 계산 로직 추가해 지도 자동 Zoom 구현
- **1일 1시간** 기술부채 해소 시간, 월간 개발자 회의 도입으로 React Native 업그레이드 등 기술부채 해소와 도전 과제 도출
- PR Template·Jira Workflow로 코드 리뷰·**업무** 프로세스 **효율화**
- Github Workflow에 빌드 캐시 적용으로 **배포 소요 시간 50% 감축**

`React Native` `TypeScript` `Objective-C(Native Bridge)` `Channel Talk SDK` `BLE` `Naver Map SDK` `Fastlane` `GitHub Actions`

### 에스제이더블유인터내셔널 (시원스쿨) — 국내 1위 온라인 어학 교육 플랫폼
**2018.06 – 2021.05 (3년) · iOS Developer**

- Private Cocoapods 공용 **영상 플레이어 라이브러리**를 개발해서 다른 앱과 공유
- **정체된 프로젝트**를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 제로베이스에서 자체 앱 단독 개발
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향
- 화면 녹화 방지·탈옥 감지 등 **콘텐츠 보호** 기능 구현
- 모든 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 **QA 프로세스** 구축
- App **Store 리뷰**에 **직접 답변**하고, 기획이 불필요한 개선 사항은 직접 조치
- 빅토익보카에 **인앱결제**를 직접 제안·구현해 도서 부록을 넘어 자체 **수익화**, 백그라운드 재생(자동 단어 넘김) 기능 제안·구현하고 Android에도 적용 유도

`Swift` `Objective-C` `MVVM` `RxSwift` `AVFoundation` `StoreKit` `XCUITest` `Instruments` `Fastlane` `Firebase`

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+) · 개인**

- 개인 iOS 앱 다수를 기획·개발 출시해 앱 전체 합산 **광고 수익 월 $100** 달성(2017.12 기준, 2020년 기준 $800+)
- '관련주식검색기': 푸시 알림 제안 + Node.js·**FCM** 기반 발송 서버 구축으로 **매출 2배** 달성(최대 **MAU 5,899**, 평균 MAU 1,100)
- **ShowNote**(iPad용 PDF 기반 프레젠테이션 앱): 기획을 전면 개편하며 특허 핵심 **'Trigger'** 개념 고안, 퇴사 후에도 유지보수를 지속해 **특허 출원** 및 2018.07 **10억 원 규모 엔젤 투자 유치(Enable Holdings)**에 기여

`Swift` `UIKit` `PDFKit` `Node.js` `Firebase`

### 크레디프 — 이동통신 3사·공공기관 대상 SI/SM 전문기업
**2009.08 – 2017.02 (7년+) · 개발자**

- BLE **Beacon**을 실내 측위에 사용할 수 있는 SKT **O2O Android SDK** 개발
- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결, 신규 언어·플랫폼 선행 연구

`Java` `C` `C#` `RESTful API` `AIDL` `Beacon` `MySQL` `Oracle`

---

## 외부 활동

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영. 게임도우미는 **Clean Architecture**도 함께 적용
- 위 경험을 기록한 [Article](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)를  본 Tuist CEO Pedro Piñera가 LinkedIn으로 연락, [한국어 페이지 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65), Feedback 등 기여
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- Dev Korea Meetup 등 커뮤니티 정기 참여, Medium에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·React Native·TCA 등 기술 Article 다수 발행

---

## 스킬

```
Swift · SwiftUI · UIKit · Objective-C
MVVM · Clean Architecture(게임도우미 한정) · TCA(미출시 개인 프로젝트)
Combine · Swift Concurrency(async/await) · RxSwift
AVFoundation · StoreKit · WidgetKit · WKWebView · BLE
SPM · CocoaPods · Tuist(개인 프로젝트 한정)
Fastlane · CI/CD · GitLab CI/CD · GitHub Actions
Unit Test · XCTest · XCUITest · Instruments
Firebase · RESTful API
React Native · TypeScript · Jest
```

---

## 학력

**서일대학교** · 2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품: Ubicon2, 졸업작품: WIPI Designer
