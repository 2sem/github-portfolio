이영준
toyboy2@hanmail.net · LinkedIn · Medium · Portfolio · GitHub

iOS를 중심으로 다양한 플랫폼·도메인을 경험했습니다. 담당 기술을 넘어 좋은 제품을 만들기 위해 되묻고 함께 고민하며, 지식을 적극적으로 공유합니다. AI를 개발 전 과정의 동료로 활용하되, 산출물은 비판적으로 검증하고 책임집니다.

경력 15년+ (iOS 5년+ · 모바일 8년+)

## 경력

### SK AX (계약: 디투엘) 2024.06 – 2025.10 · 프리랜서 · iOS Developer
SK 계열 IT 외주 · SKT의 iOS 프로젝트 유지보수 담당
- SwiftUI 위젯(WidgetKit 기반)에 새로고침 버튼 추가, 보안 기능 설정한 사용자가 위젯을 이용하지 못하던 문제를 앱-위젯 간 Cookie Storage 공유로 해결
- Webview Delegate 강제 언래핑으로 발생한 **5,000건 이상의 Crash**를 원인 분석 후 근본 해결, 대량 동시 접속 시 서버 과부하를 줄이기 위한 대기열(Queue) 기능 구현
- 신규 API 호출 시 **Swift Concurrency** 사용 및 기존 API 점진 전환, Combine 기반으로 View Model과 View 연동
- 설명 없는 대형 MR로 리뷰가 불가능했던 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR과 MR Template으로 해결해 매니저 만족·타 프로젝트 전파

`Swift` `SwiftUI` `Combine` `Swift Concurrency` `Objective-C` `XCTest` `Jira` `Fastlane` `GitLab CI/CD`

### 올룰로 (킥고잉) 2021.06 – 2023.10 · 정규직 · App Developer → Mobile Tech Lead
국내 최초 공유 킥보드(모빌리티) 서비스 · React Native(크로스플랫폼)
- 구역 정보 API 호출 4회→1회로 최적화 및 위치 데이터 캐싱으로, 데이터 사용량 최소 **75% 절감**
- Naver Map SDK Native Bridge(Java/Objective-C)에 축척 계산 기능을 추가해 조회된 경로를 한 번에 볼 수 있도록 지도 자동 Zoom 구현
- OS별로 분리돼 있던 GitHub 배포 Workflow를 Fastlane 기반으로 통합, 빌드 캐시 적용으로 배포 소요 시간 **50% 감축**
- 엔지니어 2~3명 리드, 1일 기술부채 해소 시간 도입 → React Native 0.71 업그레이드 등 기술부채 해소
- PR Template 도입으로 코드 리뷰 프로세스 개선, Jira Workflow 설정으로 업무 프로세스 표준화

`React Native` `TypeScript` `Redux` `Java/Objective-C` `Naver Map SDK` `Amplitude` `Jest` `Fastlane` `Jira`

### 에스제이더블유인터내셔널 (시원스쿨) 2018.06 – 2021.05 · 정규직 · iOS Developer
국내 1위 온라인 어학 교육 플랫폼
- 합류 후 한 달째 정체된 신규 앱 프로젝트를 기획서 전면 재검토 및 서버 소통으로 일정 내 출시
- 인앱 리뷰 요청을 기획하고 노출 시점을 설계·구현해 평점 **4.1 → 4.7** 상향
- RxSwift 도입 시 MVVM 아키텍처 적용, AVFoundation 기반 공용 영상 플레이어 라이브러리 개발
- 강의 영상 재생 불가 민원 대응을 위해 전체 강의를 순회하며 재생 실패 콘텐츠를 검출하는 XCUITest 기반 QA 프로세스 구축
- Instruments로 메모리 릭 탐지, Memory Graph로 순환 참조 해결
- 부록 단어장 앱 '빅토익보카'를 iOS 맞춤 개발, StoreKit 기반 인앱 결제를 직접 기획·구현해 자체 수익화

`Swift` `MVVM` `RxSwift` `AVFoundation` `XCUITest` `Instruments` `StoreKit` `Fastlane`

### 개인 iOS 개발자 2017.02 – 2018.06 · 개인
- 관련주식검색기: 푸시 알림 제안 + Node.js 기반 서버 직접 구축으로 **매출 2배** 달성
- 문자행동: 국회의원 연락처/SNS 앱, SBS 등 언론 인터뷰
- ShowNote(iPad용 PDF 프레젠테이션 앱): 재직 중 기획을 전면 개편하며 특허 출원 핵심 기능 'Trigger' 개념 고안, 퇴사 후 유지보수를 지속해 2018.07 10억 원 규모 투자 유치에 기여

`Swift` `UIKit` `Node.js` `PDF Rendering`

### 크레디프 2009.08 – 2017.02 · 정규직 · 개발자
이동통신 3사·공공기관 대상 SI/SM 전문기업
- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 7년 이상 풀스택으로 30개+ 프로젝트 개발·유지보수
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결

`C` `C#` `Java` `Python` `MySQL` `Oracle`

## AI 활용 경험
- SK AX에서 보안 제약을 고려해 GitLab Runner에 Ollama를 연결한 MR 리뷰(Agent 기반) 구축, 변경 사항을 빠르고 안심하고 리뷰할 수 있도록 지원
- 개인 앱 유지보수를 위해 SwiftUI 마이그레이션 자동화 Skill 구축, 앱당 1주 이상 걸리던 작업을 1~2일로 단축
- Youtube 영상 편집을 위해 유료 버전 전용 기능인 Davinci Resolve MCP를 무료 버전용으로 직접 구축

## 외부 활동
- 개인 iOS 프로젝트 전반에 Tuist를 실제 적용해 모듈화 구조 구축·운영, Article 작성 계기로 Tuist CEO Pedro Piñera와 LinkedIn 연결·한국어 페이지 번역 기여
- iOS 앱 '게임도우미'를 Clean Architecture 기반으로 마이그레이션
- Seoul iOS Meetup에서 'Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기' 발표
- TCA: 개인 프로젝트에 적용, Medium 아티클로 게재
- Dev Korea, Seoul iOS Meetup 등 커뮤니티 정기 참여, 기술 아티클 다수 발행

## 학력
서일대학교
2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
