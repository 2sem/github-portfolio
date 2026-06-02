# EMS (Easy Monitoring System) – 통합모니터링시스템

- id: ems
- period: 2009.09 ~ 2009.10
- type: Desktop App
- role: all
- lang: VB
- OS: Windows
- goal: 터미널 프로그램을 여러 개 띄워놓고 화면에 분산 배치해서 감시용도로 사용하는 경우 PC를 재시작하면 각 터미널 프로그램들을 다시 띄워서 재배치해야 되는 불편함을 개선하기 위함

#### features

- MDI형태로 터미널을 배치 및 위치 저장
- 터미널별 접속 정보 설정
- 매크로 기능을 통한 자동 접속 기능

#### story

IDC 운영실에서 상황조장이 Terminal 프로그램을 작게 여러 창을 띄워 놓고 모니터링하는 것을 보고 생각난 아이디어를 구현. Telnet통신부분은 기존 운영실 모니터링 프로그램과 Telnet 프로토콜을 참고하였고 다행히도 대학 때 개인과제로 Telnet 기반의 프로그램을 만들어 본적이 있어서 도움이 되었음. 여러 사용자가 사용할 수 있도록 XML 파일로 환경설정 파일을 생성하고 실행 시 저장해둔 환경설정을 선택해서 사용할 수 있도록 함.

#### achievement

- RFC 문서 등을 보면서 Telnet Protocol에 대해 더욱 깊게 알게 됨

#### screenshots

- 0909-command-options.jpeg: 터미널 명령어 Options 
- 0909-achitecture.jpeg: MDI 창 구조

#### docs

- 0909-presentation.pptx: 중간 발표 자료
