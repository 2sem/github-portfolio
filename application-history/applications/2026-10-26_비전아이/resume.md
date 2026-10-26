# 이영준

Senior iOS Developer · BLE · Mobile SDK

toyboy2@hanmail.net · [GitHub](https://github.com/2sem) · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com)

iOS SDK를 유지보수·확장하는 쪽과 외부 SDK를 앱에 통합하는 쪽을 모두 경험했습니다. 모바일 엔지니어 2~3명을 리드하며 코드 리뷰 프로세스와 기술부채 해소 사이클을 팀에 정착시켰고, 이슈나 장애 상황에서도 원인을 끝까지 추적해 침착하게 해결합니다. AI 코딩 도구를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다.

**모바일 8년+** (iOS 5년+ · React Native 2년+) · Mobile Tech Lead

## 경력

**SK AX (계약: 디투엘) · 2024.06 – 2025.10 · 프리랜서 · iOS Developer**
IT 외주 SK 계열 · SKT의 3개 iOS 프로젝트 유지보수 (SWING, T world, AI Layer SDK) · T world MAU 800만
- 보안 기능 설정한 사용자가 **SwiftUI** 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 **API를 분석 후 서버 개발자에게 수정안 제시**로 해결
- **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결
- Closure 기반 API 호출은 **Swift Concurrency**, 신규 UI는 Combine으로 점진 전환해 생산성·성능 개선
- **AI Layer iOS SDK** 유지보수, Accessibility·UI 개선
- 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열(Queue) 기능** 구현으로 트래픽 급증 구간 안정성 확보
- Objective-C를 Swift로 점진적 마이그레이션(Extension 단위)
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + [**MR Template**](https://toyboy2.medium.com/automate-your-tasks-with-mr-template-using-gitlab-commands-b1af5c84ce7b) 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파

`Swift` `Objective-C` `UIKit` `SwiftUI` `WidgetKit` `WKWebView` `Combine` `Swift Concurrency` `MVVM` `RxSwift` `Unit Test` `SPM` `CocoaPods` `Firebase` `Fastlane` `GitLab CI/CD` `Jira`

**올룰로 (킥고잉) · 2021.06 – 2023.10 · 정규직 · App Developer → Mobile Tech Lead**
국내 최초 공유 킥보드(모빌리티) 서비스 · React Native 기반 크로스플랫폼 앱(iOS·Android)
- **BLE**(react-native-ble-plx의 iOS 네이티브 브리지 분석, 내부적으로 CoreBluetooth 사용) 통신 로직 최적화: Library 옵션 및 제조사 펌웨어 조정 후 스캔·연결 소요 시간 지표화로 개선 검증
- react-native-**ble-plx**가 Xcode 13과 호환되는 Pod을 참조하지 않아 발생한 빌드 오류를 [Pod과 라이브러리를 fork해 CocoaPods·npm에 배포하는 방식으로 해결](https://toyboy2.medium.com/react-native-ble-plx-xcode-13-troubleshootings-dca3f793b1e0)
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(+위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- iOS/Android로 분리돼 있던 GitHub **CI/CD**를 **Fastlane 기반으로 통합**
- Jest 기반 **Unit 테스트** 보강, [실행 Parameter 조정과 캐시 적용](https://medium.com/@toyboy2/how-to-speed-up-jest-8c8f5d40f4f9)으로 테스트 시간 **37초 → 27초** 단축
- **Channel Talk(외부 CX SDK) 통합**: [채팅 상담](https://youtube.com/shorts/tC-np8ShcZU) 기능 추가, 통합 후 알림 분류 메소드에서 발생한 **Crash**를 제조사에 제보하고 [수정안 PR 제출](https://github.com/channel-io/react-native-channel-io/pull/107)
- Naver Map SDK **Native Bridge**에 [축척 계산 로직 추가](https://github.com/team-olulo/react-native-naver-map/pull/7)해 지도 자동 Zoom(길안내) 구현
- [빌드 캐시 적용](https://toyboy2.medium.com/how-to-deploy-react-native-app-all-in-one-click-part1-54362deaeda2)으로 **배포 소요 시간 50% 감축**
- 엔지니어 2~3명 리드, **1일 1시간** [기술부채 해소 시간 도입](https://toyboy2.medium.com/%EC%9E%91%EC%9D%80-%EA%B2%83%EB%B6%80%ED%84%B0-%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EA%B2%83%EB%B6%80%ED%84%B0-%EB%B0%94%EA%BF%94%EB%82%98%EA%B0%80%EA%B8%B0-ff21ea4fb6c2) → [**React Native 점진적 업그레이드**](https://medium.com/@toyboy2/migration-react-native-from-0-65-to-0-68-troubleshooting-guide-0a8a7401c581) 등 기술부채 해소

`React Native` `TypeScript` `BLE` `Jest` `Java/Objective-C(Native Bridge)` `Naver Map SDK` `Channel Talk SDK` `Fastlane` `GitHub Actions`

**에스제이더블유인터내셔널 (시원스쿨) · 2018.06 – 2021.05 · 정규직 · iOS Developer**
국내 1위 온라인 어학 교육 플랫폼
- **빅토익보카**: 기획·디자인·Android 앱이 모두 다른 상황에서 기획을 새로 정립해 iOS 버전 개발 / **StoreKit 기반 인앱결제**를 직접 제안·구현해 도서 부록을 넘어 자체 수익화
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향
- 전체 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 [**QA 프로세스**](https://toyboy2.medium.com/xcuielement-wait-extension-c6c40cdce458) 구축
- AVFoundation 기반 공용 영상 플레이어 라이브러리 개발해서 다른 앱과 공유
- Objective-C로 된 앱을 인수해 Swift로 점진 마이그레이션, 레거시 리팩토링

`Swift` `Objective-C` `AVFoundation` `StoreKit` `XCUITest`

**개인 iOS 개발자 · 2017.02 – 2018.06 · 개인**
- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 **광고 수익 월 $100 이상** 달성(2017.12 기준, 2020년 기준 $800+)
- '관련주식검색기': 푸시 알림 제안 + Node.js·**FCM** 기반 발송 서버 구축으로 **매출 2배** 달성
- ShowNote: 앞선 개발·기획 성과가 **특허 출원**과 2018.07 **10억 원 규모 엔젤 투자 유치(Enable Holdings)** 결정으로 이어짐
- Xcode 업그레이드 후 GitHub Workflow(CD)에서 발생한 [SPM 오류(Package.resolved 손상)를 해결하고 패치 Action으로 제작](https://toyboy2.medium.com/package-resolved-file-is-corrupted-or-malformed-fix-or-delete-the-file-baeb572863fc)

`Swift` `UIKit` `Firebase` `Node.js`

**크레디프 · 2009.08 – 2017.02 · 정규직 · 개발자**
이동통신 3사·공공기관 대상 SI/SM 전문기업
- 저전력 **Beacon** 구매자 대상 SKT **O2O Android SDK**를 JNI 대신 **AIDL** 기반으로 개발
- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결, 신규 언어·플랫폼 선행 연구
- ShowNote: PDF 페이지를 배경으로 렌더링하고 개체를 위에 표시하는 방식 구현, 기획을 전면 개편하며 기존 기획서에 없던 특허 핵심 **'Trigger'** 개념 고안
- '누군지다알아'에 수신 이미지 생성 기능을 추가해 2.0 출시, 연락처 [초성 검색](https://toyboy2.medium.com/ios%EC%97%90%EC%84%9C-%EC%B4%88%EC%84%B1%EC%9C%BC%EB%A1%9C-%EC%97%B0%EB%9D%BD%EC%B2%98-%EA%B2%80%EC%83%89%ED%95%98%EA%B8%B0-c2fbdce54383) 기술을 연구해 정리

`C` `C#` `Java` `AIDL` `Beacon` `MySQL` `Oracle` `MSSQL`

## 외부 활동
- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영(개인 프로젝트 한정)
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- [**Medium**](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682) 등 기술 Article 다수 발행, Dev Korea Meetup 등 커뮤니티 정기 참여

## AI 활용 경험
- 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**

## 학력
**서일대학교** · 2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
