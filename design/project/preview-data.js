// preview-data.js — DATA converted from data.toon for the standalone refine-preview.
// Bilingual fields kept as {en, ko}; resolve() in the preview picks the active lang.
window.DATA = {
  name: "Your Name",
  role: { en: "senior_software_engineer", ko: "시니어_소프트웨어_엔지니어" },
  tagline: { en: "I build reliable\nweb & mobile products", ko: "신뢰할 수 있는\n웹·모바일 제품을 만듭니다" },
  bio: {
    en: "Bio placeholder — what you do, your focus areas, and what you're looking for. Written to be skimmed by a recruiter in seconds.",
    ko: "자기소개 자리 — 하는 일, 집중 분야, 찾고 있는 기회. 채용 담당자가 몇 초 만에 훑어볼 수 있도록 작성."
  },
  github: "https://github.com/2sem",
  linkedin: "https://linkedin.com/in/handle",
  email: "kofggm@gmail.com",
  resume: "#",
  contactMsg: {
    en: "Let's talk. Open to new opportunities and interesting projects.",
    ko: "편하게 연락 주세요. 새로운 기회와 흥미로운 프로젝트를 환영합니다."
  },
  stats: [
    { num: 6, em: "y", cap: { en: "experience", ko: "경력" } },
    { num: 42, cap: { en: "projects_shipped", ko: "출시_프로젝트" } },
    { num: 23, cap: { en: "skills_tools", ko: "기술_도구" } },
    { num: 5, cap: { en: "highlights", ko: "주요_성과" } }
  ],
  tags: [
    { en: "#open-source-maintainer", ko: "#오픈소스-메인테이너" },
    { en: "#conf-speaker", ko: "#컨퍼런스-발표자" },
    { en: "#1M+-users", ko: "#100만+-사용자" },
    { en: "#led-team-of-5", ko: "#5인-팀-리드" }
  ],
  companies: [
    {
      id: "credif", name: "CREDiF", when: "2009 — 2017",
      role: { en: "Developer", ko: "개발자" }, cur: false,
      projects: [
        {
          id: "ems", name: "EMS", meta: "2009.09 · Desktop · VB",
          tags: ["platform:windows", "lang:vb"],
          desc: { en: "MDI terminal monitor for IDC ops — saves window positions and per-terminal connection settings so nothing needs repositioning after restart.", ko: "IDC 운영을 위한 MDI 터미널 모니터 — 창 위치와 터미널별 접속 설정을 저장해 재시작 후 재배치가 필요 없습니다." },
          role: { en: "Sole developer. Designed MDI layout engine, implemented Telnet protocol from RFC, built XML-based multi-user config system.", ko: "단독 개발. MDI 레이아웃 엔진 설계, RFC 기반 Telnet 프로토콜 구현, XML 기반 다중 사용자 설정 시스템 구축." },
          achievement: { en: "Gained deep understanding of the Telnet protocol by working through the RFCs.", ko: "RFC 문서를 직접 읽으며 Telnet 프로토콜을 깊이 이해하게 됨." },
          tech: ["VB", "Telnet", "XML"],
          diagrams: [
            "graph LR\n  subgraph Form\n    Main --> User\n    Main --> Setting\n    Main --> Monitor\n  end\n  subgraph Module\n    Parse\n    Telnet\n    XML\n  end\n  subgraph Servers\n    S1[Server1]\n    S2[Server2]\n    SN[...]\n  end\n  subgraph Users\n    U1[User1.CFG]\n    U2[User2.CFG]\n    UN[...]\n  end\n  Form <--> Module\n  Telnet --> Servers\n  XML --> Users",
            "graph TD\n  Server --> Monitor\n  Monitor --> Commands\n  Commands --> CE[Case Execute]\n  Commands --> Cmd[Command]\n  Commands --> CS[Case Success]\n  Commands --> LC[Loop Count]\n  Commands --> LL[Loop Limit]\n  Commands --> LD[Loop Delay]"
          ],
          images: [], links: []
        },
        {
          id: "mobile-payment-gateway", name: "Mobile Payment Gateway", meta: "2009.11 · Backend · C",
          tags: ["platform:linux", "lang:c"],
          desc: { en: "Relay gateway for an encrypted micro-payment protocol. Existing relay servers couldn't handle the new encrypted messages, so it checks only a minimal header and forwards the encrypted payload to the payment system as-is, returning the response unchanged.", ko: "소액결제 전문에 암호화가 적용되며 기존 중계 서버로 처리할 수 없게 되자, 최소 헤더만 확인하고 암호화된 페이로드를 그대로 결제 시스템에 전달·응답하도록 재개발한 중계 게이트웨이." },
          role: { en: "Sole developer. Rebuilt the entire relay logic on the company's C/Linux framework; the framework handled the underlying TCP/IP networking.", ko: "단독 개발. 사내 C/Linux 프레임워크 기반으로 통신부를 제외한 중계 로직 전체를 신규 구현. TCP/IP 통신은 프레임워크가 담당." },
          achievement: { en: "Learned the company's in-house Linux C framework.", ko: "사내 Linux C 프레임워크 사용법을 익힘." },
          tech: ["C", "Linux", "Socket"],
          diagrams: ["sequenceDiagram\n  autonumber\n  participant Client as Client (Partner)\n  participant GW as Gateway (중계 서버)\n  participant PG as Payment System (소액결제)\n  Client->>GW: Encrypted Payment Request\n  Note over GW: Only minimal header is checked\n  GW->>PG: Forward payload as-is\n  PG-->>GW: Payment Response\n  GW-->>Client: Forward response as-is"],
          images: [], links: []
        },
        {
          id: "twophone", name: "KT TwoPhone", meta: "2010.01 – 2017.02 · Backend · C",
          tags: ["platform:unix", "lang:c"],
          desc: { en: "Backend for KT's TwoPhone service — calls KT infrastructure to feed data into the service's web UI. Stores data in per-phone-number folders holding paired-number records instead of a DBMS, and handles SMS dispatch.", ko: "KT 투폰 서비스 백엔드 — KT 인프라를 호출해 서비스 웹 UI에 데이터를 제공. DBMS 대신 전화번호 폴더에 이중 전화번호 정보를 담는 파일 방식으로 데이터를 저장하고 SMS 발송을 처리." },
          role: { en: "Sole maintainer and operator for ~7 years. Carried out the N-Step transition and the IDC migration while keeping the service running.", ko: "약 7년간 단독 유지보수·운영. 서비스를 지속 운영하며 N-Step 전환과 IDC 이전 작업을 수행." },
          tech: ["C", "Unix", "SMS"], diagrams: [], images: [], links: []
        },
        {
          id: "proj-b", name: "Project B", meta: "2015 · Web · Java",
          tags: ["platform:web", "lang:java"],
          desc: { en: "Short description of the project. What problem it solved and what you built.", ko: "프로젝트 간단 설명. 어떤 문제를 풀었고 무엇을 만들었는지." },
          role: { en: "Full-stack development across 3 modules.", ko: "3개 모듈에 걸친 풀스택 개발." },
          tech: ["Java", "Spring", "Oracle"], diagrams: [], images: [], links: []
        },
        {
          id: "proj-c", name: "Project C", meta: "2013 · iOS · ObjC",
          tags: ["platform:ios", "lang:objc"],
          desc: { en: "First mobile project. Delivered to 10k+ internal users.", ko: "첫 모바일 프로젝트. 1만+ 내부 사용자에게 제공." },
          role: { en: "Built from scratch, sole iOS engineer.", ko: "처음부터 단독 iOS 엔지니어로 개발." },
          tech: ["Obj-C", "CoreData", "AFNetworking"], diagrams: [], images: [], links: []
        }
      ]
    },
    {
      id: "freelance", name: "Freelance", when: "2017 — now",
      role: { en: "iOS Developer", ko: "iOS 개발자" }, cur: true,
      projects: [
        {
          id: "proj-d", name: "App D", meta: "2023 · iOS · Swift",
          tags: ["platform:ios", "lang:swift"],
          desc: { en: "Description of the app. Users, impact, key features.", ko: "앱 설명. 사용자, 임팩트, 핵심 기능." },
          role: { en: "Solo developer — design to App Store.", ko: "단독 개발 — 디자인부터 앱스토어 출시까지." },
          tech: ["Swift", "SwiftUI", "Firebase"], diagrams: [], images: [],
          links: [{ label: "↗ AppStore", href: "#" }]
        },
        {
          id: "proj-e", name: "App E", meta: "2021 · iOS · Swift",
          tags: ["platform:ios", "lang:swift", "framework:swiftui"],
          desc: { en: "Description of the app.", ko: "앱 설명." },
          role: { en: "Built core features and led team of 2 contractors.", ko: "핵심 기능 개발 및 외주 2인 팀 리드." },
          tech: ["Swift", "SwiftUI", "Combine"], diagrams: [], images: [], links: []
        },
        {
          id: "proj-f", name: "Web Dashboard", meta: "2022 · Web · React",
          tags: ["platform:web", "framework:react", "lang:ts"],
          desc: { en: "Internal analytics dashboard with real-time data and complex filtering.", ko: "실시간 데이터와 복합 필터링을 지원하는 내부 분석 대시보드." },
          role: { en: "Front-end architecture and component library.", ko: "프런트엔드 아키텍처 및 컴포넌트 라이브러리 담당." },
          tech: ["React", "TypeScript", "Node.js"], diagrams: [], images: [], links: []
        }
      ]
    }
  ],
  skills: [
    { group: { en: "Languages", ko: "언어" }, chips: ["Swift", "TypeScript", "JavaScript", "SQL", "PHP", "Bash"] },
    { group: { en: "Frameworks", ko: "프레임워크" }, chips: ["SwiftUI", "UIKit", "React", "Node.js", "Next.js"] },
    { group: { en: "Tools / Infra", ko: "도구 / 인프라" }, chips: ["Xcode", "Tuist", "Git", "Docker", "AWS", "Figma", "CI/CD"] }
  ]
};
