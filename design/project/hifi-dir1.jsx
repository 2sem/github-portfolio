// hifi-dir1.jsx — Direction 1: "Terminal" (dark, mono-forward)
(function () {
  if (typeof document !== 'undefined' && !document.getElementById('d1-styles')) {
    const s = document.createElement('style');
    s.id = 'd1-styles';
    s.textContent = `
    .d1{ --bg:#0b0e0c; --panel:#11150f; --panel2:#0e120d; --line:rgba(120,220,160,.14);
      --ink:#d9e2d4; --soft:#7f8c7a; --accent:#34d986; --accentdim:rgba(52,217,134,.13);
      width:100%; height:100%; background:var(--bg); color:var(--ink); overflow:hidden;
      font-family:"Space Grotesk",system-ui,sans-serif; position:relative; }
    .d1 *{ box-sizing:border-box; }
    .d1::before{ content:""; position:absolute; inset:0; pointer-events:none; z-index:0;
      background:radial-gradient(1200px 360px at 78% -8%, rgba(52,217,134,.10), transparent 60%); }
    .d1 .mono{ font-family:"JetBrains Mono",monospace; }
    .d1 .topbar{ position:relative; z-index:2; height:52px; display:flex; align-items:center; gap:14px;
      padding:0 18px; border-bottom:1px solid var(--line); background:var(--panel2); }
    .d1 .dots{ display:flex; gap:7px; }
    .d1 .dots i{ width:11px; height:11px; border-radius:50%; display:block; }
    .d1 .path{ font-family:"JetBrains Mono",monospace; font-size:13px; color:var(--soft); }
    .d1 .path b{ color:var(--accent); font-weight:500; }
    .d1 .tb-right{ margin-left:auto; display:flex; align-items:center; gap:10px; }
    .d1 .pill{ font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--soft);
      border:1px solid var(--line); border-radius:7px; padding:5px 10px; display:flex; align-items:center; gap:7px; }
    .d1 .pill .badge{ background:var(--accent); color:#04130b; border-radius:20px; padding:0 6px; font-weight:700; }
    .d1 .body{ position:relative; z-index:1; display:grid; grid-template-columns:262px 1fr; height:calc(100% - 52px); }
    .d1 .side{ border-right:1px solid var(--line); padding:24px 18px; display:flex; flex-direction:column; gap:18px; background:var(--panel2); }
    .d1 .avatar{ width:60px; height:60px; border-radius:12px; border:1px solid var(--line);
      background:linear-gradient(135deg,#15321f,#0c1610); display:flex; align-items:center; justify-content:center;
      font-family:"JetBrains Mono",monospace; color:var(--accent); font-size:22px; }
    .d1 .nm{ font-size:19px; font-weight:600; letter-spacing:-.3px; }
    .d1 .role{ font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--soft); margin-top:3px; }
    .d1 .nav{ display:flex; flex-direction:column; gap:3px; margin-top:4px; }
    .d1 .nav a{ font-family:"JetBrains Mono",monospace; font-size:13.5px; color:var(--soft); text-decoration:none;
      padding:7px 10px; border-radius:7px; display:flex; gap:9px; align-items:center; }
    .d1 .nav a .pre{ color:var(--accent); opacity:.6; }
    .d1 .nav a.on{ background:var(--accentdim); color:var(--ink); }
    .d1 .nav a.on .pre{ opacity:1; }
    .d1 .side .div{ height:1px; background:var(--line); }
    .d1 .links{ display:flex; flex-direction:column; gap:8px; }
    .d1 .links a{ font-family:"JetBrains Mono",monospace; font-size:12.5px; color:var(--soft); text-decoration:none; }
    .d1 .avail{ font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--soft); display:flex; align-items:center; gap:8px; }
    .d1 .avail .dot{ width:8px; height:8px; border-radius:50%; background:var(--accent); box-shadow:0 0 8px var(--accent); }
    .d1 .btn{ font-family:"JetBrains Mono",monospace; font-size:12.5px; border:1px solid var(--accent); color:var(--accent);
      background:transparent; border-radius:8px; padding:9px 12px; text-align:center; cursor:pointer; }
    .d1 .main{ padding:30px 34px; overflow:hidden; }
    .d1 .klabel{ font-family:"JetBrains Mono",monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--soft); }
    .d1 h1{ font-size:38px; font-weight:600; letter-spacing:-1px; margin:10px 0 0; line-height:1.05; }
    .d1 h1 .cur{ display:inline-block; width:12px; height:30px; background:var(--accent); margin-left:6px; transform:translateY(4px); }
    .d1 .bio{ color:var(--soft); max-width:62ch; margin-top:12px; font-size:15px; line-height:1.5; }
    .d1 .stats{ display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-top:24px; }
    .d1 .stat{ border:1px solid var(--line); border-radius:12px; padding:16px; background:var(--panel); }
    .d1 .stat .num{ font-size:32px; font-weight:600; letter-spacing:-1px; }
    .d1 .stat .num span{ color:var(--accent); }
    .d1 .stat .cap{ font-family:"JetBrains Mono",monospace; font-size:11px; color:var(--soft); margin-top:4px; }
    .d1 .tags{ display:flex; flex-wrap:wrap; gap:9px; margin-top:18px; }
    .d1 .tag{ font-family:"JetBrains Mono",monospace; font-size:12.5px; color:var(--accent);
      border:1px solid var(--accentdim); background:var(--accentdim); border-radius:7px; padding:5px 10px; }
    .d1 .filter{ margin-top:28px; border:1px solid var(--line); border-radius:12px; background:var(--panel); padding:14px 16px; }
    .d1 .cmd{ font-family:"JetBrains Mono",monospace; font-size:13.5px; display:flex; align-items:center; gap:10px; color:var(--ink); }
    .d1 .cmd .pr{ color:var(--accent); }
    .d1 .cmd .ph{ color:var(--soft); }
    .d1 .cmd .k{ margin-left:auto; color:var(--soft); border:1px solid var(--line); border-radius:5px; padding:1px 7px; font-size:11px; }
    .d1 .frow{ display:flex; flex-wrap:wrap; gap:8px; margin-top:12px; align-items:center; }
    .d1 .chip{ font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--soft); border:1px solid var(--line); border-radius:7px; padding:4px 9px; }
    .d1 .chip.on{ color:var(--accent); border-color:var(--accentdim); background:var(--accentdim); }
    .d1 .frow .res{ margin-left:auto; font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--soft); }
    .d1 .sec-h{ display:flex; align-items:baseline; gap:12px; margin:30px 0 14px; }
    .d1 .sec-h .h{ font-family:"JetBrains Mono",monospace; font-size:15px; color:var(--accent); }
    .d1 .sec-h .when{ font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--soft); }
    .d1 .cards{ display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
    .d1 .card{ border:1px solid var(--line); border-radius:12px; overflow:hidden; background:var(--panel); }
    .d1 .card .shot{ height:124px; border-bottom:1px solid var(--line); position:relative;
      background:repeating-linear-gradient(45deg,#0f140e,#0f140e 8px,#0c100b 8px,#0c100b 16px); display:flex; align-items:center; justify-content:center; }
    .d1 .card .shot span{ font-family:"JetBrains Mono",monospace; font-size:11px; color:var(--soft); border:1px solid var(--line); border-radius:5px; padding:2px 7px; }
    .d1 .card .cb{ padding:13px 14px; }
    .d1 .card .t{ font-size:16px; font-weight:600; }
    .d1 .card .m{ font-family:"JetBrains Mono",monospace; font-size:11.5px; color:var(--soft); margin-top:4px; }
    .d1 .card .add{ font-family:"JetBrains Mono",monospace; font-size:11.5px; color:var(--accent); margin-top:11px; display:inline-block; border:1px solid var(--accentdim); border-radius:6px; padding:3px 9px; }
    `;
    document.head.appendChild(s);
  }

  function Dir1() {
    return (
      <div className="d1">
        <div className="topbar">
          <div className="dots"><i style={{background:'#e0564f'}}></i><i style={{background:'#e0b84f'}}></i><i style={{background:'#34d986'}}></i></div>
          <span className="path">~/portfolio <b>$</b> <span style={{opacity:.6}}>./run --layout=A</span></span>
          <div className="tb-right">
            <span className="pill">◑ theme:auto</span>
            <span className="pill">resume <span className="badge">3</span></span>
          </div>
        </div>
        <div className="body">
          <aside className="side">
            <div className="avatar mono">&gt;_</div>
            <div>
              <div className="nm">Your Name</div>
              <div className="role">senior_software_engineer</div>
            </div>
            <nav className="nav">
              <a className="on"><span className="pre">01</span> summary</a>
              <a><span className="pre">02</span> projects</a>
              <a><span className="pre">03</span> skills</a>
              <a><span className="pre">04</span> contact</a>
            </nav>
            <div className="div"></div>
            <div className="links">
              <a>↗ github.com/handle</a>
              <a>↗ linkedin.com/in/handle</a>
              <a>✉ you@email.com</a>
            </div>
            <div className="avail"><span className="dot"></span> open_to_work</div>
            <div style={{flex:1}}></div>
            <div className="btn">⬇ download résumé</div>
          </aside>

          <main className="main">
            <div className="klabel">// 01 — summary</div>
            <h1>I build reliable<br/>web &amp; mobile products<span className="cur"></span></h1>
            <p className="bio">One-line bio placeholder — what you do, your focus areas, and what you're looking for. Written to be skimmed by a recruiter in seconds.</p>

            <div className="stats">
              <div className="stat"><div className="num">6<span>y</span></div><div className="cap">experience</div></div>
              <div className="stat"><div className="num">42</div><div className="cap">projects_shipped</div></div>
              <div className="stat"><div className="num">23</div><div className="cap">skills_tools</div></div>
              <div className="stat"><div className="num">5</div><div className="cap">highlights</div></div>
            </div>

            <div className="tags">
              <span className="tag">#open-source-maintainer</span>
              <span className="tag">#conf-speaker</span>
              <span className="tag">#1M+-users</span>
              <span className="tag">#led-team-of-5</span>
            </div>

            <div className="filter">
              <div className="cmd"><span className="pr">$</span> grep <span className="ph">projects, or type a tag…</span> <span className="k">⌘K</span></div>
              <div className="frow">
                <span className="chip on">platform:web</span>
                <span className="chip">platform:ios</span>
                <span className="chip on">#react</span>
                <span className="chip">lang:ts</span>
                <span className="chip">stack:node</span>
                <span className="res">// 12 results · sort:recent</span>
              </div>
            </div>

            <div className="sec-h"><span className="h">## Acme Corp</span><span className="when">2023 — now · senior dev · 7 projects</span></div>
            <div className="cards">
              {[['Atlas','2024 · web · react'],['Beacon','2023 · ios · swift'],['Halo','2023 · web · ts']].map(p=>(
                <div className="card" key={p[0]}>
                  <div className="shot"><span>screenshot</span></div>
                  <div className="cb"><div className="t">{p[0]}</div><div className="m">{p[1]}</div><div className="add">+ resume</div></div>
                </div>
              ))}
            </div>

            <div className="sec-h"><span className="h">## Startup Inc</span><span className="when">2020 — 2023 · 5 projects</span></div>
            <div className="cards">
              {[['Comet','2022 · web · ts'],['Drift','2021 · android · kotlin']].map(p=>(
                <div className="card" key={p[0]}>
                  <div className="shot"><span>screenshot</span></div>
                  <div className="cb"><div className="t">{p[0]}</div><div className="m">{p[1]}</div><div className="add">+ resume</div></div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }
  window.Dir1 = Dir1;
})();
