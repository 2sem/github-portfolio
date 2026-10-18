# 이영준

[LinkedIn](https://linkedin.com/in/gamehelper) · [Portfolio](https://2sem.github.io) · [Medium](https://toyboy2.medium.com) · toyboy2@hanmail.net

iOS를 중심으로 다양한 플랫폼·도메인에서 담당 영역을 단독으로 책임져 왔습니다. 업무를 스스로 발굴·분할하고 우선순위를 할당해 수행하며, 이슈나 장애 상황에서도 원인을 끝까지 추적해 침착하게 해결합니다. AI 코딩 도구를 동료로 활용하되, 산출물은 비판적으로 검증하고 책임집니다.

**경력 15년+ (iOS 5년+ · 모바일 8년+)**

## 경력

**SK AX (계약: 디투엘)**   2024.06 – 2025.10 (1년+) · 프리랜서 · iOS Developer

*IT 외주 SK 계열 · SKT의 3개 iOS 프로젝트 유지보수 단독 담당*
- Webview Delegate에서 강제 언래핑으로 발생한 **5,000건 이상의 Crash**를 원인 분석 후 근본 해결, 접속 폭주에 대비한 **대기열(Queue) 기능** 구현.
- FE(프론트엔드) 이슈 발생 시 원인 파악을 위한 **디버깅 지원** 수행.
- T world에서 Combine으로 AI 추천 툴팁·넛지 UI 구현, API 호출 점진적 async/await 전환, 신규 API Unit Test 작성.
- 보안 설정을 강화한 사용자가 위젯을 이용하지 못하던 문제를 앱-위젯 간 Cookie Storage 공유로 해결, WidgetKit 기반 SwiftUI 위젯 기능 개선.
- SWING 프로젝트에서 Objective-C를 Swift로 점진적 마이그레이션, CocoaPods 종료에 선제 대응해 라이브러리별 SPM 전환 진행.
- 설명 없는 대형 MR로 사실상 리뷰가 불가능했던 문제를 커밋 단위 분할과 Jira Epic·Task·Subtask 구조화로 해결, 매니저 만족으로 타 프로젝트에도 자연스럽게 전파.
- 주니어 엔지니어 **2명 코칭**해 스스로 업무를 수행할 수 있도록 훈련.

*Swift · Objective-C · SwiftUI · WidgetKit · Combine · Swift Concurrency · Unit Test · SPM · GitLab CI/CD*

**올룰로 (킥고잉)**   2021.06 – 2023.10 (2년+) · 정규직 · App Developer → Mobile Tech Lead

*국내 최초 공유 킥보드 서비스*

실무 기여
- 지도 API 호출을 **최소 75% 절감**(위치 데이터 최적화), BLE 연결 소요 시간을 지표화해 스캔·연결 로직 최적화.
- **react-native-naver-map**(Naver Map SDK)의 Native Bridge(Java/Objective-C)에 직접 기능 추가: 길안내 시 전체 경로가 화면에 들어오도록 **축척(zoom level) 계산 로직** 구현.
- Fastlane 기반 CI/CD 자동화 구축·운영, Jest 기반 테스트 보강 및 실행 성능 개선.
- 파트너사 앱 연동 가입 프로세스 구축.

리드 경험
- **엔지니어 2~3명을 리드**하며 1일 기술부채 해소 시간 도입, PR Template과 Jira Workflow로 코드 리뷰·업무 프로세스 개선.

*React Native · TypeScript · Java/Objective-C(Native Bridge) · BLE · Fastlane · CI/CD · Jest*

**에스제이더블유인터내셔널 (시원스쿨)**   2018.06 – 2021.05 (3년) · 정규직 · iOS Developer

*국내 1위 온라인 어학 교육 플랫폼 · 자체 앱 단독 개발*
- 합류 당시 한 달째 정체돼 있던 프로젝트를 기획서 전면 재검토로 재정립하고, 신규 앱 전체에 필요한 서버 API 개발이 전반적으로 지연되자 지속적으로 소통·독촉해 필요한 작업을 이끌어내며 **제로베이스로 자체 앱을 단독 개발**.
- **평점 4.1 → 4.7 상향**을 이끈 인앱 리뷰 요청 기능을 직접 기획·제안하고 노출 시점을 설계해 구현.
- MVVM 아키텍처 기반 RxSwift 전환, AVFoundation 기반 공용 영상 플레이어 라이브러리 개발.
- **Instruments로 메모리 Leak을 탐지**하고 **Memory Graph(Dependency Graph)로 순환 참조를 찾아 해결**, 앱 안정성 개선.
- 화면 녹화 방지·탈옥 감지 등 콘텐츠 보호 기능 구현, 최소화·최대화 기능을 전 화면 재사용 가능하도록 기반 ViewController 설계.
- 강의 영상 재생 불가 민원을 직접 확인해 재현했으나 담당 부서가 문제를 인정하지 않자, **고객보다 먼저 문제를 발견하기 위해 전체 강의를 순회하며 재생 버튼 노출 여부를 검증하는 XCUITest 자동화를 구현**. 유휴 시간에 실행해 로그에서 실패 콘텐츠 ID를 확인 후 담당 부서에 전달.

*Swift · MVVM · RxSwift · AVFoundation · XCUITest · Fastlane*

**빅토익보카**   시원스쿨 계열 · 단독 기능 기획·구현
- 도서 부록이던 단어장 앱의 iOS 버전을 단독 개발, **StoreKit 기반 인앱결제를 직접 제안·구현해 자체 수익화**.
- 백그라운드 재생(자동 단어 넘김) 기능을 제안·구현해 Android에도 적용.

*Swift · StoreKit · AVFoundation*

**개인 iOS 개발자**   2017.02 – 2018.06 (1년+) · 개인 · 앱 다수 단독 기획·개발·출시
- '문자행동'은 SBS 인터뷰 등 언론의 주목을 받았고, 주식 정보 앱은 푸시 알림 기능 제안·서버 구축으로 매출 2배 달성.
- 게임 유틸리티 앱 '게임도우미'는 **일일 사용자 500명 이상** 규모로 단독 운영.
- ShowNote(iPad용 PDF 프레젠테이션 앱): 재직 중 기획을 전면 개편하며 'Trigger' 개념을 직접 고안, 퇴사 후에도 유지보수를 지속해 **특허 출원 및 10억 원 규모 투자 유치**에 기여.

*Swift · PDF Rendering*

**크레디프**   2009.08 – 2017.02 (7년+) · 정규직 · 개발자

*이동통신 3사·공공기관 대상 SI/SM 전문기업*
- 담당자 공백·인수인계 부재 등 위기 상황마다 투입돼 서버(C)부터 클라이언트(C#/Java, iOS/Android)까지 풀스택으로 개발·유지보수.
- 판교 R&D센터 IBS/FMS 클라이언트 리드, WIFI 실내측위 연구 플랫폼 풀스택 단독 개발.

*C · C# · Java · RESTful API · MySQL · Oracle*

## AI 활용 경험
- 개인 앱 유지보수를 위해 opencode(Codex 기반)로 SwiftUI 마이그레이션 자동화 Skill을 구축, **앱당 1주 이상 걸리던 작업을 1~2일로 단축**.
- SK AX에서 보안 제약을 고려해 GitLab Runner에 Ollama를 연결한 MR 리뷰 자동화를 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여.
- 개인 방송 영상 편집을 위해 유료 버전 전용 기능인 Davinci Resolve MCP를 무료 버전용으로 직접 구축, 장면 분류·편집·검증 단계를 Skill과 Script로 분리해 신뢰성 향상.

## 외부 활동
- 개인 iOS 프로젝트 전반에 **Tuist를 실제 적용해 모듈화 구조를 구축·운영**, 관련 경험을 Article로 작성해 Tuist CEO와 직접 연결되어 한국어 페이지 번역에 기여(CEO 감사 선물·친필 편지 수령).
- Seoul iOS Meetup에서 'Tuist 캐시, 선택적 테스트, 쉬운 CI로 빌드 반복 가속하기' 발표.
- **TCA(The Composable Architecture)** 학습 과정에서 설정(Settings)·Modal·SwiftData 연동 등을 개인 앱에 적용한 경험을 Medium 아티클로 게재.
- Dev Korea Meetup 등 커뮤니티 정기 참여.

## 스킬
Swift · SwiftUI · UIKit · Objective-C · MVVM · TCA · Combine · Swift Concurrency(async/await) · SPM · Tuist · AVFoundation · StoreKit · WidgetKit · XCUITest · Unit Test · Fastlane · CI/CD · React Native · Instruments

## 학력
**서일대학교**   2003.03 – 2009.02 · 졸업 · 소프트웨어전공(3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품: Ubicon2, 졸업작품: WIPI Designer
