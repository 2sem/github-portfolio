# 이영준

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

**iOS 5년+** (모바일 8년+ · 총 경력 15년+)

iOS를 중심으로 다양한 도메인과 플랫폼에서 크래시 대응부터 성능 최적화, CI/CD 구축까지 안정적인 서비스 운영을 위한 전 과정을 다뤄왔습니다. 모바일 엔지니어 2~3명을 리드하며 코드 리뷰 프로세스와 기술부채 해소 사이클을 팀에 정착시켰고, 처음 사용하는 도구도 연구해서 기존 동료도 모르는 방법을 찾아 공유해 모두의 효율을 개선했습니다. 기획과 API Spec에 적극적으로 피드백하고 더 좋은 제품을 위한 방안을 함께 찾습니다.

---

## 경력

### SK AX (계약: 디투엘) — IT 외주 SK 계열
**2024.06 – 2025.10 (1년+) · iOS Developer**
SKT의 3개 iOS 프로젝트 유지보수 (T world, SWING, AI Layer SDK)

- **WKWebView** Delegate에서 강제 언래핑으로 발생한 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 API를 분석 후 서버 개발자에게 수정안 제시로 해결
- Closure 기반 API 호출은 **Swift Concurrency**, 신규 UI는 **Combine**으로 점진 전환해 생산성·성능 개선
- 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열 기능** 구현으로 트래픽 급증 구간 안정성 확보
- 신규 API 연동 추가 시 **Unit Test 작성**으로 예외 사항 검증
- Objective-C를 Swift로 CocoaPods를 SPM으로 점진적 마이그레이션
- 프론트엔드 이슈 발생 시 원인 파악을 위한 디버깅 지원 수행
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + **MR Template** 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파
- 주니어 엔지니어 2명을 Subtask 단위 업무 할당·분할 위임 방식으로 코칭

`Swift` `SwiftUI` `UIKit` `Objective-C` `MVVM` `RxSwift` `Combine` `Swift Concurrency` `WidgetKit` `WKWebView` `Unit Test` `SPM`

---

### 올룰로 (킥고잉) — 국내 최초 공유 킥보드(모빌리티) 서비스
**2021.06 – 2023.10 (2년+) · 정규직 · App Developer → Mobile Tech Lead**
React Native 기반 크로스플랫폼 앱(iOS·Android)

- 선택 언어에 따라 리소스 전환 구축으로 **다국어 대응** 구현하고, Android 설정 관련 오픈소스에 앱 언어 설정 추가 기여
- Naver Place·Daum Map 분석으로 앱내 **장소 검색, 경로 표시 기능** 구현하여 대리운전기사 사용자층 긍정 평가 획득
- 구역 정보 **API 호출** 4회→1회로 **최적화**하고 좌표 압축 및 캐싱으로 **데이터 사용량** 최소 **75% 절감**하여 네트워크 트래픽 최적화에 기여
- 외부 CX **SDK** 통합 후 알림 분류 메소드에서 발생한 **Crash**를 제조사에 제보하고 **수정**안 PR 제출
- Amplitude로 사용자 경험 데이터 수집·BLE 로직 개선 성과 측정
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**, 빌드 캐시 적용으로 **배포 소요 시간 50% 감축**
- 엔지니어 2~3명 리드, **1일 1시간** 기술부채 해소 시간 도입 → React Native 업그레이드 등 기술부채 해소
- 월간 모바일 개발자 회의 운영, **기술 부채** 선정 및 도전 과제 도출
- UX팀과 협의해 Figma-소스 Asset 매핑으로, 디자인 부서 커뮤니케이션·구현 비용 절감

`React Native` `TypeScript` `Redux` `Objective-C` `Java` `Localization` `Amplitude` `Fastlane` `BLE`

---

### 에스제이더블유인터내셔널 (시원스쿨) — 국내 1위 온라인 어학 교육 플랫폼
**2018.06 – 2021.05 (3년) · 정규직 · iOS Developer**

- **RxSwift** 도입과 함께 **MVVM 아키텍처** 적용하여 가독성과 생산성 개선
- **최소화·최대화** 기능을 전 화면에서 **재사용** 가능하도록 기반 ViewController 설계·구현
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 **평점**을 4.1 → **4.7**로 상향하고 App Store 리뷰를 직접 관리하여 유지.
- 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 제로베이스로 자체 앱 단독 개발
- 공용 **영상 플레이어 라이브러리** 개발해서 다른 앱과 공유하여 개발 기간 단축 및 UX 일관성 유지
- 전체 강의를 순회하며 재생 가능 여부를 검증하는 UI Test 기반 **QA 프로세스** 구축
- **React Native, Unity, Xamarin** 등 CrossPlatform 선행 학습, 팀 내 교육 및 파일럿 프로젝트 수행
- 빅토익보카의 기획·디자인·Android 앱이 모두 다른 상황에서 기획을 새로 정립해 iOS 버전 개발
- **StoreKit 기반 인앱결제**를 직접 제안·구현해 도서 부록을 넘어 자체 수익화
- 백그라운드 재생(자동 단어 넘김) 기능 제안·구현, Android에도 적용 유도

`Swift` `MVVM` `RxSwift` `Autolayout` `Storyboard` `AVFoundation` `XCUITest` `Instruments` `Fastlane` `Firebase`

---

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+) · 개인**

- **파파고 API 기반 번역 앱, 관광공사 API 기반 국내 여행 가이드 앱 개발**
- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 광고 수익 월 $100 이상 달성(2017.12 기준, 2020년 기준 $800+)
- '관련주식검색기': 푸시 알림 제안 + Node.js·**FCM** 기반 발송 서버 구축으로 **매출 2배** 달성(최대 **MAU 5,899**, 평균 MAU 1,100)
- 공인중개사 요약집 앱: 팝업 디자인 4가지 **Firebase A/B 테스트**로 비교 검증
- '문자행동'(국회의원 연락처·SNS 조회 앱): SBS 인터뷰 등 언론의 주목

`Swift` `UIKit` `Storyboard` `Localization` `Firebase` `Node.js`

---

### 크레디프 — 이동통신 3사·공공기관 대상 SI/SM 전문기업
**2009.08 – 2017.02 (7년+) · 정규직 · 개발자**

- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제 해결, 신규 언어·플랫폼 선행 연구

`C` `C#` `Java` `RESTful API` `MySQL` `Oracle`

---

## 외부 활동

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [**Tuist**](https://tuist.dev)를 실제 적용해 모듈화 구조 구축·운영(개인 프로젝트 한정). 게임도우미는 **Clean Architecture**도 함께 적용(SwiftUI 전환 시, 게임도우미 한정)
- 위 경험을 [Article](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)로 작성해 Tuist CEO Pedro Piñera와 LinkedIn으로 직접 연결, [한국어 페이지 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65)에 기여. 이후 한국 개발자와의 소통을 원한 CEO를 운영 중인 **Tuist 노하우 공유 오픈채팅방**에 초대
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- Dev Korea Meetup 등 커뮤니티 정기 참여, [**Medium**](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682)·TCA 등 기술 Article 다수 발행
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션 Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- SK AX에서 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원

---

## 스킬

```
Swift · SwiftUI · UIKit · Objective-C · Autolayout · Storyboard
MVVM · RxSwift · Combine · Swift Concurrency(async/await)
Clean Architecture(게임도우미 한정) · TCA(미출시 개인 프로젝트)
SPM · CocoaPods · Tuist(개인 프로젝트 한정)
Fastlane · CI/CD · GitLab CI/CD · GitHub
Unit Test · XCUITest · Instruments · Firebase
WidgetKit · AVFoundation · StoreKit · Localization
React Native · TypeScript · Jest
```

---

## 학력

**서일대학교**
2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품: Ubicon2, 졸업작품: WIPI Designer
