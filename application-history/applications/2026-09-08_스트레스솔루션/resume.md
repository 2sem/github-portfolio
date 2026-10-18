# 이영준

**모바일 8년+ (iOS 5년+ · React Native 2년+) · 총 경력 15년+**

toyboy2@hanmail.net · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io) · [GitHub](https://github.com/2sem)

---

## 소개

React Native와 iOS를 중심으로 다양한 도메인에서 담당 영역을 단독으로 책임져 왔습니다. 업무를 스스로 발굴·분할하고 우선순위를 할당해 수행하며, 이슈나 장애 상황에서도 원인을 끝까지 추적해 침착하게 해결합니다. 초기 단계 프로덕트를 기획부터 출시까지 단독으로 이끈 경험이 다수 있으며, AI 코딩 도구를 동료로 활용하되 산출물은 비판적으로 검증하고 책임집니다. 소리가 사람의 상태를 바꾸는 경험을 스트레스솔루션에서 함께 만들고 싶습니다.

---

## 주요 경력

### SK AX (계약: 디투엘) · iOS Developer
**2024.06 – 2025.10 (1년+) · 프리랜서**
IT 외주 SK 계열 · SKT의 3개 iOS 프로젝트 단독 담당 (SWING, T world, AI Layer SDK)

- **WKWebView** Delegate에서 강제 언래핑으로 발생하던 **주간 5,000건 이상의 Crash**를, 재현되지 않는 전임자 PR의 가설을 의심하고 코드를 따라가며 동일 크래시를 발생시켜 근본 원인 해결
- 대량 동시 접속 시 서버 과부하를 줄이는 **대기열(Queue)** 기능을 구현해 트래픽 급증 구간 안정성 확보
- 보안 기능을 설정한 사용자가 위젯을 이용하지 못하던 문제를, 앱과 위젯 간 Cookie Storage 공유로 세션을 재사용하고 위젯 API 분석 후 서버 개발자에게 수정 방안 제시로  해결
- GitLab CI Workflow 실행 권한이 없는 환경에서 **Fastlane**으로 빌드부터 **TestFlight** 업로드, Slack IPA 전달까지 자동화
- 설명 없는 대형 MR로 리뷰가 불가능하던 문제를 Jira에 Epic을 도입해서 Subtask 단위 MR과 MR Template 적용으로 해결하고 타 프로젝트에도 전파

`Swift` `SwiftUI` `UIKit` `WidgetKit` `WKWebView` `Combine` `Swift Concurrency` `Unit Test` `Fastlane` `GitLab CI/CD` `Firebase` `Jira`

---

### 올룰로 (킥고잉) · App Developer → Mobile Tech Lead
**2021.06 – 2023.10 (2년+) · 정규직**
국내 최초 공유 킥보드 서비스 · **React Native** 기반 iOS/Android 동시 개발

- Naver Map SDK의 Native Bridge에 축척 계산 로직을 추가해, 조회된 경로 전체가 화면에 들어오도록 지도를 자동 Zoom하는 길안내 구현
- **Channel Talk(외부 CX SDK)** 통합으로 전화 전용이던 고객 지원을 인앱으로 전환. 통합 후 SDK의 알림 분류 메소드에서 발생한 Crash를 원인 분석해 제보하고 수정안 PR까지 제출
- 킥보드와의 **BLE** 통신 로직을 최적화하고 스캔·연결 소요 시간을 지표화해 개선 효과 검증
- 구역 정보 API 호출을 **4회에서 1회로 줄여 데이터 사용량 최소 75% 절감**, 사용자와 인프라의 네트워크 트래픽 최적화에 기여
- iOS/Android Workflow가 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**하고 빌드 캐시를 적용해 **배포 소요 시간 50% 감축**
- Android 배포를 AWS S3 업로드 후 링크 공유하던 방식에서 **APK를 Slack에 직접 업로드**하는 방식으로 개선해 테스트 단계 단축
- **Jest** 기반 Unit 테스트를 보강하고, 실행 Parameter 조정과 캐시 적용으로 테스트 실행 성능 개선
- Android Native Bridge의 Manifest 수정으로 **Android 12 권한 정책** 대응, Android 언어 설정 관련 오픈소스 기여
- 엔지니어 2~3명을 리드하며 **1일 1시간 기술부채 해소** 시간과 월간 모바일 개발자 회의를 도입해, React Native 업그레이드 등 미뤄진 과제를 해소하고 기술적 도전 과제 도출과 도전자 선정
- UX팀과 협의해 **Figma**와 소스의 Asset 이름을 일치시켜 디자인 부서와의 커뮤니케이션·구현 비용 절감, PR Template과 Jira Workflow로 리뷰·업무 프로세스 개선

`React Native` `TypeScript` `Redux` `Jest` `Java/Kotlin(Native Bridge)` `Java/Objective-C(Native Bridge)` `BLE` `Naver Map SDK` `Channel Talk SDK` `Amplitude` `Fastlane` `GitHub Actions`

---

### 에스제이더블유인터내셔널 (시원스쿨) · iOS Developer
**2018.06 – 2021.05 (3년) · 정규직**
국내 1위 온라인 어학 교육 플랫폼

- 합류 후 한 달째 정체돼 있던 신규 대표 앱 프로젝트를 기획서 재검토, 서버 개발자와 소통으로 담당자 반복 퇴사 상황에서 프로젝트 완수에 기여
- **AVFoundation** 기반 공용 영상 플레이어 라이브러리를 개발해 다른 앱과 공유, 최소화·최대화 기능을 전 화면에서 재사용하도록 기반 ViewController 설계
- **빅토익보카**: 기획·디자인·Android 앱이 모두 다른 상황에서 기획을 새로 정립해 iOS 버전을 개발하고, **백그라운드 재생**(자동 단어 넘김)을 제안·구현해 Android에도 적용하도록 유도
- **StoreKit 기반 인앱결제**를 제안·구현해 도서 부록을 넘어 자체 수익화
- 인앱 리뷰 요청 노출 시점을 제안·설계·구현해 앱 평점 **4.1 → 4.7** 상향
- 민원 발생 전 선탐지를 위해 전체 강의를 순회하며 재생 가능 여부를 검증하는 **UI Test** 기반 불량 영상 검출 QA 프로세스를 구축해 담당 부서에 검출된 콘텐츠 전달
- **Fastlane** 기반 인프라를 처음부터 구축해 빌드·배포 자동화로 배포 프로세스 개선
- **App Store 리뷰에 직접 답변**하고, 무선 키보드 지원처럼 별도 기획이 필요 없는 사항은 즉시 조치. **React Native·Unity·Xamarin** 등 크로스 플랫폼 프레임워크를 선행 학습해 팀 내 교육과 파일럿 프로젝트 수행

`Swift` `MVVM` `RxSwift` `AVFoundation` `StoreKit` `XCUITest` `Fastlane` `Firebase` `Storyboard`

---

### 개인 iOS 개발자
**2017.02 – 2018.06 (1년+)**

- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 **광고 수익 월 $100 이상** 달성(2017.12 기준, 2020 기준 $800)
- '관련주식검색기': 푸시 알림을 제안하고 Node.js·**FCM** 기반 서버를 구축해 **매출 2배** 달성
- **파파고 API** 기반 번역 앱, 관광공사 API 기반 국내 여행 가이드 앱 등 외부 API 연동 앱 개발
- 게임 유틸리티 앱 '게임도우미'를 개발, 운영해 **일일 사용자 500명 이상** 확보
- 공인중개사 요약집 앱에서 팝업 디자인 4가지를 **Firebase A/B 테스트**로 비교 검증
- 'ShowNote'(iPad용 PDF 프레젠테이션 앱): 기획을 전면 개편하며 특허 핵심 'Trigger' 개념을 고안, 퇴사 후에도 유지보수를 이어가 **특허 출원**과 **10억 원 규모 엔젤 투자 유치**(Enable Holdings)에 기여

`Swift` `UIKit` `Firebase` `Node.js` `FCM` `PDFKit`

---

### 크레디프 · 개발자
**2009.08 – 2017.02 (7년+) · 정규직**
이동통신 3사·공공기관 대상 SI/SM 전문기업

- 서버(C)부터 클라이언트(C#/Java, 모바일 iOS/Android)까지 **7년 이상 풀스택**으로 **30개+ 프로젝트** 개발·유지보수
- 저전력 **Beacon** 구매자에게 Service 통신을 제공하기 위한 SKT **O2O Android SDK**를 JNI 대신 **AIDL** 기반으로 개발
- 담당자 공백·인수인계 부재·장애 등 위기 상황마다 투입돼 문제를 해결하고, 신규 언어·플랫폼을 선행 연구

`C` `C#` `Java` `RESTful API` `MySQL` `Oracle` `AIDL` `Beacon`

---

## AI 활용 경험

- 개인 앱의 현대화를 위해 [SwiftUI 마이그레이션 Skill](https://github.com/2sem/swiftui-migrator-skill)을 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- SK AX에서 보안 제약을 극복하기 위해 GitLab Runner에 [Ollama를 연결한 MR 리뷰(Agent 기반)](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9)를 구축, 매니저가 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원

---

## 외부 활동

- 개인 [iOS 앱](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) 전반에 [Tuist](https://tuist.dev)를 적용해 모듈화 구조를 구축·운영하고, 경험을 [Article](https://toyboy2.medium.com/list/tuist-c1abeaa7d167)로 정리해 [한국어 문서 번역](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65)에 기여
- Seoul iOS Meetup에서 ['Tuist 캐시, 선택적 테스트 그리고 쉬운 CI로 빌드 반복 가속하기'](https://youtu.be/FFkEbqG4ips) 발표
- Dev Korea Meetup 등 커뮤니티 정기 참여, [Medium](https://toyboy2.medium.com)에 [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5)·[React Native](https://medium.com/@toyboy2/list/reactnative-ec618220f682) 기술 Article 다수 발행

---

## 기술 스택

```
React Native · TypeScript · Redux · Jest
Swift · SwiftUI · UIKit · Objective-C · Java/Kotlin(Native Bridge)
Combine · Swift Concurrency · MVVM · Clean Architecture · TCA
Fastlane · CI/CD · GitHub Actions · GitLab CI/CD · Git
Unit Test · XCUITest · Instruments
AVFoundation · StoreKit · WidgetKit · BLE · Beacon
Naver Map SDK · Channel Talk SDK · Firebase · Amplitude
Node.js · RESTful API · C · C# · Java · MySQL · Oracle
Python · Tensorflow · Dart · Flutter
```

---

## 학력

**서일대학교**
2003.03 – 2009.02 · 졸업 · 소프트웨어전공 (3년제)
사내 벤처 동아리(Security/IQnS) 활동 및 대회 출품: Ubicon2, 졸업작품: WIPI Designer
