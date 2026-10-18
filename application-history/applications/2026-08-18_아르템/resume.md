# 이영준

toyboy2@hanmail.net · LinkedIn · Portfolio · Medium

iOS를 중심으로 다양한 플랫폼·도메인에서 담당 영역을 단독으로 책임져 왔습니다. 업무를 스스로 발굴·분할하고
우선순위를 할당해 수행하며, 이슈나 장애 상황에서도 원인을 끝까지 추적해 침착하게 해결합니다. 초기 단계
프로덕트를 기획부터 출시까지 단독으로 이끈 경험이 다수 있으며, AI 코딩 도구를 동료로 활용하되 산출물은
비판적으로 검증하고 책임집니다.

**경력 15년+ (iOS 5년+ · 모바일 8년+)**

---

## 경력

### SK AX (계약: 디투엘)
**2024.06 – 2025.10 (1년+) · 프리랜서 · iOS Developer**
IT 외주 SK 계열 · SKT의 3개 iOS 프로젝트 유지보수 단독 담당

- **T world**에서 Webview Delegate 강제 언래핑으로 발생한 **5,000건 이상의 Crash**를 원인 분석 후 근본 해결,
  접속 폭주에 대비한 **대기열(Queue) 기능** 구현
- 보안 기능을 설정한 사용자가 위젯을 이용하지 못하던 문제를 **앱-위젯 간 Cookie Storage 공유**로 해결,
  WidgetKit 기반 SwiftUI 위젯 기능 개선
- 설명 없는 대형 MR로 사실상 리뷰가 불가능했던 문제를 커밋 단위 분할과 Jira Epic·Task·Subtask 구조화로 해결,
  **만족한 매니저가 타 프로젝트 개발자에게도 동일한 방식을 요구하며 자연스럽게 전파**
- GitLab CI Workflow 실행 권한이 없어 로컬에서 **Fastlane 자동화** 구축, 빌드부터 Slack 업로드까지 진행해
  SK AX 매니저가 SKT에 배포 요청
- SWING 프로젝트에서 Objective-C를 Swift로 **점진적 마이그레이션**, CocoaPods 종료 대응 SPM 전환 진행
- Combine으로 **AI 추천 툴팁·넛지 UI** 구현, API 호출 점진적 async/await 전환, 신규 API Unit Test 작성

`Objective-C` `SwiftUI` `WidgetKit` `Combine` `Swift Concurrency` `SPM` `Fastlane` `GitLab CI/CD`

---

### 올룰로 (킥고잉)
**2021.06 – 2023.10 (2년+) · 정규직 · App Developer → Mobile Tech Lead**
국내 최초 공유 킥보드 서비스 · Cross-platform(React Native) 기반 개발

**개발자로서 · 2021.06 – 2022.03**
- 길안내 구현을 위해 **Naver Map SDK**(react-native-naver-map)의 Native Bridge(Java/Objective-C)에 축척
  계산 로직을 직접 추가, 지도 API 호출 **최소 75% 절감**(위치 데이터 최적화)
- **Amplitude SDK** 연동으로 사용자 경험 데이터 수집 구현, **Fastlane** 기반 CI/CD 자동화 및 Jest 테스트 보강

**리드로서 · 2022.04 – 2023.10**
- 엔지니어 2~3명을 리드하며 1일 기술부채 해소 시간을 도입해 **React Native 0.71 버전 업그레이드** 등
  기술부채 해소
- PR Template·Jira Workflow 도입 및 월간 모바일 개발자 회의 운영으로 코드 리뷰·업무 프로세스 개선

`React Native` `Java/Objective-C(Native Bridge)` `Naver Map SDK` `Amplitude` `Fastlane` `Jest`

---

### 에스제이더블유인터내셔널 (시원스쿨)
**2018.06 – 2021.05 (3년) · 정규직 · iOS Developer**
국내 1위 온라인 어학 교육 플랫폼 · 자체 앱 **제로베이스 단독 개발**

- 합류 당시 한 달째 정체돼 있던 프로젝트를 기획서 전면 재검토로 재정립하고, 담당자가 반복 퇴사하는 상황에서도
  일정을 지켜내며 **제로베이스로 자체 앱을 단독 개발**, 평점 **4.1 → 4.7** 상향
- CocoaPods으로 **AVFoundation 기반 영상 플레이어 컴포넌트**를 개발해 타 앱과 공유
- **화면 녹화 방지·탈옥 감지 등 콘텐츠 보호 기능** 구현, 최소화·최대화 기능을 전 화면 재사용 가능하도록
  기반 ViewController 설계
- 강의 영상 재생 불가 민원을 직접 재현·검증하는 **XCUITest 자동화**를 구현해 담당 부서에 실패 콘텐츠 ID를
  선제적으로 전달
- **Instruments로 메모리 Leak을 탐지**하고 Memory Graph(Dependency Graph)로 순환 참조를 찾아 해결, 앱
  안정성 개선

`AVFoundation` `CocoaPods` `XCUITest` `Fastlane`

---

### 빅토익보카
시원스쿨 계열 · **제품 기획부터 수익화까지 단독 제안·구현**

- 도서 부록이던 단어장 앱의 iOS 버전을 단독 개발, **StoreKit 기반 인앱결제**를 직접 제안·구현해 자체 수익화,
  **백그라운드 재생**(자동 단어 넘김) 기능도 제안·구현해 Android에도 적용

`StoreKit` `AVFoundation`

---

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+) · 개인 · 앱 다수 단독 기획·개발·출시**

- 앱 업데이트 없이 콘텐츠를 갱신해야 하는 앱들은 별도 서버 없이 **Google Drive에 업로드한 Xlsx를 원격
  데이터소스로 활용**하는 경량 아키텍처 구축
- 주식 정보 앱('관련주식검색기')은 **Node.js 기반 서버를 직접 구축**하고 푸시 알림 기능을 추가해 **매출 2배** 달성
- 게임 유틸리티 앱 '게임도우미'는 **일일 사용자 500명 이상** 규모로 단독 운영
- '문자행동'은 SBS 인터뷰 등 언론의 주목을 받음
- **ShowNote**(iPad용 PDF 프레젠테이션 앱): 재직 중 기획을 전면 개편하며 'Trigger' 개념을 직접 고안, 퇴사
  후에도 유지보수를 지속해 **특허 출원 및 10억 원 규모 투자 유치**에 기여 — 아이디어 → 개발 → 출시 →
  사업화까지 A to Z 참여 사례

`Node.js` `Google Drive API` `PDFKit`

---

### 크레디프
**2009.08 – 2017.02 (7년+) · 정규직 · 개발자**
이동통신 3사·공공기관 대상 SI/SM 전문기업

- 담당자 공백·인수인계 부재 등 위기 상황마다 투입돼 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지
  풀스택으로 개발·유지보수, 판교 R&D 센터 IBS/FMS 클라이언트 리드 등 수행

`C` `C#` `Java`

---

## AI 활용 경험

- 개인 앱 유지보수를 위해 **Claude Code**로 SwiftUI 마이그레이션 자동화 Skill을 구축해 앱당 1주 이상
  걸리던 작업을 **1~2일로 단축**
- SK AX에서 보안 제약을 고려해 GitLab Runner에 Ollama를 연결한 **Agent 기반 MR 리뷰**를 구축, 비개발자
  매니저의 AI 활용 KPI 달성에 기여

---

## 외부 활동

- 개인 iOS 프로젝트 전반에 **Tuist**를 실제 적용해 모듈화 구조를 구축·운영, 관련 경험을 Article로 작성해
  Tuist CEO와 직접 연결되어 한국어 페이지 번역에 기여(**CEO 감사 선물·친필 편지** 수령), Seoul iOS Meetup에서도
  'Tuist 캐시·선택적 테스트·CI' 주제로 발표
- **TCA(The Composable Architecture)** 학습 과정에서 Settings·Modal·SwiftData 연동 등을 개인 앱에 적용한
  경험을 Medium 아티클로 게재

---

## 스킬

`Swift` `SwiftUI` `Objective-C` `MVVM` `TCA` `Combine` `Swift Concurrency` `SPM`
`Tuist` `AVFoundation` `StoreKit` `WidgetKit` `XCUITest` `Fastlane` `React Native` `Instruments`

---

## 학력

**서일대학교**
2003.03 – 2009.02 · 졸업 · 소프트웨어전공(3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품: Ubicon2, 졸업작품: WIPI Designer
