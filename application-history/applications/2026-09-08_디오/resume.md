# 이영준

**모바일 8년+ (iOS 5년+ · React Native 2년+) · 총 경력 15년+**

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

iOS를 중심으로 다양한 도메인과 플랫폼에서 크래시 대응부터 성능 최적화, CI/CD 구축까지 안정적인 서비스 운영을 위한 전 과정을 다뤄왔으며, 처음 사용하는 도구도 업무 효율을 높이는 방법을 연구해서 기존 동료도 모르는 방법을 찾아 공유합니다. 기획과 API 에 적극적으로 피드백하면서 더 좋은 제품을 위한 방안을 함께 찾고, AI 코딩 에이전트를 동료로 취급하며 결과는 비판적으로 검증합니다. 아직 경험하지 못한 의료 장비 도메인에서, 믿고 쓰는 읜료 장비 앱의 안정성을 디오와 함께 만들어가고 싶습니다.

---

## 주요 경력

### SK AX (계약: 디투엘) | 2024.06 – 2025.10 · iOS Developer

IT 외주 SK 계열 · SKT의 3개 iOS 프로젝트 유지보수 (WebView 기반 Hybrid 앱 SWING, B2C 앱 T world, AI Layer SDK)

- **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결
- 네이티브 화면에서 WebView로 AI 서비스를 호스팅하는 브릿지 SDK인 **AI Layer iOS SDK** 유지보수, Accessibility·UI 개선
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 **API를 분석 후 서버 개발자에게 수정안 제시**로 해결
- 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열 기능** 구현으로 트래픽 급증 구간 안정성 확보
- Closure 기반 API 호출은 **Swift Concurrency**, 신규 UI는 **Combine**으로 점진 전환해 생산성·성능 개선
- **Objective-C**를 Swift로 점진적 마이그레이션(Extension 단위)
- 신규 API 연동 추가 시 **Unit Test 작성**으로 예외 사항 검증
- Fastlane으로 빌드에서 **TestFlight**, Slack IPA 업로드까지 자동화

`Swift` `SwiftUI` `UIKit` `Objective-C` `WKWebView` `WidgetKit` `Combine` `Swift Concurrency` `Unit Test` `Firebase` `GitLab CI/CD` `Fastlane`

### 올룰로 (킥고잉) | 2021.06 – 2023.10 · App Developer → Mobile Tech Lead

국내 최초 공유 킥보드(모빌리티) 서비스, 전기 자전거로 사업 확장 · **React Native** 기반 크로스플랫폼 앱 개발·운영

- 전기 자전거 잠금 장치, 헬멧 잠금 장치 등 **신규 장비 BLE 연동** 구현, 대여 시 잠금 해제와 반납 시 **잠금 상태 확인** 처리
- **BLE** 통신 로직 최적화, 스캔·연결 소요 시간 지표화로 개선 검증
- **Channel Talk(외부 CX SDK) 통합**으로 전화 전용 고객 지원을 인앱 전환, 통합 후 알림 분류 메소드에서 발생한 **Crash**를 제조사에 제보하고 수정안 PR 제출
- Naver Map SDK **Native Bridge**에 축척 계산 로직 추가해 지도 자동 Zoom(길안내) 구현
- 구역 정보 **API 호출 4회→1회**로 데이터 사용량 **최소 75% 절감**(위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- Native Bridge의 Manifest 수정으로 **Android 12 권한 정책** 대응
- 외국어 지원 프로젝트에서 **다국어 대응** 구축, Android 언어 설정 관련 오픈소스 기여
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**, 빌드 캐시 적용으로 **배포 소요 시간 50% 감축**
- 엔지니어 2~3명 리드, **1일 1시간** 기술부채 해소 시간 도입으로 React Native 업그레이드 등 기술부채 해소

`React Native` `TypeScript` `Java/Kotlin(Native Bridge)` `Objective-C(Native Bridge)` `BLE` `Naver Map SDK` `Channel Talk SDK` `Fastlane` `GitHub Actions`

### 에스제이더블유인터내셔널 (시원스쿨) | 2018.06 – 2021.05 · iOS Developer

국내 1위 온라인 어학 교육 플랫폼

- 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 처음부터 자체 앱 단독 개발
- **Instruments**로 메모리 릭 탐지, Memory Graph로 순환 참조 해결
- 전체 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 **QA 프로세스** 구축
- **AVFoundation** 기반 공용 영상 플레이어 라이브러리 개발해서 다른 앱과 공유
- RxSwift 도입과 함께 **MVVM 아키텍처** 적용
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1에서 **4.7**로 상향

`Swift` `MVVM` `RxSwift` `AVFoundation` `XCUITest` `Instruments` `Fastlane` `Firebase`

### 개인 iOS 개발자 | 2017.02 – 2018.06

- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 광고 수익 **월 $100 이상** 달성(2017.12 기준, 2020년 기준 $800+)
- '관련주식검색기': **푸시 알림** 제안 + Node.js·**FCM** 기반 발송 서버 구축으로 **매출 2배** 달성(최대 **MAU 5,899**, 평균 MAU 1,100)

`Swift` `UIKit` `Node.js` `Firebase(FCM)`

### 크레디프 | 2009.08 – 2017.02 · 정규직 · 개발자

이동통신 3사·공공기관 대상 SI/SM 전문기업

- 저전력 **Beacon** 구매자 대상 SKT **O2O Android SDK**를 JNI 대신 **AIDL** 기반으로 개발
- **WIFI 실내측위** (연구)플랫폼 풀스택 단독 개발
- 서버(C)부터 클라이언트(C#/Java, 모바일)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결, 신규 언어·플랫폼 선행 연구

`C` `C#` `Java` `AIDL` `Beacon` `RESTful API` `MySQL` `Oracle`

---

## AI 활용 경험

- SK AX에서 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**

---

## 외부 활동

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영(개인 프로젝트 한정)
- [Seoul iOS Meetup 발표](https://youtu.be/FFkEbqG4ips) 및 [Tuist 한국어 문서 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65) 기여, Tuist CEO Pedro Piñera와 직접 교류하며 국내 노하우 공유 오픈채팅방 운영
- **Flutter · Dart(학습)**: Firestore로 카카오톡 채팅 화면을 클론 구현하며 학습, [Medium 아티클](https://toyboy2.medium.com/list/flutter-c6e656a0db03)로 연재(실무·상용 적용 경험 아님)
- [**Medium**](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682)·TCA 등 기술 Article 다수 발행

---

## 보유 스킬

```
Swift · SwiftUI · UIKit · Objective-C
React Native · TypeScript · Java/Kotlin(Native Bridge)
Combine · Swift Concurrency(async/await) · RxSwift
MVVM · Clean Architecture(개인 프로젝트 한정) · TCA(미출시 개인 프로젝트)
BLE · Beacon · AIDL · WKWebView · WidgetKit · AVFoundation
Firebase(FCM) · Node.js · RESTful API
Tuist(개인 프로젝트 한정) · Fastlane · GitLab CI/CD · GitHub Actions
Unit Test · XCUITest · Instruments
Flutter(학습) · Dart(학습)
```

---

## 학력

**서일대학교** | 2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)

사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품: Ubicon2, 졸업작품: WIPI Designer
