# 이영준

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

iOS 설계부터 배포, 운영까지 전 과정을 단독으로 책임져 온 엔지니어입니다. 스타트업을 포함한 다양한 조직에서 아키텍처 결정과 테스트·배포 프로세스를 스스로 구축해왔으며, AI 코딩 도구를 워크플로우에 결합해 개발 속도를 끌어올리되 산출물은 항상 비판적으로 검증하고 책임집니다.

**iOS 5년+** (모바일 8년+ · 경력 15년+)

---

## AI 개발 워크플로우

- **(SK AX)** 보안 제약을 고려해 GitLab Runner에 Ollama를 연결한 **MR 리뷰 자동화**(Agent) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여
- **(개인 프로젝트)** SwiftUI 마이그레이션 Skill을 구축해 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**

---

## 주요 경력

### SK AX (계약: 디투엘)
**2024.06 – 2025.10 (1년+) · 프리랜서 · iOS Developer**
IT 외주 SK 계열 · SKT의 3개 iOS 프로젝트 유지보수 담당

- Combine으로 **AI 추천** 툴팁·넛지 UI 구현
- 신규 API 추가 시 **Unit Test 작성**을 표준 프로세스로 정착
- 설명 없는 대형 MR로 리뷰가 사실상 불가능했던 문제를 커밋 단위 분할과 **Jira Epic·Task·Subtask 구조화**로 해결, 매니저 만족으로 타 프로젝트에도 자연스럽게 전파
- Webview Delegate 강제 언래핑으로 발생한 **5,000건 이상의 Crash**를 원인 분석 후 근본 해결
- GitLab CI Workflow 실행 권한이 없는 환경에서 **Fastlane 자동화**로 빌드부터 Slack 업로드까지 진행

`Swift` `SwiftUI` `WidgetKit` `Combine` `Unit Test` `Fastlane` `GitLab CI/CD` `Jira`

### 올룰로 (킥고잉)
**2021.06 – 2023.10 (2년+) · 정규직 · App Developer → Mobile Tech Lead**
국내 최초 공유 킥보드 스타트업

**개발자로서 · 2021.06 – 2022.03**
- 지도 API 호출을 4회에서 1회로, **최소 75% 절감**(위치 데이터 캐싱)
- Jest 기반 Unit 테스트 보강 및 실행 성능 개선

**리드로서 · 2022.04 – 2023.10**
- 엔지니어 2~3명 리드, 1일 기술부채 해소 시간을 도입해 **React Native 0.71 업그레이드** 등 누적된 이슈를 정리
- **PR Template 도입**으로 코드 리뷰 프로세스 개선
- 기존 **GitHub CI/CD** 파이프라인 개선(Fastlane 연동)
- Jira Workflow 설정으로 업무 프로세스 표준화

`React Native` `TypeScript` `Jest` `Fastlane` `GitHub`

### 에스제이더블유인터내셔널 (시원스쿨)
**2018.06 – 2021.05 (3년) · 정규직 · iOS Developer**
국내 1위 온라인 어학 교육 플랫폼

- 정체돼 있던 프로젝트를 기획서 전면 재검토로 재정립, 제로베이스로 자체 앱 단독 개발
- 인앱 리뷰 요청 노출 시점을 설계·구현해 평점 **4.1 → 4.7** 상향
- **MVVM 아키텍처** 적용을 위해 RxSwift 도입
- 강의 영상 재생 불가 민원에 대응해 전체 강의를 **XCUITest** 기반으로 재생 실패 콘텐츠 검출하는 **QA 프로세스** 구축
- **Instruments**로 메모리 릭을 탐지하고 Memory Graph로 순환 참조를 찾아 해결
- **Fastlane CI/CD** 인프라를 처음부터 구축해 릴리즈 프로세스 개선
- 도서 부록이던 빅토익보카의 iOS 버전을 단독 개발, **StoreKit** 기반 인앱결제를 제안·구현해 자체 수익화

`Swift` `MVVM` `RxSwift` `AVFoundation` `XCUITest` `Instruments` `Fastlane` `StoreKit`

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+) · 개인**

- 9-6 근무 형태로 개인 앱 다수를 기획·개발·출시
- '관련주식검색기': 푸시 알림 제안과 **Node.js 서버 구축**으로 매출 2배 달성
- 앱 업데이트 없이 콘텐츠를 갱신해야 하는 앱은 별도 서버 없이 Google Drive Xlsx를 **원격 데이터소스**로 활용하는 경량 아키텍처 구축
- 게임 유틸리티 앱 '게임도우미': **일일 사용자 500명 이상**, 단독 운영
- ShowNote(iPad용 PDF 프레젠테이션 앱): 퇴사 후에도 유지보수를 지속해 **특허 출원**과 **10억 원 규모 투자 유치**에 기여

`Swift` `UIKit` `Node.js` `Google Drive API` `PDF Rendering`

### 크레디프
**2009.08 – 2017.02 (7년+) · 정규직 · 개발자**
이동통신 3사·공공기관 대상 SI/SM 전문기업

- 서버(C)부터 클라이언트(C#·Java, 모바일 iOS·Android)까지 7년 이상 풀스택으로 개발·유지보수
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결

`C` `C#` `Java` `MySQL` `Oracle`

---

## 외부 활동

- 개인 iOS 프로젝트 전반에 **Tuist**를 적용해 모듈화 구조 구축·운영
- Seoul iOS Meetup 발표, **한국 Tuist 오픈채팅방** 운영(Tuist CEO Pedro Piñera와 LinkedIn으로 연결, 한국어 페이지 번역 기여)
- Medium에 iOS·React Native·TCA 등 기술 아티클 다수 발행
- Dev Korea Meetup 등 커뮤니티 정기 참여

---

## 스킬

Swift · SwiftUI · UIKit · Objective-C · Combine · MVVM · Clean Architecture(게임도우미 한정) · TCA(태그, 미출시 개인 프로젝트) · SPM · CocoaPods · Tuist(개인 프로젝트 한정) · Fastlane · GitHub · GitLab CI/CD · Unit Test · XCUITest · Instruments · AI 코딩 도구 · WidgetKit · AVFoundation · StoreKit · PDF Rendering · Firebase · React Native · TypeScript · Jest · C · C# · Java · MySQL · Oracle

---

## 학력

**서일대학교**
2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품: Ubicon2, 졸업작품: WIPI Designer
