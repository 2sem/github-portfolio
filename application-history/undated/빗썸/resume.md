# 이영준

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

---

## 소개

iOS를 중심으로 다양한 도메인과 플랫폼에서 크래시 대응부터 성능 최적화, CI/CD 구축까지 안정적인 서비스 운영을 위한 전 과정을 다뤄왔으며, 합류 후 업무 효율을 높이는 방법을 연구해서 기존 동료도 모르는 방법을 찾아 공유합니다. 기획과 API Spec에 적극적으로 피드백하며 더 좋은 제품을 위한 방안을 함께 찾고, AI 코딩 에이전트를 동료로 취급하며 결과는 비판적으로 검증합니다. 대용량 실시간 트래픽을 다루는 빗썸에서 안정적인 거래 서비스를 함께 만들어가고 싶습니다.

**iOS 5년+**(모바일 8년+ · 총 15년+)**

---

## 경력

### SK AX (계약: 디투엘) — IT 외주 SK 계열
**2024.06 – 2025.10 (1년+) · 프리랜서 · iOS Developer**
SKT의 3개 iOS 프로젝트 유지보수 단독 담당 (SWING, T world, AI Layer SDK)
- Webview Delegate 강제 언래핑으로 발생한 **5,000건 이상**의 **Crash**를 원인 분석 후 근본 해결, 대량 **동시 접속** 시 서버 과부하를 줄이기 위한 **대기열** 기능 구현
- 신규 API **Swift Concurrency** 적용 및 기존 API 점진 전환
- **Combine**으로 AI 추천 툴팁 UI 구현(View Model에서 Combine 기반으로 View와 연동)
- 신규 API 연동 시 XCUITest 기반 **Unit Test** 작성하여 안정성 검증
- **SwiftUI** 위젯에 새로고침 버튼 추가, 보안 기능을 설정한 사용자가 위젯을 이용하지 못하던 문제를 Cookie Storage 공유로 해결
- FE 이슈 발생 시 원인 파악을 위한 디버깅 지원

**프로세스 개선 & 협업**
- **설명 없는 대형 MR**로 사실상 리뷰가 불가능했던 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR과 MR Template구축으로 해결 개발자에게 할당, 매니저 만족으로 타 프로젝트에도 자연스럽게 전파
- 주니어 엔지니어에게 Subtask 단위 할당 및 분할 위임하는 방식으로 2명 코칭

**스킬 태그**: `Swift` `SwiftUI` `Objective-C` `WidgetKit` `Combine` `Swift Concurrency` `Unit Test` `XCTest` `SPM` `CocoaPods` `Firebase` `GitLab CI/CD` `Fastlane` `Jira` `Confluence`

---

### 에스제이더블유인터내셔널 (시원스쿨) — 국내 1위 온라인 어학 교육 플랫폼
**2018.06 – 2021.05 (3년) · 정규직 · iOS Developer**

- 합류 후 담당자 반복 퇴사 등 한 달째 정체돼 있던 프로젝트를 **기획**서 전면 재검토, **서버** 개발자와 **소통**으로 어려운 상황 속에서도 일정 준수
- Instruments로 **메모리 누수**를 탐지하고 Memory Dependency Graph로 순환 참조를 찾아 **해결**
- 강의 영상 재생 불가 민원을 고객보다 먼저 탐지하기 위해 전체 강의를 순회하며 재생 버튼 노출 여부를 검증하는 **XCUITest** 기반 불량 콘텐츠 검출 **QA 프로세스 구축**
- RxSwift로 MVVM 신규 기능 우선 점진적 적용
- **인앱 리뷰 요청**을 제안하고 노출 시점을 직접 설계·구현해 평점 4.1 → **4.7 상향**
- Fastlane 기반 빌드·배포 자동화로 배포 프로세스 개선

**스킬 태그**: `Swift` `MVVM` `RxSwift` `AVFoundation` `XCUITest` `Instruments` `Fastlane` `Firebase`

---

### 올룰로 (킥고잉) — 국내 최초 공유 킥보드(모빌리티) 서비스
**2021.06 – 2023.10 (2년+) · 정규직 · App Developer → Mobile Tech Lead**
기술 스택: React Native (크로스플랫폼)

- 구역 정보 API 호출 4회→1회로 데이터 사용량 **최소 75% 절감**(위치 데이터 캐싱)
- 엔지니어 2~3명 리드, 1일 기술부채 해소 시간 도입 → React Native 0.71 업그레이드 등 기술부채 해소
- iOS/Android로 분리돼 있던 CI/CD를 **Fastlane 기반으로 통합**, 빌드 캐시 적용으로 **배포 소요 시간 50% 감축**
- PR Template 도입으로 **코드 리뷰** 프로세스 **개선**, Jira Workflow 개선으로 업무 프로세스 고도화

**스킬 태그**: `React Native` `TypeScript` `Redux` `Fastlane` `Amplitude` `Jest` `BLE`

---

### 크레디프 — 이동통신 3사·공공기관 대상 SI/SM 전문기업
**2009.08 – 2017.02 (7년+) · 정규직 · 개발자**

- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 7년 이상 **풀스택**으로 30개+ 프로젝트 개발·유지보수
- 담당자 공백·인수인계 부재·장애 등 **위기 상황**마다 투입돼 유연하고 침착하게 문제 **해결**

**스킬 태그**: `C` `C#` `Java` `WPF` `Delphi` `Python` `MySQL` `Oracle` `MSSQL` `PostgreSQL`

---

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+) · 개인**

- 9-6 근무 형태로 '관련주식검색기' 등 개인 앱 다수를 기획·개발·출시, 2017.12 기준 앱 전체 합산 광고 수익 월 $100 이상 달성, 2022년 기준 $800 달성
- ShowNote(iPad용 PDF 기반 프레젠테이션 앱): 특허 핵심 기능 Trigger 고안 및 퇴사 후에도 유지보수·기능 개선을 지속해 특허 출원 및 **10억** 원 규모 **투자 유치**에 기여

**스킬 태그**: `Swift` `UIKit` `PDFKit`

---

## AI 활용 경험

- SK AX에서 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 MR 리뷰(Agent 기반)**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- 개인 앱 유지보수를 위해 opencode(Codex 기반)/Claude Code로 [**SwiftUI 마이그레이션 자동화 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 1~2일로 단축

---

## 외부 활동

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영, 게임도우미는 SwiftUI 전환 시 **Clean Architecture**도 함께 적용
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- Medium에 [iOS 기술 Article]((https://medium.com/@toyboy2/list/ios-4adba6bc75d5)) 다수 발행

---

## 스킬

```
Swift · SwiftUI · UIKit · Objective-C
Combine · Swift Concurrency(async/await)
MVVM · RxSwift · Clean Architecture(게임도우미 한정) · TCA(태그 전용, 미출시)
SPM · CocoaPods · Tuist(개인 프로젝트 한정)
Fastlane · CI/CD · GitLab CI/CD · GitHub
Unit Test · XCUITest · Instruments
WidgetKit · AVFoundation · Firebase
React Native · TypeScript · Redux · Jest
RESTful API · C · C# · Java · MySQL · Oracle · MSSQL · PostgreSQL
BLE · Amplitude
```

---

## 학력

**서일대학교**
2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
