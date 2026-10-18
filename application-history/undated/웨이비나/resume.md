# 웨이비나 · 모바일 앱 개발자 지원 재료

> 상세 이력서가 아니라 JD에 맞춰 가져온 재료입니다. 문장은 `master.md` 불릿 뱅크 원문입니다. 매일 이 재료로 이력서를 작성하세요.

## 필터 판별
- 업무 동사: 초기 1인 개발·아키텍처 설계, 이후 앱 개발팀 리드 (🟢)
- 팀 상황: 초기 스타트업 신규 앱 (🟢)
- 우대 수준: BLE 웨어러블 연동, 헬스케어 UX (🟢)
- 신호: 3개 (지원 권장, 연봉 1억 정규직·스톡옵션 협의, 마감 2026-10-31)

## 베이스
① Senior iOS (RN은 보조 근거). 이 공고는 iOS(Swift)·Android·RN 중 택일 가능, 1인 앱 개발과 향후 리드

## JD 항목별 근거 불릿 후보

**앱 서비스 전체를 단독으로 빌드업·런칭 (iOS 네이티브 또는 RN)**
- 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 제로베이스로 자체 앱 단독 개발
- 개인 앱 다수를 기획·개발·**App Store 출시**해 앱 전체 합산 **광고 수익 월 $100 이상** 달성(2017.12 기준, 2020년 기준 $800+)
- React Native·TypeScript로 UX 디자이너와 협업해 워라밸 앱을 단독 개발

**아키텍처 설계와 신규 구축·배포 총괄**
- RxSwift 도입과 함께 **MVVM 아키텍처** 적용
- **Redux**로 앱 전역 상태 관리
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**

**향후 앱 개발팀 리드**
- 엔지니어 2~3명 리드, **1일 1시간** [기술부채 해소 시간 도입](https://toyboy2.medium.com/%EC%9E%91%EC%9D%80-%EA%B2%83%EB%B6%80%ED%84%B0-%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EA%B2%83%EB%B6%80%ED%84%B0-%EB%B0%94%EA%BF%94%EB%82%98%EA%B0%80%EA%B8%B0-ff21ea4fb6c2) → [**React Native 점진적 업그레이드**](https://medium.com/@toyboy2/migration-react-native-from-0-65-to-0-68-troubleshooting-guide-0a8a7401c581) 등 기술부채 해소
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + [**MR Template**](https://toyboy2.medium.com/automate-your-tasks-with-mr-template-using-gitlab-commands-b1af5c84ce7b) 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파
- PR Template·Jira Workflow로 코드 리뷰·업무 프로세스 표준화

**웨어러블·하드웨어 연동 (BLE/SDK) (우대)**
- BLE 통신 로직 최적화: Library 옵션 및 제조사 펌웨어 조정 후 스캔·연결 소요 시간 지표화로 개선 검증
- react-native-ble-plx가 Xcode 13과 호환되는 Pod을 참조하지 않아 발생한 빌드 오류를 [Pod과 라이브러리를 fork해 CocoaPods·npm에 배포하는 방식으로 해결](https://toyboy2.medium.com/react-native-ble-plx-xcode-13-troubleshootings-dca3f793b1e0)
- 저전력 **Beacon** 구매자 대상 SKT **O2O Android SDK**를 JNI 대신 **AIDL** 기반으로 개발

**AI 백엔드·서버 API 연동**
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(+위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- '관련주식검색기': 푸시 알림 제안 + Node.js·**FCM** 기반 발송 서버 구축으로 **매출 2배** 달성
- **Channel Talk(외부 CX SDK) 통합**: [채팅 상담](https://youtube.com/shorts/tC-np8ShcZU) 기능 추가, 통합 후 알림 분류 메소드에서 발생한 **Crash**를 제조사에 제보하고 [수정안 PR 제출](https://github.com/channel-io/react-native-channel-io/pull/107)

**UI/UX 감각, 서비스 기획 의견 제시**
- 인앱 리뷰 요청 노출을 제안하고 설계·구현해 평점을 4.1 → **4.7**로 상향
- 정체된 프로젝트를 기획서 전면 재검토로 재정립, 서버 개발자와 소통하며 제로베이스로 자체 앱 단독 개발

**AI 활용 (Claude Code 팀 운영 등)**
- 개인 앱 유지보수를 위해 **ios-developer·designer·marketer·cs·reporter 에이전트로 팀을 구성**하고, CLAUDE.md에 역할·위임 규칙·QA 게이트를 정의해 메인 에이전트가 목표를 나눠 위임하고 결과를 검토하는 **멀티 에이전트 오케스트레이션** 운영 (cs가 피드백 수집 → reporter가 이슈 작성 → 검토 후 담당 에이전트에 배정) (2026-10 사용자 확인: 오케스트레이션 경험, 비버웍스 JD 요구. 에이전트 구성은 사용자 진술과 개인 앱 CLAUDE.md 팀 구조 기준)
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션  Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- SK AX에서 보안 제약을 고려해 GitLab Runner에 [**Ollama를 연결한 Agent MR 리뷰**](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) 구축, 비개발자 매니저의 AI 활용 KPI 달성에 기여하고 변경 사항을 안심하고 빠르게 리뷰할 수 있도록 지원

## 공백 (이력서로 메우기 어려운 것)
- 디지털 헬스케어·의료 앱·웰니스 서비스 런칭 경험 없음
- BLE는 킥보드 기기 연동(RN) 중심, 심전도·웨어러블 연동은 없음
- 스타트업 1인 개발 + 리드 전환은 면접에서 설명 필요(리드는 킥고잉 2~3명 규모)
