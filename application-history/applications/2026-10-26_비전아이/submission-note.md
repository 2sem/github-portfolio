# 비전아이 iOS 앱 개발자 · 제출 메모

- 입사 가능 시기: 2027년 1월 이후 (2026년 11월부터 신규 프로젝트 참여 예정으로, 해당 프로젝트 종료 후 입사 가능)
- 희망 연봉: 면접 후 협의 (SK AX 프리랜서 최종 단가 월 1,000만원을 기준으로 협의 희망)
  - 킥고잉(올룰로) 정규직 연봉 6,500만원
  - SK AX 프리랜서 단가: 월 700만원(시작) → 900만원(T world) → 1,000만원(AI Layer SDK)

## BLE / CoreBluetooth 개발 경험
- 킥고잉(올룰로): React Native 앱에서 react-native-ble-plx(내부적으로 CoreBluetooth)로 킥보드 기기와 BLE 스캔·연결
- 라이브러리 옵션과 제조사 펌웨어 조정 후 스캔·연결 소요 시간을 지표화해 개선 검증
- ble-plx가 Xcode 13 호환 Pod을 참조하지 않아 생긴 빌드 오류를 Pod·라이브러리 fork 후 CocoaPods·npm 배포로 해결
- ble-plx의 iOS 네이티브 브리지(CoreBluetooth 래퍼) 코드를 직접 분석해 스캔·연결 동작과 빌드 이슈 원인을 파악
- 앱 단독 CoreBluetooth 직접 구현 경험은 없음. iOS 5년+ 경험으로 빠르게 적응 가능

## App Store 출시·운영 경험
- 개인 iOS 앱 다수 출시·운영 (광고 수익 월 $800+), 빅토익보카 StoreKit 인앱결제, 인앱 리뷰 유도로 평점 4.1 → 4.7
