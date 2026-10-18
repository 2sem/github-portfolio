# 이영준

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

React Native와 iOS를 중심으로 다양한 도메인에서 담당 영역을 단독으로 책임져 왔습니다. 업무를 스스로 발굴·분할하고 우선순위를 할당해 수행하며, 이슈나 장애 상황에서도 원인을 끝까지 추적해 침착하게 해결합니다. 초기 단계 프로덕트를 기획부터 출시까지 단독으로 이끈 경험이 다수 있으며, AI 코딩 도구를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다. 사용자가 캐릭터와 끊김 없이 대화하는 경험을 뤼튼에서 함께 만들고 싶습니다.

---

## 경력

### 올룰로 (킥고잉) — 2021.06 – 2023.10 · App Developer → Mobile Tech Lead
국내 최초·국내 1위 공유 킥보드 서비스 · 대규모 B2C O2O · React Native 기반 크로스플랫폼 앱(iOS·Android)

Native 모듈 수정 PR Template, CI/CD 개선, 모바일 개발자 회의와 기술 부채 해결 시간 등을 도입하여 개발 프로세스 개선

- **채널톡**: 유선 고객센터를 앱 내 고객센터 기능으로 전환. SDK에서 알림 분류 시 **크래시** 발생하여 원인을 분석해서 수정하고 제조사에 제보 및 **PR 제출**
- **동네지도**: 지도에 킥보드가 아닌 장소를 표시하는 SNS 기능 제공. Custom Tooltip의 Design을 일치할 수 있게 Map 라이브러리의 **Native Module 수정**. 장소 등록 시 설정할 Emoji 선택 기능 개발하여 오픈소스로 배포
- **데이터 사용 최적화**: 서버와 지도 정보에 대한 격자 Grid 캐싱 구축과 Google Polyline 적용으로 송/수신 데이터를 줄이고 앱 자체로도 Profiler 분석을 통해 **호출 횟수를 1/4로 최적화**
- **알림 설정 분리**: 마케팅 알림 동의를 별도 설정으로 제공. OS에 따라 사진 접근 대응, 추적 권한 요청 추가. iOS는 자동으로 배지 카운트가 동기화되지 않아 **Notification Service Extension**로 구현
- **전기자전거**: 신규 기기 유형 대여 기능 제공. Protocol 분석 및 전용 **BLE 모듈** 개발, UI 개발 지도
- **패스**: 여러 화면에서 동일한 패스의 상태를 사용하기 위해 UI 외부에서 전역으로 패스 상태 업데이트하기 위한 **Redux** dispatch 호출 구조 설계 구현
- **외국어 지원**: 설정 언어에 따른 Resource 전환 **Hook** 설계, Android 설정 오픈소스에 앱 언어 설정 기능 추가
- **CI/CD**: iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**, 빌드 캐시 적용으로 **배포 소요 시간 50% 감축**
- **리드**: 엔지니어 2~3명 리드, **1일 1시간** 기술부채 해소 시간 도입 → React Native 업그레이드 등 기술부채 해소, PR Template·Jira Workflow로 코드 리뷰·업무 프로세스 표준화

`React Native` `TypeScript` `Redux` `Objective-C/Kotlin(Native Bridge)` `BLE` `Amplitude` `Jest` `Fastlane` `GitHub Actions`

### SK AX (프리랜서, 계약: 디투엘) — 2024.06 – 2025.10 · iOS Developer
IT 외주 SK 계열 · SKT의 3개 iOS 프로젝트 유지보수 — T world(고객센터 B2C), SWING(대리점 B2B Hybrid), AI Layer SDK

- **T world**: **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 Firebase Crashlytics로 추적, 전임자 PR의 가설로는 재현되지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결
- **T world**: 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열(Queue) 기능** 구현으로 트래픽 급증 구간 안정성 확보. 보안 기능 설정한 사용자가 **SwiftUI 위젯**을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 API를 분석 후 서버 개발자에게 수정안 제시로 해결
- **SWING**: Objective-C를 Swift로 점진적 마이그레이션(Extension 단위), CocoaPods 종료 대비 라이브러리별 **SPM 전환**
- **AI Layer SDK**: T world, T membership에 탑재하는 SDK. 스플래시 버그, 접근성 문제 해결. Fastlane으로 빌드→TestFlight→Slack IPA 업로드 자동화
- **AI 활용**: 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- **프로세스**: 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + **MR Template** 적용으로 해결. 주니어 엔지니어 2명을 Subtask 단위 업무 할당·분할 위임 방식으로 코칭

`Swift` `SwiftUI` `Objective-C` `WidgetKit` `Swift Concurrency` `XCTest` `SPM` `CocoaPods` `Fastlane` `GitLab CI/CD` `Firebase Crashlytics`

### 에스제이더블유인터내셔널 (시원스쿨) — 2018.06 – 2021.05 · iOS Developer
국내 1위 온라인 어학 교육 플랫폼 · 대규모 B2C 학습 서비스(유료 강의·인앱결제)

- **시원스쿨 강의실**: 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 제로베이스로 자체 앱 단독 개발. 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향
- **안정성**: **Instruments**로 메모리 릭 탐지, Memory Graph로 순환 참조 해결. 전체 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 **QA 프로세스** 구축
- **시원스쿨 플레이어**: AVFoundation 기반 공용 **영상 플레이어** 라이브러리 개발해서 다른 앱과 공유
- **빅토익 보카**: **StoreKit 기반 인앱결제**를 직접 제안·구현해 도서 부록을 넘어 자체 수익화
- **시원스쿨펜**: 단어 카드 스크롤 성능을 ScrollView 대신 **FlatList**로 변경하여 개선. React Native, Unity 등 CrossPlatform 선행 학습, 팀 내 교육 및 파일럿 프로젝트 수행

`Swift` `UIKit` `RxSwift` `MVVM` `AVFoundation` `StoreKit` `XCUITest` `Instruments` `Fastlane`

### 개인 iOS 개발자 — 2017.02 – 2018.06 · 개인
- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 **광고 수익 월 $100 이상** 달성(2017.12 기준, 2020년 기준 $800+)
- '관련주식검색기': 푸시 알림 제안 + Node.js·**FCM** 기반 발송 서버 구축으로 **매출 2배** 달성(최대 **MAU 5,899**)
- ShowNote: iPad 대상 Presentation 앱. 특허 핵심 아이디어인 'Trigger' 고안, 10억 투자 유치

### 크레디프 — 2009.08 – 2017.02 · 개발자
이동통신 3사·공공기관 대상 SI/SM
- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- 저전력 Beacon 구매자 대상 SKT O2O **Android SDK**를 JNI 대신 AIDL 기반으로 개발

---

## AI 활용 · 외부 활동
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev) 모듈화 적용, [한국어 문서 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65) 기여 및 Tuist 노하우 공유 오픈채팅방 운영
- Seoul iOS Meetup ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- [Medium](https://toyboy2.medium.com)에 [React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682)·[iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5) 기술 Article 다수 발행

## 스킬
React Native · TypeScript · Redux · Jest · Native Module(Objective-C/Kotlin) · Swift · SwiftUI · UIKit · Objective-C · Swift Concurrency · SPM · CocoaPods · Fastlane · GitHub Actions · GitLab CI/CD · Firebase Crashlytics · Instruments · StoreKit · AVFoundation · BLE

## 학력
**서일대학교** · 2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
