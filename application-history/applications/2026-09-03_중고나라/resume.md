# 이영준

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

iOS를 중심으로 통신, 모빌리티, 어학 도메인에서 담당 영역을 단독으로 책임져 왔습니다. Objective-C를 Swift로, UIKit을 SwiftUI로, RxSwift를 Swift Concurrency와 Combine으로 옮기며 운영 중인 앱을 점진적으로 전환하는 작업을 반복했고, React Native로 iOS와 Android를 함께 개발하며 크로스플랫폼의 이점과 한계를 경험했습니다. AI 코딩 도구를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다.

**iOS 5년+** (모바일 8년+ · 총 경력 15년+)

---

## 경력

### SK AX (계약: 디투엘)
**2024.06 – 2025.10 · 프리랜서 · iOS Developer**
IT 외주 SK 계열 · SKT의 iOS 프로젝트 3개 유지보수 단독 담당 (T world, SWING, AI Layer)

- **WKWebView** Delegate 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 전임자의 가설로는 재현되지 않던 상황에서 코드를 따라가며 근본 원인을 찾아 해결, 대량 동시 접속 시 서버 과부하를 줄이는 **대기열(Queue)** 기능 구현
- API 호출을 **Swift Concurrency**로 점진 전환, AI 추천 툴팁과 넛지 등 신규 UI를 RxSwift 대신 **Combine** 기반으로 구현
- 신규 API 추가 시 **Unit Test 작성**하여 예외 사항 점검
- **SwiftUI** 기반 위젯에 새로고침 버튼을 추가하고, 보안 기능을 설정한 사용자가 위젯을 쓰지 못하던 문제를 API 분석과 수정 제안, 앱과 위젯 간 Cookie Storage 공유로 해결

`Swift`  `SwiftUI`  `UIKit`  `Objective-C`  `Swift Concurrency`  `Combine`  `MVVM`  `RxSwift`  `XCTest`  `Firebase`  `GitLab`  `Fastlane`

### 올룰로 (킥고잉)
**2021.06 – 2023.10 · 정규직 · App Developer → Mobile Tech Lead**
국내 최초 공유 킥보드 서비스 · React Native 기반 크로스플랫폼 앱

- 구역 정보 API 호출을 **4회에서 1회로** 줄여 데이터 사용량 **최소 75% 절감**(위치 데이터 캐싱)
- 화면 생명주기 밖에서도 상태를 갱신하도록 Redux **dispatch**를 보관해 Timer에서 실행하는 구조를 고안, **전기자전거 반납 시 잠금 상태** 확인에 적용
- Naver Map SDK **Native Bridge**에 축척 계산 로직을 추가해 조회된 경로 전체가 화면에 들어오는 지도 자동 Zoom 구현
- **BLE** 통신 로직을 최적화하고 스캔과 연결 소요 시간을 지표화, 개선 효과를 **Amplitude Log**로 확인
- 외부 CX SDK(**Channel Talk**) 통합 중 알림 분류 API의 크래시 원인을 분석해 벤더에 제보하고 수정안 PR 제출
- Jest 기반 **Unit Test**에 옵션 조정 및 캐시 적용으로 실행 성능 개선
- iOS와 Android가 분리돼 있던 **GitHub Action**을 **Fastlane** 기반으로 통합하고 빌드 캐시를 적용해 배포 소요 시간 **50% 감축**
- **1일 1시간** 기술부채 해결 시간을 도입해 **React Native 0.71 업그레이드** 등 기술부채 해결, PR Template과 Jira Workflow로 코드 리뷰·업무 프로세스 개선

`React Native`  `TypeScript`  `Redux`  `Jest`  `Native Bridge(Java/Objective-C/Kotlin)`  `BLE`  `Naver Map SDK`  `Amplitude`  `Fastlane`  `GitHub Actions`

### 에스제이더블유인터내셔널 (시원스쿨)
**2018.06 – 2021.05 · 정규직 · iOS Developer**
국내 1위 온라인 어학 교육 플랫폼

- 합류 당시 한 달째 정체돼 있던 신규 앱 프로젝트를 기획서 전면 재검토로 재정립하고, 서버 개발자와 소통하여 일정 내 완수 견인
- **RxSwift** 도입과 함께 **MVVM 아키텍처**를 적용하고, 최소화·최대화를 전 화면에서 재사용하도록 기반 ViewController를 프로그래매틱 UI로 설계
- 민원이 들어오기 전에 불량 영상 파일을 선 탐지하기 위해, 전체 강의를 순회하며 재생 버튼 노출을 검증하는 UI Test 기반 QA 프로세스를 구축하고 검출 시 관련 부서에 전달
- **Instruments**로 메모리 릭을 탐지하고 Memory Graph로 순환 참조를 찾아 해결
- 인앱 리뷰 요청을 제안하고 노출 시점을 설계·구현해 평점 **4.1에서 4.7로** 상향

`Swift`  `MVVM`  `RxSwift`  `AVFoundation`  `StoreKit`  `XCUITest`  `Instruments`  `Fastlane`  `Firebase`

### 개인 iOS 개발자
**2017.02 – 2018.06 · 개인**

- 개인 앱 다수를 기획하고 개발·출시, 전체 합산 **광고 수익 월 $100** 달성(2017.12 기준)
- '관련주식검색기'에 푸시 알림을 제안하고 Node.js와 **FCM** 기반 서버를 구축해 **매출 2배** 달성
- 'ShowNote'(iPad용 PDF 프레젠테이션 앱)에서 기존 기획서에 없던 **특허 핵심** 'Trigger' 개념을 고안, 퇴사 후에도 유지보수를 이어가 특허 출원과 **10억 원 규모 투자 유치**에 기여

`Swift`  `UIKit`  `PDFKit`  `Node.js`  `Firebase`

### 크레디프
**2009.08 – 2017.02 · 정규직 · 개발자**
이동통신 3사·공공기관 대상 SI/SM 전문기업

- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개 이상의 프로젝트** 개발과 유지보수 수행
- 담당자 공백, 인수인계 부재, 장애 등 위기 상황마다 투입돼 문제 해결

`C`  `C#`  `Java`  `WPF`  `Python`  `MySQL`  `Oracle`  `MSSQL`  `PostgreSQL`

---

## 외부 활동

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 적용해 **모듈화 구조**를 구축·운영, '게임도우미'는 **SwiftUI**로 전면 전환하며 **Clean Architecture** 적용(개인 프로젝트 한정)
- **Tuist** 경험을 [Medium](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)에 공유한 것을 계기로 Tuist CEO와 알게 되어 [**한국어 문서 및 페이지 번역**](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65)에 기여했고, 한국 개발자와 소통하길 원하는 CEO를 운영 중인 [**'iOS Tuist 노하우 공유' 오픈채팅방**](https://open.kakao.com/o/gJSLLLig)에 초대
- Seoul iOS Meetup에서 [**'Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'**](https://youtu.be/FFkEbqG4ips) 발표
- [Medium](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5), [React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682), [TCA](https://toyboy2.medium.com/list/tca-8b33da822cae) 기술 아티클 발행, Dev Korea Meetup 등 커뮤니티 정기 참여

---

## AI 활용 경험

- SK의 보안 제약을 극복하기 위해 GitLab Runner에 [**Ollama 기반 MR 리뷰 에이전트**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9)를 구축, 변경 사항을 매니저가 빠르게 확인하여 승인할 수 있는 환경 마련
- 개인 앱 유지보수를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill)을 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- 영상 편집을 위해 유료 버전 전용 기능인 **Davinci Resolve MCP** 대신 무료 버전용 [**davinci-resolve-lite-mcp**](https://github.com/2sem/davinci-resolve-lite-mcp)로 구축, 장면 분류 판단과 검증 단계를 Skill과 Script로 분리해 신뢰성 확보해서 사용

---

## 스킬

```
Swift · SwiftUI · UIKit · Objective-C
Swift Concurrency · Combine · RxSwift
MVVM · Clean Architecture(개인 프로젝트) · TCA(미출시 개인 프로젝트)
Tuist(개인 프로젝트) · SPM · CocoaPods · AVFoundation · StoreKit
Fastlane · GitLab CI/CD · GitHub Actions · Firebase
XCTest · XCUITest · Instruments
React Native · TypeScript · Redux · Jest
C · C# · Java · Node.js · MySQL · Oracle · MSSQL
```

---

## 학력

**서일대학교**
2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품(Ubicon2), 졸업작품 WIPI Designer
