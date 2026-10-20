# 이영준 — 마스터 이력서

> 불릿 뱅크 + **확정 베이스 ①②(섹션 0-1)**. 공고용 이력서는 베이스 ① 또는 ②에서 시작해 불릿 순서·볼드만 조정한다.
> 불릿 문장의 원문 출처는 섹션 3·4·5. 섹션 1(포지셔닝 A~G)·2(요약 줄 변형)·8(과거 이력)은 참고 전용.

---

## 0. 연락처 (고정 · 포트폴리오 링크는 2026-10부로 제외, Medium으로 대체)

toyboy2@hanmail.net · [GitHub](https://github.com/2sem) · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com)

> 영문 이력서 / 해외·글로벌 기업 지원 시: `kofggm@gmail.com`을 대표 이메일로 사용. 국내 공고는 기존 hanmail.net 유지.

---

## 0-1. 확정 베이스 ①·② (2026-10 전략 개편 · 모든 공고용 이력서의 출발점)

> **공고별 맞춤 = 불릿 순서 + 볼드 조정, 이것만.** 불릿 추가·재작성, 섹션 순서 변경, 포지셔닝 변경, 소개문 클로징, 경력 요약 줄 순서 변경은 하지 않는다. 목표 소요 10분 이내.
> 레이아웃(여백·페이지 채움·자간)은 템플릿으로 고정. 빌드 후 확인은 3가지만: 폰트 깨짐 / 블록 중간 잘림 / 2페이지 초과.
> 불릿 문장은 이 문서 아래 3·4·5번 섹션 원문 그대로. 아래 구성은 "어떤 불릿을 어떤 순서로" 쓰는지만 확정한 것이다.
> 이전 포지셔닝 A~G(섹션 1)와 클로징 문장 패턴은 **참고 전용**. 베이스에서는 쓰지 않는다.
> 두 베이스 공통: 연락처는 GitHub를 두 번째로 둔다. 경력 요약 줄은 아래 한 줄로 고정한다.

**경력 요약 줄 (고정, 두 베이스 공통)**

**총 경력 15년+** · 모바일 8년+ (iOS 5년+ · React Native 2년+) · Mobile Tech Lead

**연락처 줄 (고정)**

toyboy2@hanmail.net · [GitHub](https://github.com/2sem) · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com)

**사용 기준**
- 베이스 ①: iOS 네이티브 중심, SDK/플랫폼/모듈화/안정성 성격의 시니어 공고
- 베이스 ②: React Native·크로스플랫폼·모바일 리드/Tech Lead 성격 공고
- 둘 다 해당되면 공고의 업무 동사(설계·리딩·주도·구축)가 가리키는 쪽. 고민되면 ①.
- 섹션 순서(고정): 이름 → 태그라인 → 연락처 → 소개 → 경력 요약 줄 → 경력 → 외부 활동 → AI 활용 경험 → 학력

---

### 베이스 ① Senior iOS (SDK/플랫폼형) — 샵라이브 제출본 구조 기반 재구성

> 구조 원칙: 각 회사 첫 불릿은 SDK/라이브러리 → 이후 안정성·자동화·리드 순. 소개 첫 문장은 "SDK 제공·소비 양쪽 경험". 기술 스택 섹션은 없고 회사별 태그 줄만 둔다. Ollama MR 리뷰·SwiftUI 마이그레이션 Skill·Davinci MCP는 "AI 활용 경험" 섹션에 둔다.
> 2026-10 샵라이브 제출 DOCX의 구성(회사별 불릿 선택과 순서, 섹션 구조)을 기준으로 하되, 불릿 문장은 제출본의 손질 표현이 아니라 마스터 원문으로 통일했다. 제출본에만 있던 샵라이브 전용 요소(소개문 말미의 Shoplive 클로징, 외부 활동의 Flutter 불릿, TCA 불릿, 크레디프의 SMSECO 불릿)는 베이스에서 제외했다.

**태그라인 (이름 아래 고정)**
Senior iOS Developer · Mobile SDK

**소개 (고정)**
iOS SDK를 유지보수·확장하는 쪽과 외부 SDK를 앱에 통합하는 쪽을 모두 경험했습니다. 모바일 엔지니어 2~3명을 리드하며 코드 리뷰 프로세스와 기술부채 해소 사이클을 팀에 정착시켰고, 이슈나 장애 상황에서도 원인을 끝까지 추적해 침착하게 해결합니다. AI 코딩 도구를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다.

#### 경력

**SK AX (계약: 디투엘) · 2024.06 – 2025.10 · 프리랜서 · iOS Developer**
IT 외주 SK 계열 · SKT의 3개 iOS 프로젝트 유지보수 (SWING, T world, AI Layer SDK) · T world MAU 800만
- **AI Layer iOS SDK** 유지보수, Accessibility·UI 개선
- **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결
- 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열(Queue) 기능** 구현으로 트래픽 급증 구간 안정성 확보
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 API를 분석 후 서버 개발자에게 수정안 제시로 해결
- Closure 기반 API 호출은 Swift Concurrency, 신규 UI는 Combine으로 점진 전환해 생산성·성능 개선
- Objective-C를 Swift로 점진적 마이그레이션(Extension 단위)
- CocoaPods 종료 대비 라이브러리별 SPM 전환 진행
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + [**MR Template**](https://toyboy2.medium.com/automate-your-tasks-with-mr-template-using-gitlab-commands-b1af5c84ce7b) 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파
- 주니어 엔지니어 2명을 Subtask 단위 업무 할당·분할 위임 방식으로 코칭

`Swift` `Objective-C` `UIKit` `SwiftUI` `WidgetKit` `WKWebView` `Combine` `Swift Concurrency` `MVVM` `RxSwift` `Unit Test` `SPM` `CocoaPods` `Firebase` `Fastlane` `GitLab CI/CD` `Jira`

**올룰로 (킥고잉) · 2021.06 – 2023.10 · 정규직 · App Developer → Mobile Tech Lead**
국내 최초 공유 킥보드(모빌리티) 서비스 · React Native 기반 크로스플랫폼 앱(iOS·Android)
- **Channel Talk(외부 CX SDK) 통합**: [채팅 상담](https://youtube.com/shorts/tC-np8ShcZU) 기능 추가, 통합 후 알림 분류 메소드에서 발생한 **Crash**를 제조사에 제보하고 [수정안 PR 제출](https://github.com/channel-io/react-native-channel-io/pull/107)
- **react-native-vision-camera**의 Android 빌드 오류(Unresolved reference: resolveView)를 메서드 이름 기반 동적 호출로 바꿔 해결하고 [오픈소스 PR 제출](https://github.com/mrousavy/react-native-vision-camera/pull/1318)
- Naver Map SDK **Native Bridge**에 [축척 계산 로직 추가](https://github.com/team-olulo/react-native-naver-map/pull/7)해 지도 자동 Zoom(길안내) 구현
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(+위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**
- [빌드 캐시 적용](https://toyboy2.medium.com/how-to-deploy-react-native-app-all-in-one-click-part1-54362deaeda2)으로 **배포 소요 시간 50% 감축**
- 외국어 지원 프로젝트에서 [다국어 대응 구축](https://toyboy2.medium.com/supporting-multi-language-in-react-native-applications-8bf4ddc8a8ef), [Android 언어 설정 관련 오픈소스 기여](https://toyboy2.medium.com/react-native-android-per-app-language-settings-5f9d4a29e9d2)
- 엔지니어 2~3명 리드, **1일 1시간** [기술부채 해소 시간 도입](https://toyboy2.medium.com/%EC%9E%91%EC%9D%80-%EA%B2%83%EB%B6%80%ED%84%B0-%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EA%B2%83%EB%B6%80%ED%84%B0-%EB%B0%94%EA%BF%94%EB%82%98%EA%B0%80%EA%B8%B0-ff21ea4fb6c2) → [**React Native 점진적 업그레이드**](https://medium.com/@toyboy2/migration-react-native-from-0-65-to-0-68-troubleshooting-guide-0a8a7401c581) 등 기술부채 해소

`React Native` `TypeScript` `Java/Objective-C(Native Bridge)` `Naver Map SDK` `Channel Talk SDK` `Fastlane` `GitHub Actions`

**에스제이더블유인터내셔널 (시원스쿨) · 2018.06 – 2021.05 · 정규직 · iOS Developer**
국내 1위 온라인 어학 교육 플랫폼
- AVFoundation 기반 공용 영상 플레이어 라이브러리 개발해서 다른 앱과 공유
- 최소화·최대화 기능을 전 화면에서 **재사용** 가능하도록 기반 ViewController 설계·구현
- 전체 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 [**QA 프로세스**](https://toyboy2.medium.com/xcuielement-wait-extension-c6c40cdce458) 구축
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향
- 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 제로베이스로 자체 앱 단독 개발
- Objective-C로 된 앱을 인수해 Swift로 점진 마이그레이션, 레거시 리팩토링
- **빅토익보카**: 기획·디자인·Android 앱이 모두 다른 상황에서 기획을 새로 정립해 iOS 버전 개발 / **StoreKit 기반 인앱결제**를 직접 제안·구현해 도서 부록을 넘어 자체 수익화

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
- ShowNote의 [문서 잠금(Device Lock)](https://toyboy2.medium.com/how-to-lock-your-ios-app-with-device-lock-656f739fe4c6)·[Zip 압축/암호화 저장](https://toyboy2.medium.com/zip-archiving-files-in-ios-app-ade489532066)·[페이지 순서 드래그 변경](https://toyboy2.medium.com/how-to-move-cells-in-your-ios-app-by-dragging-ad83f8ad72e6) 구현
- '누군지다알아'에 수신 이미지 생성 기능을 추가해 2.0 출시, 연락처 [초성 검색](https://toyboy2.medium.com/ios%EC%97%90%EC%84%9C-%EC%B4%88%EC%84%B1%EC%9C%BC%EB%A1%9C-%EC%97%B0%EB%9D%BD%EC%B2%98-%EA%B2%80%EC%83%89%ED%95%98%EA%B8%B0-c2fbdce54383) 기술을 연구해 정리

`C` `C#` `Java` `AIDL` `Beacon` `MySQL` `Oracle` `MSSQL`

#### 외부 활동
- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영(개인 프로젝트 한정)
- 위 경험을 [Article](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)로 작성해 Tuist CEO Pedro Piñera와 LinkedIn으로 직접 연결, [한국어 페이지 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65)에 기여
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- [**Medium**](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682) 등 기술 Article 다수 발행, Dev Korea Meetup 등 커뮤니티 정기 참여

#### AI 활용 경험
- 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- Youtube 영상 편집을 위해 유료 버전 전용 기능인 Davinci Resolve MCP를 무료 버전 [davinci-resolve-lite-mcp](https://github.com/2sem/davinci-resolve-lite-mcp)으로 직접 구축, 장면 분류·편집 방법·검증 단계를 Skill과 Script로 분리해 신뢰성 향상


#### 학력
**서일대학교** · 2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)

---

### 베이스 ② React Native / 크로스플랫폼 (모바일 리드형) — 킥고잉 리드 경험 기반

> 구조 원칙: 섹션 구조는 ①과 같다(외부 활동 → AI 활용 경험 → 학력). 킥고잉을 맨 위에 둔다(경력 블록 순서 예외). 리드·프로세스 불릿을 앞에, 이어서 RN 기술 불릿. 소개는 "React Native와 iOS" 순서. Flutter는 학습 스코프를 명시해 외부 활동에만 둔다.
> 경력 블록 순서는 이 베이스에서만 킥고잉 → SK AX → 시원스쿨 → 개인 → 크레디프로 고정한다(공고별로 바꾸지 않는다).

**태그라인 (이름 아래 고정)**
Mobile Tech Lead · React Native / iOS

**소개 (고정)**
React Native와 iOS를 중심으로 다양한 도메인에서 담당 영역을 단독으로 책임져 왔습니다. 모바일 엔지니어 2~3명을 리드하며 코드 리뷰 프로세스와 기술부채 해소 사이클을 팀에 정착시켰고, 이슈나 장애 상황에서도 원인을 끝까지 추적해 침착하게 해결합니다. AI 코딩 도구를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다.

#### 경력

**올룰로 (킥고잉) · 2021.06 – 2023.10 · 정규직 · App Developer → Mobile Tech Lead**
국내 최초 공유 킥보드(모빌리티) 서비스 · React Native 기반 크로스플랫폼 앱(iOS·Android)
- 엔지니어 2~3명 리드, **1일 1시간** [기술부채 해소 시간 도입](https://toyboy2.medium.com/%EC%9E%91%EC%9D%80-%EA%B2%83%EB%B6%80%ED%84%B0-%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EA%B2%83%EB%B6%80%ED%84%B0-%EB%B0%94%EA%BF%94%EB%82%98%EA%B0%80%EA%B8%B0-ff21ea4fb6c2) → [**React Native 점진적 업그레이드**](https://medium.com/@toyboy2/migration-react-native-from-0-65-to-0-68-troubleshooting-guide-0a8a7401c581) 등 기술부채 해소
- PR Template·Jira Workflow로 코드 리뷰·업무 프로세스 표준화
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(+위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**
- Android 배포를 AWS S3 링크 공유 방식에서 [**APK Slack 직접 업로드**](https://toyboy2.medium.com/how-to-distribute-apk-to-slack-automatically-1b3aa992177e)로 개선해 테스트 단계 단축
- Android Build-tools 31 이후 dx를 찾지 못해 로컬 빌드가 실패하던 문제를 **d8 링크 생성 Gradle 스크립트**로 해결하고 직접 등록한 [공개 이슈](https://github.com/channel-io/react-native-channel-io/issues/109)에 해결 방법 공유
- 이전 버전과 동시에 설치할 수 있도록 QA 버전 '테스트킥'을 [**flavor로 분리해 배포**](https://toyboy2.medium.com/how-to-split-android-project-for-qa-version-1128b2bce7bb)
- [빌드 캐시 적용](https://toyboy2.medium.com/how-to-deploy-react-native-app-all-in-one-click-part1-54362deaeda2)으로 **배포 소요 시간 50% 감축**
- **Channel Talk(외부 CX SDK) 통합**: [채팅 상담](https://youtube.com/shorts/tC-np8ShcZU) 기능 추가, 통합 후 알림 분류 메소드에서 발생한 **Crash**를 제조사에 제보하고 [수정안 PR 제출](https://github.com/channel-io/react-native-channel-io/pull/107)
- **react-native-vision-camera**의 Android 빌드 오류(Unresolved reference: resolveView)를 메서드 이름 기반 동적 호출로 바꿔 해결하고 [오픈소스 PR 제출](https://github.com/mrousavy/react-native-vision-camera/pull/1318)
- Naver Map SDK **Native Bridge**에 [축척 계산 로직 추가](https://github.com/team-olulo/react-native-naver-map/pull/7)해 지도 자동 Zoom(길안내) 구현
- BLE 통신 로직 최적화: Library 옵션 및 제조사 펌웨어 조정 후 스캔·연결 소요 시간 지표화로 개선 검증
- react-native-ble-plx가 Xcode 13과 호환되는 Pod을 참조하지 않아 발생한 빌드 오류를 [Pod과 라이브러리를 fork해 CocoaPods·npm에 배포하는 방식으로 해결](https://toyboy2.medium.com/react-native-ble-plx-xcode-13-troubleshootings-dca3f793b1e0)
- Jest 기반 Unit 테스트 보강, [실행 Parameter 조정과 캐시 적용](https://medium.com/@toyboy2/how-to-speed-up-jest-8c8f5d40f4f9)으로 테스트 시간 **37초 → 27초** 단축
- **Redux**로 앱 전역 상태 관리

`React Native` `TypeScript` `Redux` `Java/Objective-C(Native Bridge)` `Naver Map SDK` `Channel Talk SDK` `BLE` `Jest` `Fastlane` `GitHub Actions`

> 2026-10 뤼튼 이력서 반영: RN 직무에서는 직딩(개인 RN 프로젝트)을 킥고잉 바로 아래 블록으로 둔다. 최근 RN·TypeScript 근거와 0→1 단독 개발 근거. 비버웍스도 동일 적용.

**개인 프로젝트 (직딩) · 2024.01 – 2024.02 · 개인 · React Native 앱 개발자**
직장인 워라밸 앱(iOS·Android) · UX 디자이너 협업 · [GitHub](https://github.com/2sem/zicding-app)
- React Native·TypeScript로 UX 디자이너와 협업해 워라밸 앱을 단독 개발
- 공공데이터 공휴일 API 연동으로 남은 [공휴일 표시](https://medium.com/@toyboy2/%EC%A7%81%EB%94%A9-%EA%B0%9C%EB%B0%9C%EA%B8%B0-%EA%B3%B5%ED%9C%B4%EC%9D%BC-%EC%A1%B0%ED%9A%8C-394715feb9ea?sharedUserId=toyboy2)·연차 계획 제안, [커스텀 캘린더](https://medium.com/@toyboy2/%EC%A7%81%EB%94%A9-%EA%B0%9C%EB%B0%9C%EA%B8%B0-%EC%9E%85%EC%82%AC%EC%9D%BC-%EC%84%A0%ED%83%9D-ffec8c67e36d?sharedUserId=toyboy2) 구현
- Realm 오프라인 우선 로컬 저장소 구성, 오늘 남은 근무시간 실시간 카운트다운 구현
- [개발 과정](https://toyboy2.medium.com/list/ba6efa6fce3c) 기록

`React Native` `TypeScript` `Realm`

**SK AX (계약: 디투엘) · 2024.06 – 2025.10 · 프리랜서 · iOS Developer**
IT 외주 SK 계열 · SKT의 3개 iOS 프로젝트 유지보수 (SWING, T world, AI Layer SDK) · T world MAU 800만
- **AI Layer iOS SDK** 유지보수, Accessibility·UI 개선
- **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 API를 분석 후 서버 개발자에게 수정안 제시로 해결
- Closure 기반 API 호출은 Swift Concurrency, 신규 UI는 Combine으로 점진 전환해 생산성·성능 개선
- Objective-C를 Swift로 점진적 마이그레이션(Extension 단위)
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + [**MR Template**](https://toyboy2.medium.com/automate-your-tasks-with-mr-template-using-gitlab-commands-b1af5c84ce7b) 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파

`Swift` `Objective-C` `SwiftUI` `WidgetKit` `WKWebView` `Combine` `Swift Concurrency` `MVVM` `Unit Test` `Fastlane` `GitLab CI/CD` `Jira`

**에스제이더블유인터내셔널 (시원스쿨) · 2018.06 – 2021.05 · 정규직 · iOS Developer**
국내 1위 온라인 어학 교육 플랫폼
- 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 제로베이스로 자체 앱 단독 개발
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향
- **React Native, Unity, Xamarin** 등 CrossPlatform 선행 학습, 팀 내 교육 및 파일럿 프로젝트 수행
- 전체 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 [**QA 프로세스**](https://toyboy2.medium.com/xcuielement-wait-extension-c6c40cdce458) 구축
- **빅토익보카**: 기획·디자인·Android 앱이 모두 다른 상황에서 기획을 새로 정립해 iOS 버전 개발 / **StoreKit 기반 인앱결제**를 직접 제안·구현해 도서 부록을 넘어 자체 수익화

`Swift` `MVVM` `RxSwift` `AVFoundation` `StoreKit` `XCUITest` `Instruments`

**개인 iOS 개발자 · 2017.02 – 2018.06 · 개인**
- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 **광고 수익 월 $100 이상** 달성(2017.12 기준, 2020년 기준 $800+)
- '관련주식검색기': 푸시 알림 제안 + Node.js·**FCM** 기반 발송 서버 구축으로 **매출 2배** 달성
- ShowNote: 앞선 개발·기획 성과가 **특허 출원**과 2018.07 **10억 원 규모 엔젤 투자 유치(Enable Holdings)** 결정으로 이어짐
- Xcode 업그레이드 후 GitHub Workflow(CD)에서 발생한 [SPM 오류(Package.resolved 손상)를 해결하고 패치 Action으로 제작](https://toyboy2.medium.com/package-resolved-file-is-corrupted-or-malformed-fix-or-delete-the-file-baeb572863fc)

`Swift` `UIKit` `Firebase` `Node.js`

**크레디프 · 2009.08 – 2017.02 · 정규직 · 개발자**
이동통신 3사·공공기관 대상 SI/SM 전문기업
- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결, 신규 언어·플랫폼 선행 연구
- ShowNote: PDF 페이지를 배경으로 렌더링하고 개체를 위에 표시하는 방식 구현, 기획을 전면 개편하며 기존 기획서에 없던 특허 핵심 **'Trigger'** 개념 고안
- ShowNote의 [문서 잠금(Device Lock)](https://toyboy2.medium.com/how-to-lock-your-ios-app-with-device-lock-656f739fe4c6)·[Zip 압축/암호화 저장](https://toyboy2.medium.com/zip-archiving-files-in-ios-app-ade489532066)·[페이지 순서 드래그 변경](https://toyboy2.medium.com/how-to-move-cells-in-your-ios-app-by-dragging-ad83f8ad72e6) 구현
- '누군지다알아'에 수신 이미지 생성 기능을 추가해 2.0 출시, 연락처 [초성 검색](https://toyboy2.medium.com/ios%EC%97%90%EC%84%9C-%EC%B4%88%EC%84%B1%EC%9C%BC%EB%A1%9C-%EC%97%B0%EB%9D%BD%EC%B2%98-%EA%B2%80%EC%83%89%ED%95%98%EA%B8%B0-c2fbdce54383) 기술을 연구해 정리

`C` `C#` `Java` `MySQL` `Oracle` `MSSQL`

#### 외부 활동
- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영(개인 프로젝트 한정)
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- **Flutter · Dart(학습 · 아티클 연재)**: 퇴근길 지하철에서 Dart 학습, Firestore로 카카오톡 채팅 화면을 클론 구현, [Medium 아티클](https://toyboy2.medium.com/list/flutter-c6e656a0db03)로 연재
- [**Medium**](https://toyboy2.medium.com)에 [React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682)·[iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5) 등 기술 Article 다수 발행, Dev Korea Meetup 등 커뮤니티 정기 참여

#### AI 활용 경험
- 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**


#### 학력
**서일대학교** · 2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)

---

### 공고별 조정 허용 범위 (요약)

| 하는 것 | 하지 않는 것 |
|---|---|
| 회사 블록 안에서 불릿 순서 바꾸기 (JD 핵심어가 앞으로) | 불릿 추가·재작성·마스터에 없는 문장 만들기 |
| JD 키워드에 해당하는 구절만 볼드 켜고 끄기 | 섹션 순서 변경, 포지셔닝·소개문 교체 |
| 페이지 초과 시 가장 약한 불릿을 회사 끝에서 제거 | 경력 요약 줄 순서·구성 변경 |
| 외부 활동 불릿 순서 조정 | 클로징(지원 동기·도메인 도전·미션 공감) 문장 추가 |

**알려진 확인 사항**
- "T world MAU 800만"은 SKT 가입자 × 국내 iOS 점유율 × 평균 고객센터 앱 이용률로 본인이 추정한 값이다. 공식 수치가 아니므로 면접에서 산출 근거를 설명할 수 있어야 한다.
- 마스터 원문의 em-dash(—)는 국문 em-dash 금지 원칙에 따라 ":"로 바꿨다(Channel Talk, 빅토익보카, BLE 불릿). 문장 내용은 그대로다.
- 페이지 맞춤 검증 완료(2026-10-15, korean-docx-resume 레이아웃, 두 베이스 모두 A4 2페이지, NotoSansCJKkr). 블록 잘림 방지를 위해 ①은 시원스쿨, ②는 개인 iOS 개발자 블록에 페이지 나눔을 둔다. 불릿 순서를 바꿔 잘림이 생기면 이 지점을 옮긴다.

---

## 1. 포지셔닝 & 소개문 옵션 (참고 전용 · 사용 중단)

> ⚠️ 2026-10 전략 개편으로 공고별 포지셔닝 선택은 폐지. 신규 작업은 섹션 0-1의 베이스 ①②만 사용한다. 아래 A~G는 문장 재료 참고용이며, 특히 **회사별 클로징 문장(지원 동기·도메인 도전·미션 공감)과 "AI 활용 경험 섹션 상단 배치" 옵션은 쓰지 않는다.**

### A. iOS 스페셜리스트 (iOS 전문 조직, 대기업 계열, 안정적 팀 문화)
> iOS를 중심으로 다양한 도메인에서 담당 영역을 단독으로 책임져 왔습니다. UIKit 기반 레거시를 SwiftUI·Swift Concurrency로 전환하는 마이그레이션을 진행했으며, AI 코딩 도구를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다.

변형(플랫폼·도메인 다양성 강조):
> iOS를 중심으로 다양한 플랫폼·도메인을 경험했습니다. 담당 기술을 넘어 좋은 제품을 만들기 위해 되묻고 함께 고민하며, 지식을 적극적으로 공유합니다. AI를 개발 전 과정의 동료로 활용하되, 산출물은 비판적으로 검증하고 책임집니다.

### B. 제품 지향 · 풀스택 배경 모바일 엔지니어 (스타트업, 0→1 조직, 오너십 강조)
> iOS를 중심으로 다양한 플랫폼·도메인에서 담당 영역을 단독으로 책임져 왔습니다. 업무를 스스로 발굴·분할하고 우선순위를 할당해 수행하며, 이슈나 장애 상황에서도 원인을 끝까지 추적해 침착하게 해결합니다. AI 코딩 도구를 동료로 활용하되, 산출물은 비판적으로 검증하고 책임집니다.

확장(초기 단계 프로덕트 리드 경험 강조):
> …초기 단계 프로덕트를 기획부터 출시까지 단독으로 이끈 경험이 다수 있으며, AI 코딩 도구를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다.

확장 + 회사별 클로징(팀 협업 뉘앙스 추가, 미션 공감형):
> iOS를 중심으로 다양한 플랫폼·도메인에서 담당 영역을 단독/팀에서 책임져 왔습니다. 업무를 스스로 발굴·분할하고 우선순위를 할당해 수행하며, 이슈나 장애 상황에서도 원인을 끝까지 추적해 침착하게 해결합니다. 초기 단계 프로덕트를 기획부터 출시까지 단독으로 이끈 경험이 다수 있으며, AI 코딩 도구를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다. AI가 대체할 수 없는 가족의 가치를 함께 [회사명]에서 만들어가고 싶습니다.

B 확장(React Native-lead, RN 중심 JD용 — "iOS를 중심으로" 대신 RN을 먼저 언급):
> React Native와 iOS를 중심으로 다양한 도메인에서 담당 영역을 단독으로 책임져 왔습니다. 업무를 스스로 발굴·분할하고 우선순위를 할당해 수행하며, 이슈나 장애 상황에서도 원인을 끝까지 추적해 침착하게 해결합니다. 초기 단계 프로덕트를 기획부터 출시까지 단독으로 이끈 경험이 다수 있으며, AI 코딩 도구를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다. [제품의 핵심 가치/경험]을 [회사명]에서 함께 만들고 싶습니다.
> 참고: RN 경력이 JD 핵심 요건일 때만 사용. iOS 중심 JD에는 절대 이 변형을 쓰지 않는다(iOS 5년+가 핵심 강점이므로).

### C. 서버/풀스택 배경 강조 (백엔드·풀스택 겸비 요구 공고)
> 풀스택 개발 경험을 바탕으로 모바일(iOS 중심)까지 아우르며, 제품을 기획부터 출시까지 함께 만들어왔습니다. 기술을 넘어 좋은 제품을 만들기 위해 되묻고 함께 고민하며, 지식을 적극적으로 공유합니다. AI를 개발 전 과정의 동료로 활용하되, 산출물은 비판적으로 검증하고 책임집니다.

### D. 전 과정 오너십 · 스타트업 친화 (AI 워크플로우/자동화 역량이 핵심 JD 요건인 공고)
> iOS 설계부터 배포, 운영까지 전 과정을 단독으로 책임져 온 엔지니어입니다. 스타트업을 포함한 다양한 조직에서 아키텍처 결정과 테스트·배포 프로세스를 스스로 구축해왔으며, AI 코딩 도구를 워크플로우에 결합해 개발 속도를 끌어올리되 산출물은 항상 비판적으로 검증하고 책임집니다.

D 확장(O2O·B2C+B2B 혼합 도메인 + 데이터 기반 우선순위 결정):
> iOS 설계부터 배포, 운영까지 전 과정을 단독으로 책임져 온 엔지니어입니다. 공유 모빌리티 O2O를 비롯한 다양한 도메인에서 B2C와 B2B 앱을 함께 다루며 아키텍처 결정과 테스트·배포 프로세스를 스스로 구축했고, 크래시와 CS 지표를 근거로 개선 우선순위를 결정합니다. AI 에이전트는 동료로 대하고, 산출물은 비판적으로 검증하고 책임집니다. 성격이 다른 두 프로덕트를 오가며 사용자에서 매장으로 이어지는 경험을 [회사명]에서 함께 만들고 싶습니다.

D 확장(적극적 의견 제시 + 신기술 선행 실험·공유 뉘앙스):
> iOS를 중심으로 설계부터 배포, 운영까지 단독으로 책임져 본 엔지니어입니다. 문제 해결을 위해 담당 분야를 넘어 적극적으로 의견을 제시하며 함께 고민하고, 새로운 기술/도구를 먼저 실험하고 기존 구성원도 모르는 방법을 찾아 공유해왔습니다. AI 코딩 도구를 워크플로우에 결합해 개발 속도를 끌어올리되, 산출물은 비판적으로 검증하고 책임집니다. 아직 경험하지 못한 [도메인]에서 최상의 [도메인] 사용자 경험을 함께 다듬고 싶습니다.

### E. 안정성/운영 중심 (크래시 대응·성능 최적화·CI/CD 등 서비스 안정성이 핵심 JD인 공고)
> iOS를 중심으로 다양한 도메인과 플랫폼에서 크래시 대응부터 성능 최적화, CI/CD 구축까지 안정적인 서비스 운영을 위한 전 과정을 다뤄왔으며, 처음 사용하는 도구도 업무 효율을 높이는 방법을 연구해서 기존 동료도 모르는 방법을 찾아 공유합니다. 기획과 API Spec에 적극적으로 피드백하고 더 좋은 제품을 위한 방안을 함께 찾고, AI 코딩 에이전트를 동료로 취급하며 결과는 비판적으로 검증합니다.

E 확장(리더십·프로세스 정착 강조 + 도메인 도전 클로징):
> iOS를 중심으로 다양한 도메인과 플랫폼에서 크래시 대응부터 성능 최적화, CI/CD 구축까지 안정적인 서비스 운영을 위한 전 과정을 다뤄왔습니다. 모바일 엔지니어 2~3명을 리드하며 코드 리뷰 프로세스와 기술부채 해소 사이클을 팀에 정착시켰고, 처음 사용하는 도구도 연구해서 기존 동료도 모르는 방법을 찾아 공유해 모두의 효율을 개선했습니다. 기획과 API Spec에 적극적으로 피드백하고 더 좋은 제품을 위한 방안을 함께 찾으며, AI 코딩 에이전트를 동료로 취급하되 결과는 비판적으로 검증합니다. 아직 경험하지 못한 [도메인] 도메인에서, 사용자가 믿고 쓰는 [제품 성격]의 안정성을 [회사명]와 함께 만들어가고 싶습니다.

### F. 영문 · SDK/API 설계 전문성 강조 ("both sides of SDK relationship" — SDK를 직접 만들고 유지보수한 경험 + 외부 SDK를 소비자로서 통합한 경험 둘 다 요구하는 공고)
> I'm an iOS-focused mobile engineer who has owned crash resolution, performance optimization, and CI/CD across multiple domains and platforms. I've worked on both sides of the SDK relationship — maintaining and extending an internal iOS SDK consumed by multiple apps, and integrating third-party SDKs into production apps — which shapes how I think about API design, versioning, and developer experience. I dig into unfamiliar tools to find efficiency gains, give direct feedback on specs and API design to help ship better products, and treat AI coding agents as collaborators whose output I critically verify.

### G. 도메인 다양성 · B2C/B2B 경험 · 기술부채 해결 중심 (레거시/기술부채가 많은 전통 산업·교육 기업 등)
> iOS를 중심으로 공유 모빌리티, 어학, 통신사 도메인에서 다양한 플랫폼의 B2C·B2B 프로젝트를 수행했습니다. 개발 환경 제약에 포기하지 않고 점진적인 전환으로 기술부채를 해결하며, 도구의 기능을 연구해 모두의 업무를 효율화합니다. 담당 기술을 넘어 좋은 제품을 만들기 위해 되물으며 함께 고민하고, AI를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다.

> 참고: 이 버전은 경력 요약 줄("iOS 5년+..." 등)을 아예 생략함 — 소개문 자체에 도메인·B2C/B2B 정보가 충분히 들어있어 요약 줄 없이도 정보 밀도가 유지되는 경우 사용 가능한 구조.

**구조 패턴 — 이름 아래 타이틀 태그라인**: 영문 이력서는 이름 바로 아래 한 줄로 목표 롤/전문분야를 명시하는 태그라인을 추가할 수 있음(예: "Senior iOS Developer · Mobile SDK"). JD의 타이틀·핵심 전문분야에 맞춰 매번 교체. 국문 버전에는 아직 적용 사례 없음(필요 시 확장 가능).

**구조 패턴 — 회사별 클로징 문장 (특정 포지셔닝 전용 아님, 범용 패턴)**: 소개문 마지막에 지원 회사·도메인에 대한 지원 동기/미션 공감을 한 줄 추가하는 구조. 새로운 도메인 도전이나 회사 미션 공감을 어필해야 하는 공고에 사용. 회사명·도메인명은 매번 해당 공고에 맞게 교체.
- 도메인 도전형: "가까운 []에서 아직 경험하지 못한 핀테크 분야에 도전할 수 있는 기회를 갖고 싶습니다"
- 미션 공감형: "AI가 대체할 수 없는 가족의 가치를 []에서 함께 만들어가고 싶습니다"
- 제품경험 공감형: "소리가 사람의 상태를 바꾸는 경험을 []에서 함께 만들고 싶습니다"

**주의**: 소개문처럼 짧고 핵심어 비중이 높은 문장은 볼드를 넣지 않는 편이 낫다(다 강조되면 강조 효과 소멸).

**구조 옵션**: JD가 AI 활용/자동화 역량을 우대사항 상단에 명시한 공고라면, "AI 활용 경험" 섹션을 소개문 바로 다음(주요 경력보다 앞)에 배치하는 구조도 가능.

---

### H. 뤼튼 제출본 소개문 (2026-10 · 참고 전용 · 기술 경험의 폭 + 리드 + 프로세스 개선형)
서버 개발로 시작해 2015년부터 Mobile 분야에 도전해왔습니다. Presentation 앱을 개발하면서 PDF 렌더링을, 외국어 강의 수강 앱을 신규 개발하면서 영상 재생 기술을 경험했고, 앱이 중요한 공유 모빌리티 서비스를 개선하면서 BLE 기술을, 통신사 앱 운영 과정에서 Webview 기반 하이브리드 앱의 구조를 파악했습니다. 모바일 엔지니어 2~3명을 리드하며 코드 리뷰 프로세스와 기술부채 해소 사이클을 팀에 정착시켰고, 배포 프로세스 개선으로 개발 업무를 가속했습니다. 개인 앱에 새로운 기술을 실험해서 얻은 노하우를 전파하고, 제도와 도구의 병목을 연구하여 업무 프로세스를 개선합니다.

> 마스터 고정 소개문(베이스 ①②)과 다르다. 공고별 맞춤 요청 시에만 사용. 비버웍스는 AI 활용 문장이 필요해 베이스 ② 고정 소개문을 썼다.

## 2. 경력 요약 라인 (참고 전용 · 고정형은 섹션 0-1)

> ⚠️ 요약 줄은 섹션 0-1의 한 줄로 고정. 공고별로 순서를 바꾸거나 생략하지 않는다. 아래 변형은 사용 중단.

**(구) 경력 15년+ (iOS 5년+ · 모바일 8년+)**

- 서버/풀스택 강조 공고: **경력 15년+ (모바일 8년+ · 서버/풀스택 7년+)**
- iOS만 강조: **iOS 5년+** 볼드, 뒤에 (모바일 8년+ · 경력 15년+)는 비강조로 병기. "경력 15년+" 대신 "**총 경력** 15년+"로 표기해도 무방
- 축약형(공간 제약 있거나 총경력보다 iOS/모바일 경력에 집중하고 싶을 때): **iOS 5년+ (모바일 8년+)** — "경력 15년+" 생략 (제제미미 버전 사례)
- 완전 생략형: 소개문에 도메인·B2C/B2B 정보가 충분히 담겨 있으면 경력요약 줄 자체를 생략 가능
- 순서 변형(크로스플랫폼/모바일 경험을 iOS보다 앞세우고 싶을 때): **모바일 8년+ (iOS 5년+)** · 총 경력 15년+
- RN 분리 명시형(React Native 경력 자체가 JD 핵심 요건일 때): **모바일 8년+ (iOS 5년+ · React Native 2년+) · 총 경력 15년+** — React Native 경력은 킥고잉 재직 기간(2021.06–2023.10, 약 2년+) 기준
- ❌ 금지 표현: "iOS 9년+" (사실 오류 — 킥고잉 2년+는 React Native, iOS 아님)

---

## 3. 경력 — 회사별 불릿 뱅크
> 불릿은 짧고 명확하게 유지. 배경 설명·근거·서사는 각 회사 하단 "상세 배경(Full Story)"에 따로 보관 — 면접 대비나 특별히 깊이 있게 서술해야 하는 공고에서만 참고.
> JD 요건 => 경험. 베이스 ①②가 쓰는 불릿 원문이 여기 있다. 불릿 추가·재작성 금지, 순서·볼드만 조정.

### 3-1. SK AX (계약: 디투엘) — IT 외주 SK 계열
**2024.06 – 2025.10 (1년+) · iOS Developer**
IT 외주 SK 계열 · SKT의 3개 iOS 프로젝트 유지보수 (SWING, T world, AI Layer SDK)

**T world 관련 불릿**
- Swift Concurrency, Combine => Closure 기반 API 호출은 Swift Concurrency, 신규 UI는 Combine으로 점진 전환해 생산성·성능 개선
- SwiftUI, Widget,협업,문제해결력 => 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 API를 분석 후 서버 개발자에게 수정안 제시로 해결
- Unit Test => 신규 API 연동 추가 시 **Unit Test 작성**으로 예외 사항 검증
- Webview, Crash, Crashlytics => **Crashlytics**로 확인한 **WKWebView** Delegate 강제 언래핑 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결 (2026-10 비버웍스: 모니터링 도구 명시 목적의 변형. 원문은 아래)
- Webview, Crash => **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결
- 대량 트래픽 => 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열(Queue) 기능** 구현으로 트래픽 급증 구간 안정성 확보
- Webview, SDK 제공자 => **AI Layer iOS SDK** 유지보수, Accessibility·UI 개선
- FE/BE 협업 => FE(프론트엔드) 이슈 발생 시 원인 파악을 위한 디버깅 지원 수행

**SWING 관련 불릿**
- 레거시, Objective-C, 마이그레이션 => Objective-C를 Swift로 점진적 마이그레이션(Extension 단위)
- 레거시, 마이그레이션 => CocoaPods 종료 대비 라이브러리별 SPM 전환 진행

**프로세스 개선 불릿**
- 개발 문화 개선 => 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + [**MR Template**](https://toyboy2.medium.com/automate-your-tasks-with-mr-template-using-gitlab-commands-b1af5c84ce7b) 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파
- CI/CD, Fastlane => Fastlane으로 빌드→**TestFlight**→Slack IPA 업로드 자동화

**리드/코칭**
- 리딩 경험 => 주니어 엔지니어 2명을 Subtask 단위 업무 할당·분할 위임 방식으로 코칭

**스킬 태그**: `Swift` `SwiftUI` `UIKit` `Objective-C` `WidgetKit` `Combine` `Swift Concurrency` `Unit Test` `XCTest` `SPM` `CocoaPods` `Firebase` `GitLab CI/CD` `Fastlane` `Jira` `Confluence` `WKWebView` `Storyboard` `MVVM` `RxSwift`

<details>
<summary>상세 배경 (Full Story) — SK AX</summary>

- **고용 구조**: SKT → SK AX(SK 계열사) → 계약 업체(디투엘) → 프리랜서, 4단계. "SKT 상주"·"SKT 매니저와 직접 협업" 표현은 사실 오류이므로 금지. 실제로는 SK AX 매니저와 협업.
- **프로젝트 성격**: SWING = WebView 기반 Hybrid 앱, SKT 대리점 대상 Enterprise B2B. T world = SKT 고객센터 B2C 앱. AI Layer SDK = 네이티브 화면에서 WebView로 AI 서비스를 호스팅하는 브릿지 SDK, 2개 SKT 앱(T world, T membership)이 소비.
- **크래시 해결 과정**: Firebase Crashlytics 집계 기준 주간 5,000건 이상. 전임자 PR의 가설로는 동일 크래시가 재현되지 않아, 코드를 직접 따라가며 동일한 Crash를 발생시켜 원인 특정(WKWebView Delegate 강제 언래핑).
- **위젯 문제 해결 과정**: '고객보호비밀번호'라는 시간 제한 보안 기능을 설정한 사용자가 비밀번호 입력 후에도 위젯을 이용하지 못하던 문제. 웹에서 비밀번호를 받기 때문에 앱에서 제어 불가 해결하려면 고객이 비밀번호 입력한 후 웹에서 받은 Session을 앱에서 사용해야됨. 위젯용 별도 로그인 API에서 받은 값을 후속 위젯 정보 조회 API에 사용해야 하는데 세션을 공유하면 그 과정을 건너뛰어서 획득 불가. 앱-위젯 간 Cookie Storage 공유로 세션 재사용 + 위젯 API 분석 후 서버 개발자에게 수정 방안 제시로 해결.
- **AI Layer SDK 상세**: SDK UI에서 이전 화면에 Accessibility Focus가 남아있는 등, Splah 화면 등 UI 개선 적용.
- T world: Swift, RxSwift + MVVM, SWING: Swift, Objective-C
- **T world MAU 800만**: 본인 추정치(SKT 가입자 × 국내 iOS 점유율 × 평균 고객센터 앱 이용률). 공식 수치 아님, 면접에서 산출 근거 설명 필요.

</details>

---

### 3-2. 올룰로 (킥고잉) — 국내 최초 공유 킥보드(모빌리티) 서비스
**2021.06 – 2023.10 (2년+) · 정규직 · App Developer → Mobile Tech Lead**
기술 스택: **React Native** — iOS 네이티브 경력 아님, 모바일 경력으로만 카운트

**개발자로서 · 2021.06 – 2022.03**
- Native 경험 => Naver Map SDK **Native Bridge**에 [축척 계산 로직 추가](https://github.com/team-olulo/react-native-naver-map/pull/7)해 지도 자동 Zoom(길안내) 구현
- 리서치, UX => Naver Place·Daum Map 분석해 앱내 경로 표시 기능 구현, 대리운전기사 사용자층 긍정 평가
- 성능 개선 경험 => 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(+위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- BLE, O2O, 지표 => BLE 통신 로직 최적화: Library 옵션 및 제조사 펌웨어 조정 후 스캔·연결 소요 시간 지표화로 개선 검증
- BLE, 빌드, 외부 라이브러리 수정 => react-native-ble-plx가 Xcode 13과 호환되는 Pod을 참조하지 않아 발생한 빌드 오류를 [Pod과 라이브러리를 fork해 CocoaPods·npm에 배포하는 방식으로 해결](https://toyboy2.medium.com/react-native-ble-plx-xcode-13-troubleshootings-dca3f793b1e0)
- 지표 => Amplitude로 사용자 경험 데이터 수집·기능 개선 성과 측정
- Unit Test => Jest 기반 Unit 테스트 보강, [실행 Parameter 조정과 캐시 적용](https://medium.com/@toyboy2/how-to-speed-up-jest-8c8f5d40f4f9)으로 테스트 시간 **37초 → 27초** 단축
- 다국어, Localization => 외국어 지원 프로젝트에서 [다국어 대응 구축](https://toyboy2.medium.com/supporting-multi-language-in-react-native-applications-8bf4ddc8a8ef), [Android 언어 설정 관련 오픈소스 기여](https://toyboy2.medium.com/react-native-android-per-app-language-settings-5f9d4a29e9d2)
- Android => Native Bridge의 Manifest 수정으로 **Android 12 권한 정책** 대응
- Android, Amplitude, 로그 => Install Referrer 상용 환경 동작과 BLE 개선 효과를 Amplitude Log로 검증
- SDK 소비자, 문제 해결력 => **Channel Talk(외부 CX SDK) 통합**: [채팅 상담](https://youtube.com/shorts/tC-np8ShcZU) 기능 추가, 통합 후 알림 분류 메소드에서 발생한 **Crash**를 제조사에 제보하고 [수정안 PR 제출](https://github.com/channel-io/react-native-channel-io/pull/107)

**CI/CD 관련 불릿**
- Fastlane => iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**
- DX, 개발 환경 개선, Android => Android 배포를 AWS S3 링크 공유 방식에서 [**APK Slack 직접 업로드**](https://toyboy2.medium.com/how-to-distribute-apk-to-slack-automatically-1b3aa992177e)로 개선해 테스트 단계 단축
- 개발 환경 개선, 성능 개선 => [빌드 캐시 적용](https://toyboy2.medium.com/how-to-deploy-react-native-app-all-in-one-click-part1-54362deaeda2)으로 **배포 소요 시간 50% 감축**
- 개발 환경 개선, Android, 빌드 => Android Build-tools 31 이후 dx를 찾지 못해 로컬 빌드가 실패하던 문제를 **d8 링크 생성 Gradle 스크립트**로 해결하고 직접 등록한 [공개 이슈](https://github.com/channel-io/react-native-channel-io/issues/109)에 해결 방법 공유
- 개발 환경 개선, QA, Android => 이전 버전과 동시에 설치할 수 있도록 QA 버전 '테스트킥'을 [**flavor로 분리해 배포**](https://toyboy2.medium.com/how-to-split-android-project-for-qa-version-1128b2bce7bb)
- 오픈소스, 크래시, 외부 라이브러리 수정 => **react-native-vision-camera**의 Android 빌드 오류(Unresolved reference: resolveView)를 메서드 이름 기반 동적 호출로 바꿔 해결하고 [오픈소스 PR 제출](https://github.com/mrousavy/react-native-vision-camera/pull/1318)

**상태 관리**
- 상태 관리 => **Redux**로 앱 전역 상태 관리

**리드로서 · 2022.04 – 2023.10**
- 개발 문화 => 엔지니어 2~3명 리드, **1일 1시간** [기술부채 해소 시간 도입](https://toyboy2.medium.com/%EC%9E%91%EC%9D%80-%EA%B2%83%EB%B6%80%ED%84%B0-%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EA%B2%83%EB%B6%80%ED%84%B0-%EB%B0%94%EA%BF%94%EB%82%98%EA%B0%80%EA%B8%B0-ff21ea4fb6c2) → [**React Native 점진적 업그레이드**](https://medium.com/@toyboy2/migration-react-native-from-0-65-to-0-68-troubleshooting-guide-0a8a7401c581) 등 기술부채 해소
- 개발 문화 => 월간 모바일 개발자 회의 운영, 기술 부채 선정 및 도전 과제 도출
- 협업 => UX팀과 협의해 Figma-소스 Asset 이름 일치, 디자인 부서 커뮤니케이션·구현 비용 절감
- 업무 프로세스 개선 => PR Template·Jira Workflow로 코드 리뷰·업무 프로세스 표준화

**스킬 태그**: `React Native` `TypeScript` `Redux` `Java/Objective-C(Native Bridge)` `Java/Kotlin(Native Bridge)` `Naver Map SDK` `Amplitude` `Jest` `BLE` `Channel Talk SDK` `Fastlane` `GitHub` `GitHub Actions` `GitLab CI/CD`

<details>
<summary>상세 배경 (Full Story) — 킥고잉</summary>

- **데이터 사용량 절감 정확한 의미**: 호출 횟수 1/4 감소(4회→1회) = 데이터 사용량 최소 75% 절감. 캐시 자체의 추가 절감 효과는 별도 측정하지 않아 "최소"로 표기. 캐싱·API 호출 최적화·길안내 구현은 각각 별개 작업이므로 하나의 인과관계로 묶지 말 것.
- **Channel Talk PR 근거**: [react-native-channel-io #107](https://github.com/channel-io/react-native-channel-io/pull/107) (2023-05-11, 본인 GitHub 계정 커밋). Android 네이티브 브릿지 `ParseUtils.toPushNotification`이 값의 타입을 검사하기 전에 `getString`을 호출해, `google.ttl` 같은 숫자 값이 들어오면 `UnexpectedNativeTypeException`이 나던 문제. 타입 검사 후에 문자열만 읽도록 수정. 같은 날 제조사가 Boolean·Number·String별 변환을 포함한 자체 수정 #108을 병합했고 #107은 병합되지 않음. 이력서에는 "제보 및 수정안 PR 제출"로만 쓰고 병합·채택으로 쓰지 않는다. Java(Android) 브릿지 건이므로 iOS 네이티브 경험으로 쓰지 않는다.
- **Android 빌드 dx→d8 근거**: [react-native-channel-io #109](https://github.com/channel-io/react-native-channel-io/issues/109) "Build-tool 31.0.0 is missing DX". Build-tools 31 이후에는 dx가 없고 d8만 있는데 빌드가 dx를 찾아 실패. app/build.gradle의 `migrateToDx()`가 build-tools 폴더에 dx→d8, lib/dx.jar→lib/d8.jar 심볼릭 링크(`ln -sf`)를 생성. 처음 도입했다가 업그레이드로 해결돼 삭제했고, SDK 33으로 올리니 재발해 다시 추가. `ln` 명령이 Windows에서 동작하지 않아 `os.name`이 linux일 때만 실행. 작은 우회책이므로 "원인(dx 탐색)을 파악해 링크로 해결"까지만 쓰고 과장하지 않는다. 본인이 직접 등록한 이슈이며 재직 중(킥고잉) 로컬 빌드에서 발생한 오류였다. CI 문제가 아니므로 "CI 장애 해결"로 쓰지 않는다. 이슈에 응답이나 반영은 없었으므로 "채택"·"반영"으로 쓰지 않는다.
- **vision-camera PR 근거**: [react-native-vision-camera #1318](https://github.com/mrousavy/react-native-vision-camera/pull/1318) (2022-11-03 작성, Closed). Android `Unresolved reference: resolveView`(compileDebugKotlin 실패, 이슈 #1012)를 `resolveView`를 메서드 이름으로 찾아 동적 호출하고 실패 시 `findViewById`로 대체하도록 수정. 메인테이너가 "V3에서 이미 수정된 것 같다"며 2023-09-30에 닫았고 병합은 되지 않음. 같은 문제를 겪는 사용자 2명이 댓글을 남김. 이력서에는 "PR 제출"까지만 쓰고 병합으로 쓰지 않는다. 글: [unresolved-reference-resolveview](https://toyboy2.medium.com/unresolved-reference-resolveview-6bc0c41c12fd)
- **QA flavor '테스트킥'**: 이전 버전 APK와 동시에 설치할 수 있도록 QA 빌드를 별도 flavor로 분리. 글: [how-to-split-android-project-for-qa-version](https://toyboy2.medium.com/how-to-split-android-project-for-qa-version-1128b2bce7bb)
- **ble-plx Xcode 13**: RN 라이브러리가 Xcode 13과 호환되는 Pod을 참조하지 않아, Pod을 fork하고 그 Pod을 바라보는 라이브러리도 fork해 CocoaPods·npm에 배포해 사용. 글: [react-native-ble-plx-xcode-13-troubleshootings](https://toyboy2.medium.com/react-native-ble-plx-xcode-13-troubleshootings-dca3f793b1e0)
- **GitHub Actions 워크플로우 테스트**: all-in-one-click 배포 구축·캐시 적용 연구 중 워크플로우 테스트를 많이 돌려 비용이 늘었음(글에는 비용 언급 없음). 필요 시 면접 소재.
- **불릿 없는 근거 글(필요 시 불릿화)**: Jest 복합 조건 테스트 시나리오 [part1](https://toyboy2.medium.com/jest-complex-test-case-part1-3a165afdbbe9), 백그라운드 위치 추적 오픈소스 수정용 [submodule 정리](https://toyboy2.medium.com/how-to-modify-submodule-of-forked-repository-2bc59d9872db), Gradle [정규식 빌드 오류](https://toyboy2.medium.com/invalid-regular-expression-quantifier-has-nothing-to-repeat-4e596fca9569), 동네지도 [드래그 Gesture](https://toyboy2.medium.com/resizing-react-native-view-with-pan-gesture-2e19db93238e), [Flipper](https://toyboy2.medium.com/debugging-react-native-with-flipper-262da7bcadc7) 성능 분석, 마케팅 알림 [뱃지 처리](https://medium.com/@toyboy2/setting-ios-app-badge-using-in-react-native-and-user-defaults-a4184ec6c402), 같은 Repo 협업 [3가지 습관](https://toyboy2.medium.com/3-habits-made-me-co-working-well-in-same-repository-first-time-dbbd01d6c455)
- **SPM 오류 글(개인 앱)**: 본인 앱의 GitHub Workflow CD에서 Xcode 업그레이드 후 발생한 Package.resolved 손상 오류를 해결하고 패치 Action을 만들어 공유, 감사 인사를 많이 받음(본인 진술). SK AX 근거 아님(SK는 GitHub 미사용).
- **Amplitude는 기 구축된 도구를 "활용"한 것**이지 "구축"한 게 아님 — 주체 오류 주의.
- **Channel Talk 스토리 상세**: SDK가 제공한 알림 분류 메소드에서 발생한 크래시를 직접 원인 분석해 벤더의 인앱 지원 채널로 리포트, 업스트림 수정안(fix)까지 제출. ⭐ SDK를 소비자(consumer)로서 다뤄본 경험 — SK AX AI Layer SDK(제공자 측 경험)와 짝을 이루는 "양쪽 SDK 관계" 핵심 사례.
- **CI/CD 정확한 표현**: "구축"보다 "통합/개선"이 정확. iOS/Android가 따로 관리되던 걸 Fastlane 하나로 합친 것이 핵심 포인트. 배포시간 50% 감축은 실측 수치.
- **월간 회의 상세**: 노하우·신기술 공유, 기술적 도전 과제 도출과 도전자 선정까지 포함.

</details>

---

### 3-3. 에스제이더블유인터내셔널 (시원스쿨) — 국내 1위 온라인 어학 교육 플랫폼
**2018.06 – 2021.05 (3년) · 정규직 · iOS Developer**

**프로젝트 재정립·개발**
- 리딩, 오너십 => 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 제로베이스로 자체 앱 단독 개발
- 기획, 오너십 => 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향

**아키텍처/라이브러리**
- MVVM => RxSwift 도입과 함께 **MVVM 아키텍처** 적용
- 모듈화, 라이브러리 => AVFoundation 기반 공용 영상 플레이어 라이브러리 개발해서 다른 앱과 공유
- 재사용, 확장 => 최소화·최대화 기능을 전 화면에서 **재사용** 가능하도록 기반 ViewController 설계·구현
- Appstore 리뷰, 오너십 => App **Store 리뷰**에 **직접 답변**하고, 기획이 불필요한 개선 사항은 직접 조치

**연동/인증**
- 소셜 로그인, SNS, 외부 SDK => **SNS 소셜 로그인**(Google·Kakao·Facebook·Naver) 연동 (2026-10 사용자 확인)

**테스트/안정성**
- UI Test, QA 프로세스 => 전체 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 [**QA 프로세스**](https://toyboy2.medium.com/xcuielement-wait-extension-c6c40cdce458) 구축
- 메모리 => **Instruments**로 메모리 릭 탐지, Memory Graph로 순환 참조 해결
- 보안 => 화면 녹화 방지·탈옥 감지 등 콘텐츠 보호 기능 구현
- 학습력, 신기술 적극 => **React Native, Unity, Xamarin** 등 CrossPlatform 선행 학습, 팀 내 교육 및 파일럿 프로젝트 수행

**인프라**
- Fastlane => 유휴 iMac을 이용하여 Fastlane 기반 CI/CD 인프라 구축

**스킬 태그**: `Swift` `MVVM` `RxSwift` `AVFoundation` `XCUITest` `Instruments` `Fastlane` `Firebase` `Crashlytics` `SNS Login` `Storyboard`

#### 암기고래 (계열사 앱)
- Objective-C, 마이그레이션, 리팩토링 => Objective-C로 된 앱을 인수해 Swift로 점진 마이그레이션, 레거시 리팩토링

`Objective-C` `Swift`

#### 빅토익보카
- 기획, 오너십 => 기획·디자인·Android 앱이 모두 다른 상황에서 기획을 새로 정립해 iOS 버전 개발
- 결제 => **StoreKit 기반 인앱결제**를 직접 제안·구현해 도서 부록을 넘어 자체 수익화
- 백그라운드 재생(자동 단어 넘김) 기능 제안·구현, Android에도 적용 유도
- 라이브러리 => 시원스쿨과 플레이어 라이브러리 공유

`Swift` `StoreKit` `AVFoundation`

<details>
<summary>상세 배경 (Full Story) — 시원스쿨</summary>

- 합류 당시 담당자가 반복 퇴사하는 등 어려운 상황 속에서도 기획/서버와 조율해서 프로젝트 완수.
- MVVM 적용 목적: 화면 단위 상태 관리.
- ViewController 재사용 설계는 프로그래매틱 UI로 구현(Storyboard 아님).
- QA 프로세스 상세: 민원이 발생했는데 관련 부서가 그럴리가 없다고 부인해서, 민원 발생 전에 먼저 탐지하기 위해 프로세스 구축, 검출된 재생 실패 콘텐츠 ID를 담당 부서에 전달.
- App Store 리뷰 응대 예시: 무선 키보드 지원처럼 별도 기획이 필요 없는 사항은 즉시 조치.

</details>

---

### 3-4. 개인 iOS 개발자
**2017.02 – 2018.06 (1년+) · 개인**

> ⚠️ 시점 주의: 이 섹션(날짜 범위 있음)에는 **당시 실제로 있었던 내용만** 기재.
> 최근 활동(SwiftUI 전환, Tuist 적용 등)은 **외부 활동/AI 활용 경험**(날짜 없는 섹션)에 배치.

**개인 iOS 앱 (일반)**
- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 **광고 수익 월 $100 이상** 달성(2017.12 기준, 2020년 기준 $800+)
- 오너십 => '관련주식검색기': 푸시 알림 제안 + Node.js·**FCM** 기반 발송 서버 구축으로 **매출 2배** 달성
- '문자행동'(국회의원 연락처·SNS 조회 앱): SBS 등 언론 인터뷰
- 다국어, 현지화 => 파파고 API 기반 번역 앱, 관광공사 API 기반 국내 여행 가이드 앱 개발
- A/B 테스트 => 공인중개사 요약집 앱: 팝업 디자인 4가지 **Firebase A/B 테스트**로 비교 검증
- 아키텍쳐 => 앱 업데이트 없이 콘텐츠 갱신이 필요한 앱(공인중개사요약집 등)은 별도 서버 없이 **Google Drive Xlsx를 원격 데이터소스**로 활용하는 경량 아키텍처 구축

**ShowNote 후속 (투자 유치는 퇴사 후 개인 기간에 받음. 개발·기획 개편 불릿은 3-5 크레디프로 이동)**
- ShowNote, 단독 개발, 유지보수, 특허, 투자 => ShowNote: 재직 중 단독 개발한 앱을 퇴사 후에도 투자 유치 시점까지 유지보수, 특허 핵심 **'Trigger'** 아이디어를 직접 고안해 **특허 출원**과 2018.07 **10억 원 규모 엔젤 투자 유치(Enable Holdings)** 에 기여 (2026-10 비버웍스 확정 표현. 인과 모호 해소용)
- **사실 관계(본인 확인 2026-10)**: ShowNote는 본인이 단독 개발. 투자는 아이디어를 보유한 업체가 받았고, 본인은 투자 유치 시점까지 유지보수했으며 특허 핵심 아이디어(Trigger)는 본인이 고안. "투자를 직접 유치"로 읽히지 않게 쓴다. 아래 구 문장은 인과가 모호해 쓰지 않는다.
- 앞선 개발·기획 성과가 **특허 출원**과 2018.07 **10억 원 규모 엔젤 투자 유치(Enable Holdings)** 결정으로 이어짐 (시원스쿨 앱과 무관, 크레디프 재직 중 ShowNote 성과. 투자 확정 시점은 2018.07로 본인 확인)

**스킬 태그**: `Swift` `UIKit` `Storyboard` `CocoaPods` `Firebase` `PDF Rendering` `PDFKit` `Node.js` `Google Drive API`

<details>
<summary>상세 배경 (Full Story) — 개인 iOS 개발자</summary>

- 9-6 근무 형태로 집에서 개인 앱 다수를 기획·개발·운영.
- 수익 수치: $100+는 2017.12 기준(이 재직 기간 내 사실). $800+는 2020년 마지막 확인 기준으로, 시점 범위 밖이지만 각 수치 옆에 연도를 명시하면 같은 문장에 병기 가능. 연도 라벨 없이 섞어 쓰거나 $800을 이 재직 기간 성과처럼 서술하는 것은 금지.

</details>

---

### 3-5. 크레디프 — 이동통신 3사·공공기관 대상 SI/SM 전문기업
**2009.08 – 2017.02 (7년+) · 정규직 · 개발자**

- **모바일 경력 인정 메모(2026-10 사용자)**: 크레디프 기간을 모바일 경력으로 인정받으려면 iOS/Android 네이티브 **구현 내용**(ShowNote PDF·Trigger·Device Lock·Zip·드래그, 초성 검색, Beacon AIDL SDK)이 본문에 있어야 한다. 모바일 경력을 강조하는 공고에서는 이 구현 불릿을 삭제하지 않는다.
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결, 신규 언어·플랫폼 선행 연구
- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- Client => 판교 R&D센터 IBS/FMS 클라이언트 개발을 위해 사내 C# 교육, Core Framework 개발
- Java => KT 유전체 클라우드(gStorage) 크로스플랫폼 재구축
- WIFI 실내측위 (연구)플랫폼 풀스택 단독 개발
- ShowNote, 특허, 기획 => ShowNote: PDF 페이지를 배경으로 렌더링하고 개체를 위에 표시하는 방식 구현, 기획을 전면 개편하며 기존 기획서에 없던 특허 핵심 **'Trigger'** 개념 고안
- ShowNote, 기능 구현 => ShowNote의 [문서 잠금(Device Lock)](https://toyboy2.medium.com/how-to-lock-your-ios-app-with-device-lock-656f739fe4c6)·[Zip 압축/암호화 저장](https://toyboy2.medium.com/zip-archiving-files-in-ios-app-ade489532066)·[페이지 순서 드래그 변경](https://toyboy2.medium.com/how-to-move-cells-in-your-ios-app-by-dragging-ad83f8ad72e6) 구현
- 누군지다알아, 연락처, 검색 => '누군지다알아'에 수신 이미지 생성 기능을 추가해 2.0 출시, 연락처 [초성 검색](https://toyboy2.medium.com/ios%EC%97%90%EC%84%9C-%EC%B4%88%EC%84%B1%EC%9C%BC%EB%A1%9C-%EC%97%B0%EB%9D%BD%EC%B2%98-%EA%B2%80%EC%83%89%ED%95%98%EA%B8%B0-c2fbdce54383) 기술을 연구해 정리
- O2O, Bluetooth => 저전력 **Beacon** 구매자 대상 SKT **O2O Android SDK**를 JNI 대신 **AIDL** 기반으로 개발

> ⚠️ "RESTful/자체 프로토콜 기반 API를 설계·구현" 문장은 서버·풀스택 강조 공고(지바이크 등)에서만 본문 사용, 그 외엔 스킬 태그로만 노출.

**스킬 태그**: `C` `C#` `Java` `WPF` `Delphi` `Python` `RESTful API` `MySQL` `Oracle` `MSSQL` `PostgreSQL` `AIDL` `Beacon`

---
### 개인 프로젝트 — 직딩 (2024.01 – 2024.02 · React Native · 2026-10 사용자 확인, 출처 sides/side-projects.toon)
- React Native·TypeScript로 UX 디자이너와 협업해 워라밸 앱을 단독 개발
- 공공데이터 공휴일 API 연동으로 남은 공휴일 표시·연차 계획 제안, 커스텀 캘린더 구현
- Realm 오프라인 우선 로컬 저장소 구성, 오늘 남은 근무시간 실시간 카운트다운 구현
- 킥고잉 기술부채 해소 결과: React Native **0.71** 업그레이드 (2026-10 사용자 확인)

## 4. AI 활용 경험 (통합 — 날짜 무관, 자유 배치 가능)

> 구조 옵션: 별도 섹션 대신, 관련성이 가장 큰 회사 블록(주로 SK AX) 안에 해당 불릿을 직접 내장하는 구조도 가능(헤렌 버전 사례 — Ollama MR 리뷰 불릿을 SK AX 불릿 리스트 안에 배치). JD에 Storyboard 있는 경우만 Storyboard 언급

- SK AX에서 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원
- 개인 앱 유지보수를 위해 **ios-developer·designer·marketer·cs·reporter 에이전트로 팀을 구성**하고, CLAUDE.md에 역할·위임 규칙·QA 게이트를 정의해 메인 에이전트가 목표를 나눠 위임하고 결과를 검토하는 **멀티 에이전트 오케스트레이션** 운영 (cs가 피드백 수집 → reporter가 이슈 작성 → 검토 후 담당 에이전트에 배정) (2026-10 사용자 확인: 오케스트레이션 경험, 비버웍스 JD 요구. 에이전트 구성은 사용자 진술과 개인 앱 CLAUDE.md 팀 구조 기준)
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션  Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- Youtube 영상 편집을 위해 유료 버전 전용 기능인 Davinci Resolve MCP를 무료 버전 [davinci-resolve-lite-mcp](https://github.com/2sem/davinci-resolve-lite-mcp)으로 직접 구축, 장면 분류·편집 방법·검증 단계를 Skill과 Script로 분리해 신뢰성 향상

---

## 5. 외부 활동 (통합 — 날짜 무관)

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영(상용/실무 프로젝트 적용 아님, 개인 프로젝트 한정). 게임도우미는 **Clean Architecture**도 함께 적용(SwiftUI 전환 시, 게임도우미 한정)
- 위 경험을 [Article](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)로 작성해 Tuist CEO Pedro Piñera와 LinkedIn으로 직접 연결, [한국어 페이지 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65)에 기여(크리스마스 선물로 Tuist 굿즈·친필 편지 수령). 이후 한국 개발자와의 소통을 원한 CEO를 운영 중인 **Tuist 노하우 공유 오픈채팅방**에 초대
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표(GitHub Repo 연동, Tuist 문의 방법 포함), Tuist CEO 축전 영상 수령
- **TCA(The Composable Architecture)**: 미출시 개인 프로젝트에 Settings·Modal·SwiftData 연동 등을 적용, 관련 경험을 [Medium 아티클](https://toyboy2.medium.com/list/tca-8b33da822cae)로 게재. ⚠️ 이력서 본문에는 프로젝트로 기재하지 않고 **스킬 태그로만** 노출(의도된 설계). 면접에서는 미출시 개인 프로젝트임을 솔직히 답변
- Dev Korea Meetup 등 커뮤니티 정기 참여, [**Medium**](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682)·TCA 등 기술 Article 다수 발행
- **Flutter · Dart(학습 · 아티클 연재)**: 퇴근길 지하철에서 Dart 학습, Firestore로 카카오톡 채팅 화면을 클론 구현, [Medium 아티클](https://toyboy2.medium.com/list/flutter-c6e656a0db03)로 연재. ⚠️ 실무/상용 프로젝트 경험 아님 — 이력서 본문에는 이 스코프 명시 문구와 함께만 노출, 스킬 태그도 반드시 "(학습)" 등 스코프 표기 병기
- **TensorFlow(주말 외부 교육 수강)**: 실무 프로젝트 경험 아님 — 언급 시 반드시 "교육 수강" 스코프 명시

---

## 6. 스킬 마스터 리스트 (JD 우선순위에 맞춰 배열: 언어 → UI → 비동기 → 아키텍처 → 빌드자동화 → 테스팅)

```
Swift · SwiftUI · UIKit · Objective-C · Java/Kotlin(Native Bridge, 킥고잉 한정)
Combine · Swift Concurrency(async/await)
MVVM · Clean Architecture(게임도우미 한정) · TCA(태그 전용, 미출시)
SPM · CocoaPods · Tuist(개인 프로젝트 한정)
Fastlane · CI/CD · GitLab CI/CD · GitHub
Unit Test · XCUITest · Instruments
WidgetKit · AVFoundation · StoreKit · PDF Rendering
Firebase
React Native · TypeScript · Jest
RESTful API(크레디프 태그 전용) · C · C# · Java · MySQL · Oracle · MSSQL · PostgreSQL
Node.js · Google Drive API
BLE · Naver Map SDK · Amplitude
Flutter(학습) · Dart(학습) · TensorFlow(교육 수강)
```

> 태그 관리 원칙: 본문 서술 없는 태그는 원칙적으로 삭제 대상. 예외는 (1) TCA·Tuist처럼 사용자 원칙상 의도적으로 태그 전용인 경우, (2) JD 필수 스택인데 본문 근거가 사라진 경우 — 이때는 태그만 남기지 말고 impact 있는 실제 경험을 본문에 우선 복원.
> "AI 코딩 도구"는 기술 스택 태그가 아니므로 스킬 목록에 넣지 않고 "AI 활용 경험" 섹션으로 갈음.

---

## 7. 학력 (고정)

**서일대학교**
2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품: Ubicon2, 졸업작품: WIPI Designer

---

## 8. 회사별 과거 포지셔닝 이력 (기록용 · 포지셔닝 선택에 사용하지 않음)

| 회사 | 포지셔닝 방향 | 특이 강조 포인트 |
|---|---|---|
| 뱅크샐러드 | A(iOS 스페셜리스트) | Unit Test 표준화, SwiftUI 마이그레이션 |
| 밀리의서재 | 중립/제품 지향 | 개인 활용 AI 도구 상세, 리뷰 관리자 없이 직접 응대 |
| 강남언니 | B(제품 지향) | 외국어 지원, A/B 성격 강조 약함 |
| 지바이크 | C(서버/풀스택 강조) | RESTful API 본문 서술, BLE·IoT, A/B 테스트 |
| 원더월 | B/A 혼합, 임팩트 수치 강조 | 주간 5,000건 Crash 해결, Queue 기능, Instruments 상세 |
| 아르템 | B(초기 단계 프로덕트 리드) | Google Drive Xlsx 아키텍처, Node.js 서버 직접 구축 |
| 포디 | D(전 과정 오너십·스타트업) | AI 활용 경험 섹션 상단 배치, QA 프로세스 프레이밍, GitHub CI/CD 언급 |
| 글로벌머니익스프레스(GME) | E(안정성/운영 중심) | 회사별 클로징 문장(핀테크 도전 동기), TestFlight·Confluence 등 세부 태그, 배포시간 50% 감축 수치 |
| 제제미미(쑥쑥찰칵) | B 확장(초기 단계 프로덕트 리드) + 미션 공감 클로징 | 경력요약 축약형(15년+ 생략), SK AX 프로젝트명 명시, 각종 출처 링크 포함, "가족의 가치" 미션 공감 문장 |
| UJET | F(영문·SDK/API 전문성) | 이름 아래 타이틀 태그라인, Channel Talk SDK 통합 스토리 최초 등장, AI Layer SDK 전용 불릿, kofggm@gmail.com 이메일 사용, 크래시 "주간" 단위 명시 |
| 휴넷 | G(도메인 다양성·B2C/B2B·기술부채 해결) | 경력요약 줄 생략, SWING=B2B Hybrid/T world=B2C 구분 최초 명시, SK AX 레거시 아키텍처(Storyboard·MVVM·RxSwift) 태그 등장, WKWebView 구체 명시 |
| 헤렌 | D 확장(O2O·B2C+B2B·데이터 기반 우선순위) + 미션 클로징 | Firebase Crashlytics 명시, 전임자 가설 실패 디테일, AI Layer SDK 구조 설명 상세화, 크레디프 Beacon O2O SDK(AIDL) 신규 프로젝트 등장, AI 활용 경험을 SK AX 블록 안에 내장하는 구조 |
| 피에프씨테크놀로지스 | D 확장(적극적 의견 제시·신기술 실험) + 금융 도메인 도전 클로징 | AI 활용 경험 섹션 최상단 배치, 킥고잉 Naver Place/Daum Map 경로 표시 기능 신규 등장, ShowNote 투자사명(Enable Holdings) 최초 명시, AI Layer SDK 소비 앱 구체화(T world·T membership) |
| 핀다 | E 확장(리더십·프로세스 정착) + 핀테크 도메인 도전 클로징 | 경력요약 순서 변형(모바일 8년+ 먼저), 거의 모든 불릿에 결과/임팩트 프레이징 보강(대기열→트래픽 안정성, Figma→비용 절감, S3개선→테스트 단축 등) |
| 스트레스솔루션(HealingBeat) | B 확장(React Native-lead) + 제품경험 공감 클로징 | 경력요약에 RN 2년+ 분리 명시 최초 등장, 소개문이 "React Native와 iOS" 순서로 시작(RN 우선), Flutter/Dart/TensorFlow 태그 최초 등장(스코프 명시 처리), $100/$800 두 시점 수치 한 문장 병기 |
| 비버웍스(RN 시니어, AI 네이티브) | B(RN 모바일 리드) + 규칙 예외로 AI 활용 경험을 경력 위로 이동 | 킥고잉 불릿을 CI/CD(Fastlane·빌드 캐시·**Jest 포함**)·상태관리·Native Bridge·외부 SDK 순으로 재배열, SK AX는 Crashlytics 5,000건 Crash 최상단, 시원스쿨 SNS 소셜 로그인 신규, Crashlytics 태그를 모바일 블록 전체(크레디프 제외)에 추가, Davinci MCP를 AI 활용 경험에 포함, 개인 iOS의 SPM Action 불릿 삭제(RN 직무 부적합), 크레디프 구현 불릿 유지(모바일 경력 인정) |

---

## 9. 작업 시 체크리스트 (instruction.md 요약)

1. 인과관계 오류 금지 (캐싱 vs API 절감 vs 길안내는 별개 사실)
2. 주체 오류 금지 (Amplitude는 "활용", "구축" 아님)
3. 시점 불일치 금지 (날짜 섹션엔 그 시점 사실만)
4. 적용 범위 과장 금지 (Tuist=전반, Clean Architecture=게임도우미 한정)
5. 필러 표현("직접", "재직 중", "선제적으로") 제거
6. 같은 어근 반복 금지
7. 회사 경력 > 개인 프로젝트 우선순위 (개인 프로젝트는 핵심 수치만)
8. 볼드는 선택적 강조만, 소개문처럼 짧은 문장엔 볼드 자제
9. 스킬 태그-본문 정합성, 예외는 TCA/Tuist(의도적 태그 전용)와 JD 필수 스택 복원 케이스
10. 위치 지칭은 줄 번호(Lnn) 대신 섹션명/내용으로
11. **행위로 끝나는 불릿엔 결과/임팩트 절을 붙인다** — "~을 했다"로 끝나지 않고 "~해서 [수치/효과]를 얻었다"로 마무리. 단, 지어낸 효과가 아니라 실제 있었던 결과여야 함
12. **불릿은 간결하게, 배경 설명은 Full Story로**: 불릿은 "행위 + 핵심 결과" 한 문장만 유지한다. "왜 그랬는지", "누가 먼저 뭘 시도했다 실패했는지", "정확히 어떤 각주가 붙는지" 같은 부연 설명은 각 회사 섹션 하단의 `<details>상세 배경(Full Story)</details>`로 옮긴다. 새 불릿을 추가할 때도 이 구분을 지켜서 불릿 뱅크가 다시 길어지지 않게 한다.
13. **공고별 맞춤 범위**: 불릿 순서와 볼드 조정만. 불릿 추가·재작성, 섹션 순서 변경, 포지셔닝 변경, 클로징 문장은 하지 않는다. 지원 전 필터(신호 3개 중 2개 이상)는 yj-resume-writer 스킬 참조.
