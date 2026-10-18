# 유모스원 · FMS Mobile Engineer (iOS to Flutter Migration) 지원 재료

> 상세 이력서가 아니라 JD에 맞춰 가져온 재료입니다. 문장은 `master.md` 불릿 뱅크 원문입니다. 매일 이 재료로 이력서를 작성하세요.

## 필터 판별
- 업무 동사: 네이티브 iOS를 Flutter 아키텍처로 전환 설계 주도 (🟢)
- 팀 상황: 마이그레이션 프로젝트, iOS 전문가 필요 (🟡)
- 우대 수준: 크래시 분석·앱 성능 지표, 모빌리티 도메인 (🟢)
- 신호: 2개 (Flutter 실무 5년 요건이 가장 큰 공백)

## 베이스
① Senior iOS (SDK/플랫폼형)

## JD 항목별 근거 불릿 후보

**iOS 네이티브 깊은 이해, 네이티브 코드 분석 후 전환·마이그레이션**
- Objective-C를 Swift로 점진적 마이그레이션(Extension 단위)
- Closure 기반 API 호출은 Swift Concurrency, 신규 UI는 Combine으로 점진 전환해 생산성·성능 개선
- CocoaPods 종료 대비 라이브러리별 SPM 전환 진행

**모바일 앱 아키텍처 설계**
- RxSwift 도입과 함께 **MVVM 아키텍처** 적용
- 최소화·최대화 기능을 전 화면에서 **재사용** 가능하도록 기반 ViewController 설계·구현

**AI 코딩 어시스턴트 활용 (Claude, Codex)**
- 개인 앱 현대화를 위해 [**SwiftUI 마이그레이션  Skill**](https://github.com/2sem/swiftui-migrator-skill) 구축, 앱당 1주 이상 걸리던 작업을 **1~2일로 단축**
- 개인 앱 유지보수를 위해 **ios-developer·designer·marketer·cs·reporter 에이전트로 팀을 구성**하고, CLAUDE.md에 역할·위임 규칙·QA 게이트를 정의해 메인 에이전트가 목표를 나눠 위임하고 결과를 검토하는 **멀티 에이전트 오케스트레이션** 운영 (cs가 피드백 수집 → reporter가 이슈 작성 → 검토 후 담당 에이전트에 배정) (2026-10 사용자 확인: 오케스트레이션 경험, 비버웍스 JD 요구. 에이전트 구성은 사용자 진술과 개인 앱 CLAUDE.md 팀 구조 기준)

**CI/CD 자동화, 코드 리뷰·문서화 문화**
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + [**MR Template**](https://toyboy2.medium.com/automate-your-tasks-with-mr-template-using-gitlab-commands-b1af5c84ce7b) 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파
- PR Template·Jira Workflow로 코드 리뷰·업무 프로세스 표준화

**크래시 분석·성능 지표 (우대)**
- **Crashlytics**로 확인한 **WKWebView** Delegate 강제 언래핑 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결 (2026-10 비버웍스: 모니터링 도구 명시 목적의 변형. 원문은 아래)
- BLE 통신 로직 최적화: Library 옵션 및 제조사 펌웨어 조정 후 스캔·연결 소요 시간 지표화로 개선 검증

**모빌리티·원격 제어 도메인 (우대)**
- BLE 통신 로직 최적화: Library 옵션 및 제조사 펌웨어 조정 후 스캔·연결 소요 시간 지표화로 개선 검증
- Naver Map SDK **Native Bridge**에 [축척 계산 로직 추가](https://github.com/team-olulo/react-native-naver-map/pull/7)해 지도 자동 Zoom(길안내) 구현

## 공백 (이력서로 메우기 어려운 것)
- Flutter 실무 경험 없음 (외부 활동의 학습·클론 구현만)
- 네이티브 → Flutter 전환 완료 경험 없음 (SwiftUI 마이그레이션 Skill은 다른 종류)
- 실시간 차량 관제·원격 제어 경험 없음
