# 이영준

**모바일 8년+ (iOS 5년+)** · 총 경력 15년+

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

---

iOS를 중심으로 다양한 도메인과 플랫폼에서 크래시 대응부터 성능 최적화, CI/CD 구축까지 안정적인 서비스 운영을 위한 전 과정을 다뤄왔으며, 처음 사용하는 도구도 업무 효율을 높이는 방법을 연구해서 기존 동료도 모르는 방법을 찾아 공유합니다. 기획과 API Spec에 적극적으로 피드백하고 더 좋은 제품을 위한 방안을 함께 찾고, AI 코딩 에이전트를 동료로 취급하며 결과는 비판적으로 검증합니다. 하드웨어와 앱이 맞물려 완성되는 사용자 경험을 3i에서 함께 만들고 싶습니다.

---

## 주요 경력

### SK AX (계약: 디투엘) — IT 외주 SK 계열
**2024.06 – 2025.10 (1년+) · iOS Developer**
SKT의 3개 iOS 프로젝트 유지보수 (SWING, T world, AI Layer SDK)

- **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결
- Closure 기반 API 호출은 **Swift Concurrency**, 신규 UI는 **Combine**으로 점진 전환해 생산성·성능 개선
- **Objective-C**를 Swift로 점진적 마이그레이션(Extension 단위)
- 신규 API 연동 추가 시 **Unit Test 작성**으로 예외 사항 검증
- 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열(Queue) 기능** 구현으로 트래픽 급증 구간 안정성 확보
- **AI Layer iOS SDK** 유지보수, Accessibility·UI 개선
- CocoaPods 종료 대비 라이브러리별 **SPM** 전환 진행
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + MR Template 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파
- Fastlane으로 빌드→TestFlight→Slack IPA 업로드 자동화
- 주니어 엔지니어 2명을 Subtask 단위 업무 할당·분할 위임 방식으로 코칭

`Swift` `SwiftUI` `UIKit` `Objective-C` `WidgetKit` `Combine` `Swift Concurrency` `Unit Test` `XCTest` `SPM` `CocoaPods` `WKWebView` `MVVM` `RxSwift` `Firebase` `GitLab CI/CD` `Fastlane`

### 올룰로 (킥고잉) — 국내 최초 공유 킥보드(모빌리티) 서비스
**2021.06 – 2023.10 (2년+) · App Developer → Mobile Tech Lead**

- **BLE** 통신 로직 최적화, 스캔·연결 소요 시간 지표화로 개선 검증
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- Channel Talk(외부 CX SDK) 통합, 전화 전용 고객 지원을 인앱 전환하고 통합 후 알림 분류 메소드에서 발생한 Crash를 제조사에 제보하고 수정안 PR 제출
- Naver Map SDK **Native Bridge**에 축척 계산 로직 추가해 지도 자동 Zoom(길안내) 구현
- Jest 기반 **Unit 테스트** 보강, 실행 Parameter 조정과 캐시 적용으로 성능 개선
- iOS/Android로 분리돼 있던 GitHub CI/CD를 Fastlane 기반으로 통합하고, 빌드 캐시 적용으로 **배포 소요 시간 50% 감축**
- 엔지니어 2~3명 리드, **1일 1시간** 기술부채 해소 시간 도입 → React Native 업그레이드 등 기술부채 해소

`React Native` `TypeScript` `Java` `Objective-C` `BLE` `Amplitude` `Jest` `Fastlane` `GitHub Actions`

### 에스제이더블유인터내셔널 (시원스쿨) — 국내 1위 온라인 어학 교육 플랫폼
**2018.06 – 2021.05 (3년) · iOS Developer**

- **AVFoundation** 기반 공용 영상 플레이어 라이브러리 개발해서 다른 앱과 공유
- 전체 강의를 순회하며 재생 가능 여부를 검증하는 **UI Test 기반 QA 프로세스** 구축
- **Instruments**로 메모리 릭 탐지, Memory Graph로 순환 참조 해결
- RxSwift 도입과 함께 **MVVM 아키텍처** 적용
- 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하여 제로베이스에서 자체 앱 단독 개발
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향
- 최소화·최대화 기능을 전 화면에서 **재사용** 가능하도록 기반 ViewController 설계·구현
- 화면 녹화 방지·탈옥 감지 등 콘텐츠 보호 기능 구현
- 유휴 iMac을 이용하여 Fastlane 기반 CI/CD 인프라 구축
- **Objective-C**로 된 앱을 Swift로 점진 마이그레이션, 레거시 리팩토링

`Swift` `Objective-C` `MVVM` `RxSwift` `AVFoundation` `XCUITest` `Instruments` `StoreKit` `Fastlane` `Firebase` `Storyboard`

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+)**

- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 광고 수익 월 $100 이상 달성(2017.12 기준, 2020년 기준 $800+)
- '관련주식검색기': 푸시 알림 제안 + Node.js·FCM 기반 발송 서버 구축으로 **매출 2배** 달성(최대 **MAU 5,899**, 평균 MAU 1,100)
- ShowNote(iPad용 PDF 기반 프레젠테이션 앱): 기획을 전면 개편하며 기존 기획서에 없던 특허 핵심 **'Trigger'** 개념 고안, 퇴사 후에도 유지보수를 지속해 **특허 출원** 및 2018.07 **10억 원 규모 엔젤 투자 유치(Enable Holdings)**에 기여

`Swift` `UIKit` `PDFKit` `Node.js` `Firebase`

### 크레디프 — 이동통신 3사·공공기관 대상 SI/SM 전문기업
**2009.08 – 2017.02 (7년+) · 개발자**

- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- 저전력 **Beacon** 구매자 대상 SKT **O2O Android SDK**를 JNI 대신 **AIDL** 기반으로 개발
- 자동 Web 테스트 오픈소스 'WebPageTest'의 DLL(C++)을 수정해서 스스로 RDP 세션을 열어서 하나의 장비로 다중 테스트 가능하도록 개선
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결, 신규 언어·플랫폼 선행 연구

`C` `C++` `C#` `Java` `AIDL` `Beacon` `MySQL` `Oracle` `MSSQL`

---

## 외부 활동

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영.
- 게임도우미를 SwiftUI로 전환 시 **Clean Architecture** 적용
- 위 경험을 [Article](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)로 작성해 Tuist CEO Pedro Piñera가 LinkedIn으로 DM을 보내와 연결, [한국어 페이지 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65)에 기여. 이후 한국 개발자와의 소통을 원한 Pedro를 운영 중인 **Tuist 노하우 공유 오픈채팅방**에 초대
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- Dev Korea Meetup 등 커뮤니티 정기 참여, [**Medium**](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682)·TCA 등 기술 Article 다수 발행

## AI 활용 경험

- SK AX에서 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**

---

## 스킬

```
Swift · SwiftUI · UIKit · Objective-C
Combine · Swift Concurrency(async/await) · RxSwift
MVVM · Clean Architecture(게임도우미) · TCA(개인 프로젝트)
XCTest · XCUITest · Instruments
SPM · CocoaPods · Tuist(개인 프로젝트)
Fastlane · CI/CD · GitLab CI/CD · GitHub Actions
AVFoundation · WidgetKit · StoreKit · PDFKit · WKWebView
BLE · AIDL · Firebase · Amplitude
React Native · TypeScript · Jest
Dart · Flutter(개인)
C · C++ · C# · Java · Node.js · MySQL · Oracle · MSSQL
```

---

## 학력

**서일대학교**
2003.03 – 2009.02 · 졸업 · 소프트웨어전공
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품: Ubicon2, 졸업작품: WIPI Designer
