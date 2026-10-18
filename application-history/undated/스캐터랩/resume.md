# 스캐터랩(Scatterlab) · Mobile Engineer (React Native) 지원 재료

> 상세 이력서가 아니라 JD에 맞춰 가져온 재료입니다. 문장은 `master.md` 불릿 뱅크 원문입니다. 매일 이 재료로 이력서를 작성하세요.

## 필터 판별
- 업무 동사: 구현·운영 중심 (🔴)
- 팀 상황: 연차 3년+ 요건, 시니어 자리 아닐 가능성 (🔴)
- 우대 수준: 성능 최적화·Native 모듈 (🟡)
- 신호: 1개 이하 (지원 비권장, 레벨 확인 후 판단)

## 베이스
② React Native / 크로스플랫폼

## JD 항목별 근거 불릿 후보

**RN 모바일 서비스 개발·운영**
- **Redux**로 앱 전역 상태 관리
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(+위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여

**Kotlin/Swift Native 모듈 개발**
- **react-native-vision-camera**의 Android 빌드 오류(Unresolved reference: resolveView)를 메서드 이름 기반 동적 호출로 바꿔 해결하고 [오픈소스 PR 제출](https://github.com/mrousavy/react-native-vision-camera/pull/1318)
- Naver Map SDK **Native Bridge**에 [축척 계산 로직 추가](https://github.com/team-olulo/react-native-naver-map/pull/7)해 지도 자동 Zoom(길안내) 구현
- Android Build-tools 31 이후 dx를 찾지 못해 로컬 빌드가 실패하던 문제를 **d8 링크 생성 Gradle 스크립트**로 해결하고 직접 등록한 [공개 이슈](https://github.com/channel-io/react-native-channel-io/issues/109)에 해결 방법 공유

**모바일 성능 최적화**
- BLE 통신 로직 최적화: Library 옵션 및 제조사 펌웨어 조정 후 스캔·연결 소요 시간 지표화로 개선 검증
- 구역 정보 API 호출 **4회→1회로 데이터 사용량 최소 75% 절감**(+위치 데이터 캐싱), 네트워크 트래픽 최적화에 기여
- **Instruments**로 메모리 릭 탐지, Memory Graph로 순환 참조 해결

**협업·프로세스**
- 대형 MR 리뷰 불가 문제를 Jira에 Epic을 도입하고 Subtask 단위 MR + [**MR Template**](https://toyboy2.medium.com/automate-your-tasks-with-mr-template-using-gitlab-commands-b1af5c84ce7b) 적용으로 해결, SK 매니저 만족으로 타 프로젝트에도 전파
- PR Template·Jira Workflow로 코드 리뷰·업무 프로세스 표준화

## 공백 (이력서로 메우기 어려운 것)
- 채팅·A/B 테스트·유입 기능 도메인 경험 없음
- 연차 요건(3년+) 대비 오버스펙, 면접·협상 단계 과제
