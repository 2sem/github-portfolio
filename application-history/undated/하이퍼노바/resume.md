# 이영준

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

iOS를 중심으로 설계부터 배포, 운영까지 단독으로 책임져 본 엔지니어입니다. 문제 해결을 위해 담당 분야를 넘어 적극적으로 의견을 제시하며 함께 고민하고, 새로운 기술/도구를 먼저 실험하고 기존 구성원도 모르는 방법을 찾아 공유해왔습니다. AI 코딩 도구를 워크플로우에 결합해 개발 속도를 끌어올리되, 산출물은 비판적으로 검증하고 책임집니다. 국내 1위 어학 교육 플랫폼에서 학습 경험을 만들어 본 경험을 살려, 헤이링이 새로운 시장에서 처음 만나는 사용자 경험을 하이퍼노바와 함께 만들고 싶습니다.

**모바일 8년+ (iOS 5년+)** · 총 경력 15년+

---

## AI 활용 경험

- SK AX에서 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, SK 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있는 환경 구성
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- Youtube 영상 편집을 위해 유료 버전 전용 기능인 Davinci Resolve MCP를 무료 버전 [davinci-resolve-lite-mcp](https://github.com/2sem/davinci-resolve-lite-mcp)으로 직접 구축, 장면 분류·편집 방법·검증 단계를 Skill과 Script로 분리해 신뢰성 향상

---

## 주요 경력

### SK AX (계약: 디투엘) — IT 외주 SK 계열
**2024.06 – 2025.10 (1년+) · iOS Developer**
SKT의 3개 iOS 프로젝트 유지보수 (SWING, T world, AI Layer SDK)

- WebView로 AI 서비스를 호스팅하는 브릿지 SDK인 **AI Layer iOS SDK** 유지보수, Accessibility·UI 개선
- **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결
- 서버 접속 과부하를 줄이기 위한 **대기열 기능** 구현으로 안정성 확보에 기여
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 **API를 분석 후 서버 개발자에게 수정안 제시**로 해결
- Closure 기반 API 호출은 Swift Concurrency 점진 전환, 신규 UI는 Combine으로 구현해 생산성·성능 개선
- 설명 없는 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + **MR Template** 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파
- FE 이슈 발생 시 원인 파악을 위한 Webview 디버깅 가능 버전 배포 등 지원 수행
- 신규 API 연동 추가 시 **Unit Test 작성**으로 예외 사항 검증
- 주니어 엔지니어 2명을 Subtask 단위 업무 할당·분할 위임 방식으로 리딩

`Swift` `SwiftUI` `UIKit` `Objective-C` `WidgetKit` `Combine` `Swift Concurrency` `Unit Test` `SPM` `WKWebView` `MVVM` `RxSwift` `GitLab CI/CD` `Fastlane` `Jira`

---

### 올룰로 (킥고잉) — 국내 최초 공유 킥보드(모빌리티) 서비스
**2021.06 – 2023.10 (2년+) · App Developer → Mobile Tech Lead**
기술 스택: React Native

- 엔지니어 2~3명 리드, **1일 1시간** 기술부채 해소 시간 도입 → React Native 업그레이드 등 기술부채 해소
- 월간 모바일 개발자 회의 운영, 기술 부채 선정 및 도전 과제 도출
- PR Template·Jira Workflow로 코드 리뷰·업무 프로세스 표준화
- **Channel Talk(외부 CX SDK) 통합**, 전화 전용 고객 지원을 인앱 전환하고 통합 후 알림 분류 메소드에서 발생한 Crash를 제조사에 제보하고 수정안 PR 제출
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**하고, 빌드 캐시 적용으로 **배포 소요 시간 50% 감축**
- Amplitude로 사용자 경험 데이터 수집·기능 개선 성과 측정
- Jest 기반 Unit 테스트 보강, 실행 Parameter 조정과 캐시 적용으로 성능 개선
- 외국어 지원 프로젝트에서 다국어 대응 구축, Android 언어 설정 관련 오픈소스 기여
- UX팀과 협의해 Figma-소스 Asset 이름 일치로 커뮤니케이션·구현 비용 절감

`React Native` `TypeScript` `Redux` `Java/Kotlin(Native Bridge)` `Jest` `Amplitude` `Fastlane` `GitHub Actions`

---

### 에스제이더블유인터내셔널 (시원스쿨) — 국내 1위 온라인 어학 교육 플랫폼
**2018.06 – 2021.05 (3년) · iOS Developer**

- 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 제로베이스로 자체 앱 단독 개발
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향
- AVFoundation 기반 공용 영상 플레이어 라이브러리 개발해서 다른 앱과 공유
- 전체 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 **QA 프로세스** 구축
- App **Store 리뷰**에 **직접 답변**하고, 기획이 불필요한 개선 사항은 직접 조치
- React Native, Unity, Xamarin 등 CrossPlatform **선행 학습**, 팀 내 **교육** 및 파일럿 프로젝트 수행
- 유휴 iMac을 이용하여 Fastlane 기반 CI/CD 인프라 구축하여 개발 속도 가속

**빅토익보카**
- 기획·디자인·Android 앱이 모두 다른 상황에서 기획을 새로 정립해 iOS 버전 개발
- **StoreKit 기반 인앱결제**를 직접 제안·구현해 도서 부록을 넘어 자체 수익화
- 백그라운드 재생, 자동 단어 넘김 기능 제안·구현, Android에도 적용 유도

`Swift` `MVVM` `RxSwift` `AVFoundation` `StoreKit` `XCUITest` `Instruments` `Fastlane` `Firebase`

---

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+) · 개인**

- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 **광고 수익 월 $100 이상** 달성(2017.12 기준, 2020년 기준 $800+)
- '관련주식검색기': 푸시 알림 제안 + **Node.js·FCM 기반 발송 서버 구축**으로 **매출 2배** 달성(최대 **MAU 5,899**, 평균 MAU 1,100)
- 앱 업데이트 없이 콘텐츠 갱신이 필요한 앱은 별도 서버 없이 **Google Drive Xlsx를 원격 데이터소스**로 활용하는 경량 아키텍처 구축
- 'ShowNote'(iPad용 PDF 기반 프레젠테이션 앱): 기획을 전면 개편하며 기존 기획서에 없던 특허 핵심 **'Trigger'** 개념 고안, 퇴사 후에도 유지보수를 지속해 특허 출원 및 **10억** 원 규모 엔젤 **투자 유치**(Enable Holdings)**에 기여

`Swift` `UIKit` `Node.js` `FCM` `Firebase` `Google Drive API` `PDFKit`

---

### 크레디프 — 이동통신 3사·공공기관 대상 SI/SM 전문기업
**2009.08 – 2017.02 (7년+) · 연구원**

- 서버부터 클라이언트까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결, 신규 언어·플랫폼 선행 연구

`C` `C#` `Java` `iOS` `Android` `Python` `RESTful API` `MySQL` `Oracle`

---

## 외부 활동

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영, 게임도우미는 **Clean Architecture**도 함께 적용
- 위 경험을 [Article](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)로 작성해 Tuist CEO Pedro Piñera와 LinkedIn으로 직접 연결, [한국어 페이지 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65)에 기여
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- Dev Korea Meetup 등 커뮤니티 정기 참여, Medium에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682)·TCA 등 기술 Article 다수 발행
- Flutter · Dart: 퇴근길 지하철에서 Dart 학습, Firestore로 카카오톡 채팅 화면을 구현, [Medium 아티클](https://toyboy2.medium.com/list/flutter-c6e656a0db03)로 연재

---

## 스킬

```
Swift · SwiftUI · UIKit · Objective-C · React Native · TypeScript
Combine · Swift Concurrency(async/await) · Redux
MVVM · Clean Architecture(게임도우미 한정) · TCA(미출시 개인 프로젝트)
SPM · CocoaPods · Tuist(개인 프로젝트 한정)
Fastlane · CI/CD · GitLab CI/CD · GitHub Actions
Unit Test · XCUITest · Jest · Instruments
WidgetKit · AVFoundation · StoreKit · WKWebView · Firebase
Node.js · RESTful API · Java · Python · MySQL · PostgreSQL
Flutter(학습) · Dart(학습) · TensorFlow(교육 수강)
```

---

## 학력

**서일대학교**
2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
