// hifi-dir3.jsx — Direction 3: "Minimal mono" (light, airy, hairlines)
(function () {
  if (typeof document !== 'undefined' && !document.getElementById('d3-styles')) {
    const s = document.createElement('style');
    s.id = 'd3-styles';
    s.textContent = `
    .d3{ --bg:#f7f7f4; --paper:#ffffff; --ink:#1a1a18; --soft:#8a8a82; --line:#e3e3dc;
      --accent:#1f8a5b;
      width:100%; height:100%; background:var(--bg); color:var(--ink); overflow:hidden;
      font-family:"Space Grotesk",system-ui,sans-serif; display:grid; grid-template-columns:250px 1fr; }
    .d3 *{ box-sizing:border-box; }
    .d3 .mono{ font-family:"JetBrains Mono",monospace; }
    .d3 .ul{ font-family:"JetBrains Mono",monospace; font-size:10.5px; letter-spacing:2.5px; text-transform:uppercase; color:var(--soft); }
    .d3 .side{ border-right:1px solid var(--line); padding:40px 28px; display:flex; flex-direction:column; gap:26px; }
    .d3 .avatar{ width:52px; height:52px; border-radius:50%; border:1px solid var(--line); background:var(--paper); }
    .d3 .nm{ font-size:20px; font-weight:600; letter-spacing:-.4px; }
    .d3 .role{ font-family:"JetBrains Mono",monospace; font-size:11.5px; color:var(--soft); margin-top:4px; letter-spacing:.3px; }
    .d3 .nav{ display:flex; flex-direction:column; gap:2px; }
    .d3 .nav a{ display:flex; align-items:baseline; gap:12px; text-decoration:none; color:var(--ink); padding:8px 0; font-size:15px; border-bottom:1px solid transparent; }
    .d3 .nav a .n{ font-family:"JetBrains Mono",monospace; font-size:11px; color:var(--soft); width:18px; }
    .d3 .nav a.on{ color:var(--accent); }
    .d3 .nav a.on .n{ color:var(--accent); }
    .d3 .side .links{ display:flex; flex-direction:column; gap:10px; }
    .d3 .side .links a{ font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--soft); text-decoration:none; }
    .d3 .avail{ font-family:"JetBrains Mono",monospace; font-size:11.5px; color:var(--ink); display:flex; align-items:center; gap:8px; }
    .d3 .avail .dot{ width:7px; height:7px; border-radius:50%; background:var(--accent); }
    .d3 .btn{ font-family:"JetBrains Mono",monospace; font-size:12px; border:1px solid var(--ink); border-radius:30px; padding:10px 14px; text-align:center; cursor:pointer; }
    .d3 .main{ padding:40px 48px; overflow:hidden; }
    .d3 .topnote{ display:flex; justify-content:space-between; align-items:center; }
    .d3 .topnote .pill{ font-family:"JetBrains Mono",monospace; font-size:11px; color:var(--soft); border:1px solid var(--line); border-radius:30px; padding:5px 11px; }
    .d3 h1{ font-size:46px; font-weight:600; letter-spacing:-1.6px; line-height:1.04; margin:18px 0 0; max-width:16ch; }
    .d3 .bio{ color:var(--soft); max-width:54ch; margin-top:16px; font-size:16px; line-height:1.55; }
    .d3 .stats{ display:grid; grid-template-columns:repeat(4,1fr); margin-top:36px; border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
    .d3 .stat{ padding:22px 0; border-right:1px solid var(--line); }
    .d3 .stat:last-child{ border-right:none; }
    .d3 .stat .num{ font-size:40px; font-weight:600; letter-spacing:-1.6px; }
    .d3 .stat .num i{ color:var(--accent); font-style:normal; font-size:22px; }
    .d3 .stat .cap{ font-family:"JetBrains Mono",monospace; font-size:10.5px; letter-spacing:1px; text-transform:uppercase; color:var(--soft); margin-top:7px; }
    .d3 .tags{ display:flex; flex-wrap:wrap; gap:10px; margin-top:24px; }
    .d3 .tag{ font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--ink); padding:5px 0; }
    .d3 .tag::before{ content:"+ "; color:var(--accent); }
    .d3 .sec-top{ display:flex; align-items:baseline; justify-content:space-between; margin:46px 0 16px; }
    .d3 .filter{ display:flex; align-items:center; gap:14px; border-bottom:1px solid var(--ink); padding-bottom:12px; }
    .d3 .filter .q{ font-size:18px; color:var(--soft); flex:1; }
    .d3 .filter .k{ font-family:"JetBrains Mono",monospace; font-size:11px; color:var(--soft); border:1px solid var(--line); border-radius:5px; padding:2px 7px; }
    .d3 .frow{ display:flex; flex-wrap:wrap; gap:9px; align-items:center; margin-top:14px; }
    .d3 .chip{ font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--soft); border:1px solid var(--line); border-radius:30px; padding:5px 12px; cursor:pointer; }
    .d3 .chip.on{ color:var(--accent); border-color:var(--accent); }
    .d3 .frow .res{ margin-left:auto; font-family:"JetBrains Mono",monospace; font-size:11.5px; color:var(--soft); }
    .d3 .co-row{ display:flex; align-items:baseline; gap:14px; margin:38px 0 16px; }
    .d3 .co-row .co{ font-size:20px; font-weight:600; letter-spacing:-.4px; }
    .d3 .co-row .when{ font-family:"JetBrains Mono",monospace; font-size:11.5px; color:var(--soft); }
    .d3 .co-row .line{ flex:1; height:1px; background:var(--line); }
    .d3 .cards{ display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
    .d3 .card .shot{ height:150px; border:1px solid var(--line); border-radius:4px; position:relative;
      background:repeating-linear-gradient(45deg,#f1f1ec,#f1f1ec 9px,#f7f7f4 9px,#f7f7f4 18px); }
    .d3 .card .shot span{ position:absolute; left:50%; bottom:10px; transform:translateX(-50%);
      font-family:"JetBrains Mono",monospace; font-size:10.5px; color:var(--soft); background:var(--paper); border:1px solid var(--line); border-radius:4px; padding:2px 8px; }
    .d3 .card .t{ font-size:17px; font-weight:600; margin-top:12px; display:flex; justify-content:space-between; align-items:center; }
    .d3 .card .t .add{ font-family:"JetBrains Mono",monospace; font-size:11px; color:var(--accent); border:1px solid var(--accent); border-radius:30px; padding:2px 9px; }
    .d3 .card .m{ font-family:"JetBrains Mono",monospace; font-size:11px; color:var(--soft); margin-top:5px; letter-spacing:.3px; }
    `;
    document.head.appendChild(s);
  }

  function Dir3() {
    return (
      <div className="d3">
        <aside className="side">
          <div className="avatar"></div>
          <div>
            <div className="nm">Your Name</div>
            <div className="role">Senior Software Engineer</div>
          </div>
          <nav className="nav">
            <a className="on"><span className="n">01</span> Summary</a>
            <a><span className="n">02</span> Projects</a>
            <a><span className="n">03</span> Skills</a>
            <a><span className="n">04</span> Contact</a>
          </nav>
          <div style={{flex:1}}></div>
          <div className="links">
            <a>↗ GitHub</a>
            <a>↗ LinkedIn</a>
            <a>✉ Email</a>
          </div>
          <div className="avail"><span className="dot"></span> Open to opportunities</div>
          <div className="btn">↓ Download résumé</div>
        </aside>

        <main className="main">
          <div className="topnote">
            <span className="ul">01 — Summary</span>
            <span className="pill">◑ theme:auto · resume (3)</span>
          </div>

          <h1>I build reliable web &amp; mobile products.</h1>
          <p className="bio">One-line bio placeholder — what you do, your focus areas, and what you're looking for. Written to be skimmed by a recruiter in seconds.</p>

          <div className="stats">
            <div className="stat"><div className="num">6<i>y</i></div><div className="cap">Experience</div></div>
            <div className="stat"><div className="num">42</div><div className="cap">Projects</div></div>
            <div className="stat"><div className="num">23</div><div className="cap">Skills</div></div>
            <div className="stat"><div className="num">5</div><div className="cap">Highlights</div></div>
          </div>

          <div className="tags">
            <span className="tag">Open-source maintainer</span>
            <span className="tag">Conference speaker</span>
            <span className="tag">Shipped to 1M+ users</span>
            <span className="tag">Led a team of 5</span>
          </div>

          <div className="sec-top"><span className="ul">02 — Projects</span><span className="ul">grouped by company</span></div>
          <div className="filter">
            <span className="q">Search projects, or type a tag…</span>
            <span className="k">⌘K</span>
          </div>
          <div className="frow">
            <span className="chip on">Web</span><span className="chip">iOS</span>
            <span className="chip on">react</span><span className="chip">TypeScript</span><span className="chip">Node</span>
            <span className="res">12 results · recent</span>
          </div>

          <div className="co-row"><span className="co">Acme Corp</span><span className="when">2023 — now · Senior Dev</span><span className="line"></span><span className="when">7 projects</span></div>
          <div className="cards">
            {[['Atlas','2024 · Web · React'],['Beacon','2023 · iOS · Swift'],['Halo','2023 · Web · TS']].map(p=>(
              <div className="card" key={p[0]}>
                <div className="shot"><span>screenshot</span></div>
                <div className="t">{p[0]}<span className="add">+ resume</span></div>
                <div className="m">{p[1]}</div>
              </div>
            ))}
          </div>

          <div className="co-row"><span className="co">Startup Inc</span><span className="when">2020 — 2023</span><span className="line"></span><span className="when">5 projects</span></div>
          <div className="cards">
            {[['Comet','2022 · Web · TS'],['Drift','2021 · Android · Kotlin']].map(p=>(
              <div className="card" key={p[0]}>
                <div className="shot"><span>screenshot</span></div>
                <div className="t">{p[0]}<span className="add">+ resume</span></div>
                <div className="m">{p[1]}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
  window.Dir3 = Dir3;
})();
