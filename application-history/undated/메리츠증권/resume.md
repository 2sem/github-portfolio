# 메리츠증권 · IT부문 - MTS/WTS 개발 지원 재료

> 상세 이력서가 아니라 JD에 맞춰 가져온 재료입니다. 문장은 `master.md` 불릿 뱅크 원문입니다. 매일 이 재료로 이력서를 작성하세요.

## 필터 판별
- 업무 동사: 개발 위주, 설계·리딩 약함 (🔴)
- 팀 상황: MTS 앱 개발, 경력 요건·팀 상황 미공개 (🟡)
- 우대 수준: 하이브리드 앱·브릿지, CI/CD, 모노레포·디자인시스템 (🟡)
- 신호: 1개 이하 (지원 비권장, 레벨·연차 확인 필요. 마감 2026-11-06)

## 베이스
② React Native / 크로스플랫폼 (하이브리드·WebView 성격)

## JD 항목별 근거 불릿 후보

**Swift 네이티브·하이브리드 앱 개발**
- **Crashlytics**로 확인한 **WKWebView** Delegate 강제 언래핑 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결 (2026-10 비버웍스: 모니터링 도구 명시 목적의 변형. 원문은 아래)
- 보안 기능 설정한 사용자가 SwiftUI 위젯을 사용할 수 없는 문제를 Cookie Storage 공유로 세션을 재사용하고 API를 분석 후 서버 개발자에게 수정안 제시로 해결

**하이브리드(WebView)·앱 브릿지 연동 (우대)**
- Naver Map SDK **Native Bridge**에 [축척 계산 로직 추가](https://github.com/team-olulo/react-native-naver-map/pull/7)해 지도 자동 Zoom(길안내) 구현
- **Crashlytics**로 확인한 **WKWebView** Delegate 강제 언래핑 **주간 5,000건 이상의 Crash**를 병합 전 전임자 PR의 가설로는 동일한 Crash가 발생하지 않아 코드를 추적하여 동일 Crash 재현 및 원인 해결 (2026-10 비버웍스: 모니터링 도구 명시 목적의 변형. 원문은 아래)

**React Native 등 크로스플랫폼 (우대)**
- **Redux**로 앱 전역 상태 관리
- **react-native-vision-camera**의 Android 빌드 오류(Unresolved reference: resolveView)를 메서드 이름 기반 동적 호출로 바꿔 해결하고 [오픈소스 PR 제출](https://github.com/mrousavy/react-native-vision-camera/pull/1318)

**CI/CD·앱 배포 운영 자동화 (우대)**
- iOS/Android로 분리돼 있던 GitHub CI/CD를 **Fastlane 기반으로 통합**
- [빌드 캐시 적용](https://toyboy2.medium.com/how-to-deploy-react-native-app-all-in-one-click-part1-54362deaeda2)으로 **배포 소요 시간 50% 감축**

**대용량·실시간 안정성 (WebSocket 시세)**
- 대량 동시 접속 시 서버 과부하를 줄이기 위한 **대기열(Queue) 기능** 구현으로 트래픽 급증 구간 안정성 확보
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(+위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여

## 공백 (이력서로 메우기 어려운 것)
- 금융·증권 도메인, HTS/MTS 경험 없음
- WebSocket 실시간 시세·차트 UI 경험 없음
- Lua Script, React+Next.js, 모노레포·디자인시스템 경험 없음
