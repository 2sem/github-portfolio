// hifi-dir2.jsx — Direction 2: "IDE" (light code-editor UI)
(function () {
  if (typeof document !== 'undefined' && !document.getElementById('d2-styles')) {
    const s = document.createElement('style');
    s.id = 'd2-styles';
    s.textContent = `
    .d2{ --bg:#ffffff; --side:#f5f6f7; --bar:#ebedef; --line:#e2e5e9;
      --ink:#1f2328; --soft:#6e7781; --accent:#1f8a5b; --sel:rgba(31,138,91,.10);
      --kw:#8250df; --str:#0a7d4f; --fn:#0969da; --num:#0550ae;
      width:100%; height:100%; background:var(--bg); color:var(--ink); overflow:hidden;
      font-family:"Space Grotesk",system-ui,sans-serif; display:flex; flex-direction:column; }
    .d2 *{ box-sizing:border-box; }
    .d2 .mono{ font-family:"JetBrains Mono",monospace; }
    .d2 .titlebar{ height:34px; background:var(--bar); border-bottom:1px solid var(--line);
      display:flex; align-items:center; gap:10px; padding:0 12px; flex:0 0 auto; }
    .d2 .titlebar .dots{ display:flex; gap:7px; }
    .d2 .titlebar .dots i{ width:11px; height:11px; border-radius:50%; }
    .d2 .titlebar .ttl{ font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--soft); margin:0 auto; }
    .d2 .titlebar .right{ font-family:"JetBrains Mono",monospace; font-size:11.5px; color:var(--soft); display:flex; gap:8px; align-items:center; }
    .d2 .titlebar .badge{ background:var(--accent); color:#fff; border-radius:20px; padding:0 6px; font-weight:700; }
    .d2 .wrap{ flex:1; display:grid; grid-template-columns:248px 1fr; min-height:0; }
    .d2 .explorer{ background:var(--side); border-right:1px solid var(--line); padding:12px 0; overflow:hidden; }
    .d2 .ex-h{ font-family:"JetBrains Mono",monospace; font-size:10.5px; letter-spacing:1.5px; color:var(--soft); text-transform:uppercase; padding:4px 16px 10px; }
    .d2 .tree{ font-family:"JetBrains Mono",monospace; font-size:13px; }
    .d2 .tree .row{ display:flex; align-items:center; gap:7px; padding:5px 16px; color:var(--ink); cursor:pointer; }
    .d2 .tree .row:hover{ background:rgba(0,0,0,.04); }
    .d2 .tree .row.on{ background:var(--sel); color:var(--accent); }
    .d2 .tree .row.in{ padding-left:32px; }
    .d2 .tree .chev{ color:var(--soft); width:10px; }
    .d2 .tree .fdot{ width:8px; height:8px; border-radius:2px; flex:0 0 auto; }
    .d2 .ex-side{ margin-top:16px; border-top:1px solid var(--line); padding-top:14px; }
    .d2 .ex-side .lk{ display:block; font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--soft); text-decoration:none; padding:5px 16px; }
    .d2 .avail{ font-family:"JetBrains Mono",monospace; font-size:11.5px; color:var(--accent); padding:8px 16px 0; display:flex; align-items:center; gap:7px; }
    .d2 .avail .dot{ width:8px; height:8px; border-radius:50%; background:var(--accent); }
    .d2 .editor{ display:flex; flex-direction:column; min-width:0; }
    .d2 .tabs{ height:38px; background:var(--bar); border-bottom:1px solid var(--line); display:flex; flex:0 0 auto; }
    .d2 .tab{ display:flex; align-items:center; gap:8px; padding:0 16px; font-family:"JetBrains Mono",monospace; font-size:12.5px;
      color:var(--soft); border-right:1px solid var(--line); cursor:pointer; }
    .d2 .tab.on{ background:var(--bg); color:var(--ink); border-top:2px solid var(--accent); }
    .d2 .tab .fdot{ width:8px; height:8px; border-radius:2px; }
    .d2 .crumb{ font-family:"JetBrains Mono",monospace; font-size:11.5px; color:var(--soft); padding:7px 20px; border-bottom:1px solid var(--line); flex:0 0 auto; }
    .d2 .crumb b{ color:var(--ink); font-weight:500; }
    .d2 .content{ flex:1; display:flex; min-height:0; }
    .d2 .gutter{ flex:0 0 52px; padding:24px 0; text-align:right; font-family:"JetBrains Mono",monospace; font-size:12px; color:#c0c6cc; line-height:1.9; user-select:none; border-right:1px solid var(--line); }
    .d2 .gutter span{ display:block; padding-right:14px; }
    .d2 .doc{ flex:1; padding:24px 30px; overflow:hidden; }
    .d2 .klabel{ font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--soft); }
    .d2 .klabel .c{ color:var(--accent); }
    .d2 h1{ font-size:34px; font-weight:700; letter-spacing:-.8px; margin:8px 0 0; line-height:1.08; }
    .d2 .bio{ color:var(--soft); max-width:64ch; margin-top:10px; font-size:15px; line-height:1.5; }
    .d2 .stats{ display:grid; grid-template-columns:repeat(4,1fr); gap:0; margin-top:22px; border:1px solid var(--line); border-radius:10px; overflow:hidden; }
    .d2 .stat{ padding:16px; border-right:1px solid var(--line); }
    .d2 .stat:last-child{ border-right:none; }
    .d2 .stat .num{ font-size:30px; font-weight:700; letter-spacing:-1px; }
    .d2 .stat .num span{ color:var(--accent); }
    .d2 .stat .cap{ font-family:"JetBrains Mono",monospace; font-size:11px; color:var(--soft); margin-top:3px; }
    .d2 .tokens{ display:flex; flex-wrap:wrap; gap:8px; margin-top:16px; font-family:"JetBrains Mono",monospace; font-size:12.5px; }
    .d2 .tok{ border:1px solid var(--line); border-radius:7px; padding:4px 9px; background:#fafbfc; }
    .d2 .tok .k{ color:var(--kw); } .d2 .tok .s{ color:var(--str); }
    .d2 .filter{ margin-top:24px; border:1px solid var(--line); border-radius:10px; overflow:hidden; }
    .d2 .filter .search{ display:flex; align-items:center; gap:10px; padding:11px 14px; background:#fafbfc; border-bottom:1px solid var(--line); font-family:"JetBrains Mono",monospace; font-size:13px; color:var(--soft); }
    .d2 .filter .search .k{ margin-left:auto; border:1px solid var(--line); border-radius:5px; padding:1px 7px; font-size:11px; }
    .d2 .filter .frow{ display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding:12px 14px; }
    .d2 .chip{ font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--soft); border:1px solid var(--line); border-radius:7px; padding:4px 9px; cursor:pointer; }
    .d2 .chip.on{ color:var(--accent); border-color:var(--accent); background:var(--sel); }
    .d2 .frow .res{ margin-left:auto; font-family:"JetBrains Mono",monospace; font-size:11.5px; color:var(--soft); }
    .d2 .region{ display:flex; align-items:baseline; gap:10px; margin:26px 0 13px; font-family:"JetBrains Mono",monospace; }
    .d2 .region .chev{ color:var(--accent); }
    .d2 .region .co{ font-size:15px; font-weight:500; color:var(--ink); }
    .d2 .region .when{ font-size:11.5px; color:var(--soft); }
    .d2 .cards{ display:grid; grid-template-columns:repeat(3,1fr); gap:15px; }
    .d2 .card{ border:1px solid var(--line); border-radius:10px; overflow:hidden; background:var(--bg); }
    .d2 .card .shot{ height:120px; border-bottom:1px solid var(--line); position:relative;
      background:repeating-linear-gradient(45deg,#f5f6f7,#f5f6f7 8px,#eef0f2 8px,#eef0f2 16px); display:flex; align-items:center; justify-content:center; }
    .d2 .card .shot span{ font-family:"JetBrains Mono",monospace; font-size:11px; color:var(--soft); background:#fff; border:1px solid var(--line); border-radius:5px; padding:2px 7px; }
    .d2 .card .cb{ padding:12px 13px; }
    .d2 .card .t{ font-size:16px; font-weight:600; }
    .d2 .card .m{ font-family:"JetBrains Mono",monospace; font-size:11px; color:var(--soft); margin-top:4px; }
    .d2 .card .add{ font-family:"JetBrains Mono",monospace; font-size:11px; color:var(--accent); margin-top:10px; display:inline-block; border:1px solid var(--accent); border-radius:6px; padding:3px 9px; }
    .d2 .status{ height:26px; background:var(--accent); color:#fff; display:flex; align-items:center; gap:16px; padding:0 14px; flex:0 0 auto;
      font-family:"JetBrains Mono",monospace; font-size:11.5px; }
    .d2 .status .sp{ margin-left:auto; }
    `;
    document.head.appendChild(s);
  }

  function Dir2() {
    const file = (c) => <span className="fdot" style={{background:c}}></span>;
    return (
      <div className="d2">
        <div className="titlebar">
          <div className="dots"><i style={{background:'#e0564f'}}></i><i style={{background:'#e0b84f'}}></i><i style={{background:'#1f8a5b'}}></i></div>
          <span className="ttl">portfolio — summary.md</span>
          <span className="right">◑ theme:auto <span>resume <span className="badge">3</span></span></span>
        </div>

        <div className="wrap">
          <aside className="explorer">
            <div className="ex-h">Explorer</div>
            <div className="tree">
              <div className="row"><span className="chev">▾</span> {file('#1f8a5b')} portfolio</div>
              <div className="row in on">{file('#1f8a5b')} summary.md</div>
              <div className="row in">{file('#0969da')} projects.tsx</div>
              <div className="row in">{file('#8250df')} skills.json</div>
              <div className="row in">{file('#d2882f')} contact.ts</div>
            </div>
            <div className="ex-side">
              <a className="lk">↗ github.com/handle</a>
              <a className="lk">↗ linkedin.com/in/handle</a>
              <a className="lk">✉ you@email.com</a>
              <div className="avail"><span className="dot"></span> open_to_work</div>
            </div>
          </aside>

          <div className="editor">
            <div className="tabs">
              <div className="tab on">{file('#1f8a5b')} summary.md</div>
              <div className="tab">{file('#0969da')} projects.tsx</div>
              <div className="tab">{file('#8250df')} skills.json</div>
            </div>
            <div className="crumb">portfolio <b>›</b> summary.md <b>›</b> <span style={{color:'var(--accent)'}}>#overview</span></div>

            <div className="content">
              <div className="gutter">{Array.from({length:20}).map((_,i)=><span key={i}>{i+1}</span>)}</div>
              <div className="doc">
                <div className="klabel"><span className="c">{'//'}</span> 01 — summary</div>
                <h1>I build reliable web<br/>&amp; mobile products.</h1>
                <p className="bio">One-line bio placeholder — what you do, your focus areas, and what you're looking for. Written to be skimmed by a recruiter in seconds.</p>

                <div className="stats">
                  <div className="stat"><div className="num">6<span>y</span></div><div className="cap">experience</div></div>
                  <div className="stat"><div className="num">42</div><div className="cap">projects</div></div>
                  <div className="stat"><div className="num">23</div><div className="cap">skills</div></div>
                  <div className="stat"><div className="num">5</div><div className="cap">highlights</div></div>
                </div>

                <div className="tokens">
                  <span className="tok"><span className="k">const</span> <span className="s">"open-source maintainer"</span></span>
                  <span className="tok"><span className="k">const</span> <span className="s">"conf speaker"</span></span>
                  <span className="tok"><span className="k">const</span> <span className="s">"1M+ users"</span></span>
                  <span className="tok"><span className="k">const</span> <span className="s">"led team of 5"</span></span>
                </div>

                <div className="filter">
                  <div className="search">⌕ &nbsp;search projects, or type a tag… <span className="k">⌘K</span></div>
                  <div className="frow">
                    <span className="chip on">Web</span><span className="chip">iOS</span>
                    <span className="chip on">#react</span><span className="chip">TS</span><span className="chip">Node</span>
                    <span className="res">{'//'} 12 results · sort: recent</span>
                  </div>
                </div>

                <div className="region"><span className="chev">▾</span> <span className="co">Acme Corp</span> <span className="when">2023 — now · senior dev · 7 projects</span></div>
                <div className="cards">
                  {[['Atlas','2024 · Web · React'],['Beacon','2023 · iOS · Swift'],['Halo','2023 · Web · TS']].map(p=>(
                    <div className="card" key={p[0]}>
                      <div className="shot"><span>screenshot</span></div>
                      <div className="cb"><div className="t">{p[0]}</div><div className="m">{'//'} {p[1]}</div><div className="add">+ resume</div></div>
                    </div>
                  ))}
                </div>

                <div className="region"><span className="chev">▾</span> <span className="co">Startup Inc</span> <span className="when">2020 — 2023 · 5 projects</span></div>
                <div className="cards">
                  {[['Comet','2022 · Web · TS'],['Drift','2021 · Android · Kotlin']].map(p=>(
                    <div className="card" key={p[0]}>
                      <div className="shot"><span>screenshot</span></div>
                      <div className="cb"><div className="t">{p[0]}</div><div className="m">{'//'} {p[1]}</div><div className="add">+ resume</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="status">
          <span>⎇ main</span><span>UTF-8</span><span>Markdown</span>
          <span className="sp">Ln 1, Col 1</span><span>◑ auto</span>
        </div>
      </div>
    );
  }
  window.Dir2 = Dir2;
})();
