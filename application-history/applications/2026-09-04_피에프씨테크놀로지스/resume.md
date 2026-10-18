# 이영준

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

iOS를 중심으로 설계부터 배포, 운영까지 단독으로 책임져 본 엔지니어입니다. 문제 해결을 위해 담당 분야를 넘어 적극적으로 의견을 제시하며 함께 고민하고, 새로운 기술/도구를 먼저 실험하고 기존 구성원도 모르는 방법을 찾아 공유해왔습니다. AI 코딩 도구를 워크플로우에 결합해 개발 속도를 끌어올리되, 산출물은 비판적으로 검증하고 책임집니다. 아직 경험하지 못한 금융 도메인에서 최상의 금융 사용자 경험을 함께 다듬고 싶습니다.

**iOS 5년+** (모바일 8년+)

---

## AI 활용 경험

- 보안 제약을 극복하기 위해 GitLab Runner에 [**Ollama를 연결한 자동 MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9)를 구축, 변경 사항을 빠르게 검토할 수 있도록 지원하고 비개발자 매니저의 AI 활용 KPI 달성에 기여
- [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill)을 구축하여 앱당 1주 이상 걸리던 개인 앱 SwiftUI 전환 작업을 **1~2일로 단축**
- 유료 버전 전용 기능인 **Davinci Resolve MCP**를 무료 버전용 [davinci-resolve-lite-mcp](https://github.com/2sem/davinci-resolve-lite-mcp)로 구축하여 Youtube 영상 편집을 자동화하고 장면 분류·편집·검증 단계를 Skill과 Script로 분리해 결과의 신뢰성 확보

---

## 경력

### SK AX (계약: 디투엘)
**2024.06 – 2025.10 (1년+) · iOS Developer**
SKT의 iOS 유지보수 프로젝트 3종 (T world: B2C, SWING: 대리점 대상 B2B, AI Layer SDK: T world, T membership 대상)

- 시간제한 보안 기능을 설정한 사용자가 앱에서 비밀번호 입력 후에도 위젯(**SwiftUI**)을 이용하지 못하던 민원을 앱·위젯 간 Cookie Storage 공유로 세션을 공유하고 위젯 API를 분석하여 서버 개발자에게 수정 방안을 제시하여 해결
- AI 추천 툴팁·넛지 등 신규 UI를 RxSwift 대신 **Combine** 기반으로 구현
- 기존 API 호출을 **Swift Concurrency**로 점진 전환하고, 신규 API 추가 시 Unit Test를 작성해 예외 시나리오 검증
- **WKWebView** Delegate Method에서 강제 언래핑으로 발생하던 **주간 5,000건 이상의 비정상 종료**를 근본 해결. 전임자 PR의 가설로는 동일한 Crash가 재현되지 않아, 코드 역추적으로 동일 Crash를 재현시켜 원인을 특정
- **Objective-C** 코드를 Method 단위로 Swift Extension으로 전환하고, CocoaPods 종료에 대비해 SPM으로 점진적 전환
- 설명 없는 대형 MR로 매니저가 사실상 리뷰할 수 없던 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR을 올리게 하고 **MR Template**로 설명을 의무화해 SK 매니저가 만족해서 다른 프로젝트로도 전파

`Swift` `SwiftUI` `UIKit` `Objective-C` `WidgetKit` `Combine` `Swift Concurrency` `WKWebView` `MVVM` `RxSwift` `Unit Test` `SPM` `Firebase` `GitLab CI/CD` `Fastlane` `Jira`

### 올룰로 (킥고잉)
**2021.06 – 2023.10 (2년+) · App Developer → Mobile Tech Lead**
국내 최초 공유 킥보드 서비스 · React Native 크로스플랫폼 개발

- CX Platform Channel Talk의 SDK를 통합해 상담사 전화로만 이루어지던 고객 지원을 인앱으로 전환하고 통합 과정에서 발견한 **SDK 알림 처리 로직의 크래시를 원인 분석**해 제보하고 수정안 PR 제출
- Naver Place와 Daum Map을 분석하여 앱내 **경로 표시 기능** 구현, 대리 운전기사 사용자 층의 긍정적인 평가에 기여
- Naver Map SDK의 **Native Bridge**에 축척 계산 로직을 추가해, 조회된 경로 전체가 화면에 들어오도록 지도 자동 Zoom 구현
- 구역 정보 API 호출을 4회에서 1회로 줄여 **데이터 사용량을 최소 75% 절감**하고 사용자 및 인프라 네트워크 트래픽 최적화에 기여
- BLE 통신 로직을 최적화하고 Bluetooth 스캔·연결 소요 시간을 지표화해 개선 효과를 **Amplitude** 로그로 검증
- OS별로 분리돼 있던 GitHub CI/CD를 **Fastlane** 기반으로 통합하고, 빌드 캐시를 적용해 **배포 소요 시간 50% 감축**하여 개발 속도 가속
- 하루 1시간 기술부채 해소 시간을 도입해 React Native 버전 업그레이드등을 진행하고, PR Template과 Jira Workflow로 리뷰·업무 프로세스 표준화, 사내 월간 모바일 개발자 회의를 주최하여 지식 공유 및 기술적 도전 과제를 도출하고 도전자 선정

`React Native` `TypeScript` `Redux` `Jest` `Native Bridge (Java·Objective-C)` `BLE` `Naver Map SDK` `Amplitude` `Fastlane` `GitHub Actions`

### 에스제이더블유인터내셔널 (시원스쿨)
**2018.06 – 2021.05 (3년) · iOS Developer**
국내 1위 온라인 어학 교육 플랫폼

- 합류 후 한 달째 정체돼 있던 프로젝트를 기획서 부터 전면 재검토하고, 서버 개발자와 소통하여 프로젝트 완수에 기여
- 인앱 리뷰 요청 노출 시점을 설계·구현해 App Store 평점을 4.1에서 **4.7로 상향** 및 유지
- RxSwift 도입과 함께 **MVVM** 아키텍처를 적용하고, 최소화·최대화 동작을 전 화면에서 재사용할 수 있도록 기반 ViewController 설계
- 고객 민원 발생 전 불량 영상을 선탐지하기 위해 전체 강의를 순회하며 재생 가능을 검증하는 **XCUITest** 기반 QA 프로세스를 구축해 검출된 컨텐츠들을 담당 부서에 제보
- 아무도 App Store 리뷰를 관리하지 않아 직접 확인하고 답변하며 무선 키보드처럼 별도 디자인이 필요 없는 개선은 기획 없이 스스로 반영
- 기획·디자인·Android 앱 모두 다른 상황에서 기획을 정립하고 추가하여 빅토익보카 iOS 버전을 개발하고, **인앱결제**를 제안·구현해 도서 부록의 한계를 넘어 자체 수익화
- 빅토익보카에 백그라운드 단어 음원 재생 및 자동 단어 전환을 제안하고 기획하여 도입 및 안드로이드에도 적용 유도

`Swift` `UIKit` `MVVM` `RxSwift` `AVFoundation` `StoreKit` `XCUITest` `Instruments` `Fastlane` `Firebase`

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+)**

- 근무와 병행해 개인 앱 다수를 기획·개발·출시, 앱 합산 광고 수익 **월 $100 이상** 달성(2017.12 기준)
- 공인중개사 요약집 앱에서 팝업 디자인 4종을 **Firebase A/B 테스트**로 비교 검증해 노출 방식 결정
- '관련주식검색기'에 푸시 알림을 제안하고 Node.js·FCM 기반 서버를 구축해 **매출 2배** 달성, 앱 업데이트 없이 콘텐츠를 갱신하기 위해 Google Drive Xlsx를 원격 데이터소스로 쓰는 경량 아키텍쳐 설계
- iPad용 PDF 프레젠테이션 앱 'ShowNote'의 기획을 개발 시간 단축과 사용성 개선을 위해 전면 개편하고 특허 핵심인 **'Trigger'** 개념을 고안하여 특허 출원과 **10억 원 규모 엔젤 투자 유치(Enable Holdings)**에 기여

`Swift` `UIKit` `PDFKit` `Firebase` `Node.js` `Google Drive API`

### 크레디프
**2009.08 – 2017.02 (7년+) · 개발자**
이동통신 3사·공공기관 대상 SI·SM 전문기업

- 서버(C)부터 클라이언트(C#·Java, 모바일 iOS·Android)까지 7년 이상 **풀스택**으로 **30개 이상의 프로젝트** 개발·유지보수
- 담당자 공백, 인수인계 부재, 장애, 신기술 도입 등 위기 상황마다 투입돼 원인을 파악하고 문제 해결

`C` `C#` `Java` `WPF` `Python` `RESTful API` `MySQL` `Oracle` `MSSQL`

---

## 외부 활동

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 적용해 모듈화 구조를 구축·운영, 게임도우미는 SwiftUI 전환과 함께 **Clean Architecture**도 적용
- 위 경험을 [Article](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)로 발행해 Tuist CEO Pedro Piñera가 연락해와 소통하고 [한국어 문서 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65)에 기여하여 크리스마스 선물로 Tuist 굿즈 수령, Pedro가 한국 개발자들과 소통을 원해 운영 중인 'Tuist 노하우 공유' 오픈채팅방에 CEO를 초대
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- [**Medium**](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682)·[TCA](https://toyboy2.medium.com/list/tca-8b33da822cae) 기술 아티클 다수 발행, Dev Korea Meetup 등 커뮤니티 정기 참여

---

## 스킬

```
Swift · SwiftUI · UIKit · Objective-C · Combine · Swift Concurrency(async/await) · RxSwift
MVVM · Clean Architecture · TCA · React Native · TypeScript · Redux · Jest
Unit Test · XCUITest · Instruments · SPM · CocoaPods · Tuist · Fastlane · GitLab CI/CD · GitHub Actions
WidgetKit · WKWebView · AVFoundation · StoreKit · Firebase · Node.js · C · C# · Java · MySQL · Oracle · MSSQL
```

---

## 학력

**서일대학교**
2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
사내 벤처 동아리(Security·IQnS) 활동 및 대회 출품(Ubicon2), 졸업작품 WIPI Designer
