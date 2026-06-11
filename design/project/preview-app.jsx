// preview-app.jsx — faithful single-file reproduction of the live app for design refinement.
const { useState, useEffect, useRef, useMemo, useCallback } = React;
const DATA = window.DATA;

/* ---- i18n ---- */
const UI = {
  en: { summary:'summary', projects:'projects', skills:'skills', contact:'contact', openToWork:'open_to_work',
    downloadResume:'⬇ download résumé', byCompany:'by company', flatGrid:'flat grid',
    scrollHint:'scroll ↔ · click card for details', now:'now', screenshot:'screenshot', addResume:'+ resume',
    added:'✓ added', collapse:'collapse ✕', noScreenshots:'no screenshots', whatItIs:'What it is', myRole:'My role',
    achievement:'Achievement', techTags:'Tech / tags', links:'Links', addToResume:'+ Add to resume', inResume:'✓ In resume',
    resumeCart:'// resume cart', cartEmpty:'No projects yet — add with “+ resume”.', dragReorder:'drag to reorder',
    template:'Template', generatePdf:'Generate PDF →', theme:'theme', resume:'resume', location:'📍 location',
    sortRecent:'sort:recent', searchPlaceholder:'projects, or type a tag…' },
  ko: { summary:'소개', projects:'프로젝트', skills:'기술', contact:'연락처', openToWork:'open_to_work',
    downloadResume:'⬇ 이력서 다운로드', byCompany:'회사별', flatGrid:'전체 보기', scrollHint:'좌우 스크롤 ↔ · 카드 클릭 시 상세',
    now:'현재', screenshot:'스크린샷', addResume:'+ 이력서', added:'✓ 추가됨', collapse:'접기 ✕', noScreenshots:'스크린샷 없음',
    whatItIs:'프로젝트 소개', myRole:'담당 역할', achievement:'성과', techTags:'기술 / 태그', links:'링크',
    addToResume:'+ 이력서에 추가', inResume:'✓ 추가됨', resumeCart:'// 이력서 카트', cartEmpty:'아직 프로젝트가 없습니다 — “+ 이력서”로 추가하세요.',
    dragReorder:'드래그하여 순서 변경', template:'템플릿', generatePdf:'PDF 생성 →', theme:'테마', resume:'이력서',
    location:'📍 위치', sortRecent:'최신순', searchPlaceholder:'프로젝트명 또는 태그 입력…' }
};
function resolve(val, lang){
  if (val && typeof val==='object' && !Array.isArray(val) && ('en' in val || 'ko' in val)) return val[lang] ?? val.en;
  return val;
}

/* ---- recency sort ---- */
function recencyKey(meta){
  const head = String(meta).split('·')[0];
  const dates = [...head.matchAll(/(\d{4})(?:\.(\d{2}))?/g)].map(m=>Number(m[1])*100+(m[2]?Number(m[2]):0));
  return dates.length ? Math.max(...dates) : 0;
}
const byRecency = (a,b)=>recencyKey(b.meta)-recencyKey(a.meta);

/* ---- project file-cover ---- */
const EXT_MAP = { vb:'vb', c:'c', cpp:'cpp', java:'java', objc:'m', swift:'swift', ts:'ts', js:'js', php:'php', bash:'sh', sql:'sql', kotlin:'kt', python:'py', go:'go', rust:'rs' };
function coverExt(project){
  const fw = project.tags.find(t=>t.startsWith('framework:'));
  if(fw && fw.includes('react')) return 'tsx';
  const langTag = project.tags.find(t=>t.startsWith('lang:'));
  const key = langTag ? langTag.slice(langTag.indexOf(':')+1) : null;
  return EXT_MAP[key] || 'src';
}
function ProjectCover({ project }){
  return (
    <div className="pcard-cover">
      <span className="pcard-cover-dots"><i/><i/><i/></span>
      <span className="pcard-cover-ext">.{coverExt(project)}</span>
    </div>
  );
}

/* ---- Mermaid diagram ---- */
let mid=0;
function Diagram({ code }){
  const ref = useRef(null);
  useEffect(()=>{
    if(!code || !window.mermaid) return;
    let alive=true;
    window.mermaid.render('m'+(++mid), code).then(({svg})=>{
      if(alive && ref.current) ref.current.innerHTML = svg.replace(/style="[^"]*max-width[^"]*"/, 'style="width:100%;height:auto;display:block;"');
    }).catch(()=>{});
    return ()=>{ alive=false; };
  },[code]);
  return <div className="diagram-wrap diagram-wrap--thumb" ref={ref} />;
}

/* ---- Topbar ---- */
function Topbar({ theme, onToggleTheme, lang, onToggleLang, cartCount, onToggleCart, t }){
  return (
    <div className="topbar">
      <div className="topbar-dots">
        <span className="topbar-dot" style={{background:'#e05252'}} />
        <span className="topbar-dot" style={{background:'#e0c34f'}} />
        <span className="topbar-dot" style={{background:'#34d986'}} />
      </div>
      <span className="topbar-path">~/portfolio <b>$</b> <span style={{opacity:.55}}>./run --layout=A</span></span>
      <div className="topbar-right">
        <button className="pill" onClick={onToggleLang}>⌘ {lang==='en'?'EN':'한'}</button>
        <button className="pill" onClick={onToggleTheme}>◑ {t('theme')}:{theme}</button>
        <button className="pill" onClick={onToggleCart}>{t('resume')} <span className="pill-badge">{cartCount}</span></button>
      </div>
    </div>
  );
}

/* ---- Sidebar ---- */
const NAV = [{id:'summary',pre:'01'},{id:'projects',pre:'02'},{id:'skills',pre:'03'},{id:'contact',pre:'04'}];
function Sidebar({ activeSection, t, tr }){
  return (
    <aside className="sidebar">
      <div className="sidebar-avatar">&gt;_</div>
      <div className="sidebar-ident">
        <div className="nm">{DATA.name}</div>
        <div className="role">{tr(DATA.role)}</div>
      </div>
      <nav className="sidebar-nav">
        {NAV.map(it=>(
          <a key={it.id} href={'#'+it.id} className={activeSection===it.id?'active':''}>
            <span className="nav-pre">{it.pre}</span>{t(it.id)}
          </a>
        ))}
      </nav>
      <div className="sidebar-divider" />
      <div className="sidebar-links">
        <a href={DATA.github} target="_blank">↗ {DATA.github.replace('https://','')}</a>
        <a href={DATA.linkedin} target="_blank">↗ {DATA.linkedin.replace('https://','')}</a>
        <a href={'mailto:'+DATA.email}>✉ {DATA.email}</a>
      </div>
      <div className="sidebar-avail"><span className="avail-dot" />{t('openToWork')}</div>
      <div className="sidebar-spacer" />
      <button className="dl-btn">{t('downloadResume')}</button>
    </aside>
  );
}

/* ---- Summary ---- */
function useCountUp(target){
  const [val, setVal] = useState(target); // safe default = real number
  useEffect(()=>{
    const n = Number(target);
    if(!isFinite(n) || n===0){ setVal(target); return; }
    let raf, start, cleanup;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce){ setVal(target); return; }
    const run = ()=>{
      setVal(0);
      const step = (ts)=>{
        if(!start) start = ts;
        const p = Math.min((ts-start)/900, 1);
        setVal(Math.round((1-Math.pow(1-p,3))*n));
        if(p<1) raf = requestAnimationFrame(step); else setVal(n);
      };
      raf = requestAnimationFrame(step);
    };
    if(document.visibilityState === 'visible'){ run(); }
    else {
      const onVis = ()=>{ if(document.visibilityState==='visible'){ run(); document.removeEventListener('visibilitychange', onVis); } };
      document.addEventListener('visibilitychange', onVis);
      cleanup = ()=>document.removeEventListener('visibilitychange', onVis);
    }
    return ()=>{ if(raf) cancelAnimationFrame(raf); if(cleanup) cleanup(); };
  },[target]);
  return val;
}
function StatNum({ s }){
  const v = useCountUp(s.num);
  return <div className="stat-num">{v}{s.em && <em>{s.em}</em>}</div>;
}
function Summary({ t, tr, onVisible }){
  const ref = useObserver(onVisible);
  return (
    <section id="summary" className="summary-section" ref={ref}>
      <div className="klabel"><span className="c">//</span> 01 — {t('summary')}</div>
      <h1 className="summary-h1">{tr(DATA.tagline)}<span className="blink-cursor" /></h1>
      <p className="summary-bio">{tr(DATA.bio)}</p>
      <div className="stats-grid">
        {DATA.stats.map((s,i)=>(
          <div className="stat-card" key={i}>
            <StatNum s={s} />
            <div className="stat-cap">{tr(s.cap)}</div>
          </div>
        ))}
      </div>
      <div className="tags-row">
        {DATA.tags.map((tag,i)=><span className="tag-pill" key={i}>{tr(tag)}</span>)}
      </div>
    </section>
  );
}

/* ---- FilterBar ---- */
function FilterBar({ filterDefs, search, onSearchChange, activeChips, onChipToggle, resultCount, lang, t }){
  const { groups, orderedGroups } = filterDefs.reduce((acc,tag)=>{
    const sep=tag.indexOf(':'); const group=sep>=0?tag.slice(0,sep):'other'; const label=sep>=0?tag.slice(sep+1):tag;
    if(!acc.groups[group]){ acc.groups[group]=[]; acc.orderedGroups.push(group); }
    acc.groups[group].push({tag,label}); return acc;
  }, {groups:{}, orderedGroups:[]});
  return (
    <div className="filterbar">
      <div className="filterbar-cmd">
        <span className="pr">$</span><span>grep </span>
        <input className="filterbar-input" type="text" placeholder={t('searchPlaceholder')} value={search}
          onChange={e=>onSearchChange(e.target.value)} spellCheck={false} />
        <span className="filterbar-kbd">⌘K</span>
      </div>
      <div className="filterbar-groups">
        {orderedGroups.map(group=>(
          <div key={group} className="filterbar-group">
            <span className="filterbar-group-label">{group}</span>
            <div className="filterbar-chips">
              {groups[group].map(({tag,label})=>(
                <button key={tag} className={'chip'+(activeChips.includes(tag)?' active':'')} onClick={()=>onChipToggle(tag)}>{label}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="filterbar-footer">
        <span className="filterbar-result">// {resultCount}{lang==='ko'?'개 프로젝트':` project${resultCount!==1?'s':''}`} · {t('sortRecent')}</span>
      </div>
    </div>
  );
}

/* ---- ProjectCard ---- */
function ProjectCard({ project, isSelected, isInCart, onSelect, onCartToggle, t }){
  const inCart = isInCart(project.id);
  return (
    <div className={'pcard'+(isSelected?' selected':'')} onClick={()=>onSelect(project.id)}>
      <div className={'pcard-shot'+(project.image?'':' has-cover')}>
        {project.image ? <img src={project.image} alt={project.name}/> : <ProjectCover project={project}/>}
      </div>
      <div className="pcard-body">
        <div className="pcard-title">{project.name}</div>
        <div className="pcard-meta">{project.meta}</div>
        <button className={'pcard-add'+(inCart?' in-cart':'')} onClick={e=>{e.stopPropagation();onCartToggle(project.id,project.name);}}>
          {inCart?t('added'):t('addResume')}
        </button>
      </div>
    </div>
  );
}

/* ---- DetailPanel ---- */
function DetailPanel({ project, isInCart, onCartToggle, onClose, t, tr }){
  const inCart = isInCart(project.id);
  const techLower = new Set(project.tech.map(x=>x.toLowerCase()));
  const extraTags = project.tags.map(tag=>tag.includes(':')?tag.slice(tag.indexOf(':')+1):tag).filter(l=>!techLower.has(l.toLowerCase()));
  return (
    <div className="detail-panel">
      <div className="detail-inner">
        <div className="detail-top">
          <div><h3>{project.name}</h3><div className="detail-meta">{project.meta}</div></div>
          <button className="detail-close" onClick={onClose}>{t('collapse')}</button>
        </div>
        <div className="detail-media">
          {project.diagrams.map((code,i)=><div key={i} className="detail-slide detail-slide--diagram"><Diagram code={code}/></div>)}
          {project.images.map((src,i)=><div key={i} className="detail-slide"><img src={src} alt=""/></div>)}
          {project.diagrams.length===0 && project.images.length===0 && (
            <div className="detail-slide has-cover"><ProjectCover project={project}/></div>
          )}
        </div>
        <div className="detail-body">
          <div>
            <h4>{t('whatItIs')}</h4><p>{tr(project.desc)}</p>
            <h4 className="detail-sec-gap">{t('myRole')}</h4><p>{tr(project.role)}</p>
            {project.achievement && <><h4 className="detail-sec-gap">{t('achievement')}</h4><p>{tr(project.achievement)}</p></>}
          </div>
          <div>
            <h4>{t('techTags')}</h4>
            <div className="detail-chips">
              {project.tech.map(tech=><span key={tech} className="d-chip accent">{tech}</span>)}
              {extraTags.map(l=><span key={l} className="d-chip">{l}</span>)}
            </div>
            {project.links.length>0 && <><h4>{t('links')}</h4><div className="detail-links">
              {project.links.map((l,i)=><a key={i} className="detail-link" href={l.href} target="_blank">{l.label}</a>)}
            </div></>}
            <button className={'detail-add-btn'+(inCart?' in-cart':'')} onClick={()=>onCartToggle(project.id,project.name)}>
              {inCart?t('inResume'):t('addToResume')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- CompanyView ---- */
function CompanyView({ companies, isInCart, onCartToggle, t, tr }){
  const [selected, setSelected] = useState(null);
  const handleSelect=(projectId,companyId)=> setSelected(prev=> prev?.projectId===projectId?null:{projectId,companyId});
  const getProject=(id)=>{ for(const co of companies){ const p=co.projects.find(p=>p.id===id); if(p) return p; } return null; };
  return (
    <div>
      {companies.map(co=>(
        <div key={co.id} className="co-section">
          <div className="co-head">
            <span className="co-name">## {co.name}</span>
            <span className="co-when">{co.when} · {tr(co.role)}{co.cur && <> · <span className="co-cur">{t('now')}</span></>}</span>
          </div>
          <div className="scroll-hint">{t('scrollHint')}</div>
          <div className="gallery">
            {co.projects.map(p=>(
              <ProjectCard key={p.id} project={p} isSelected={selected?.projectId===p.id} isInCart={isInCart}
                onSelect={(id)=>handleSelect(id,co.id)} onCartToggle={onCartToggle} t={t}/>
            ))}
          </div>
          {selected?.companyId===co.id && selected?.projectId && (
            <DetailPanel project={getProject(selected.projectId)} isInCart={isInCart} onCartToggle={onCartToggle}
              onClose={()=>setSelected(null)} t={t} tr={tr}/>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---- FlatView ---- */
function FlatView({ projects, isInCart, onCartToggle, t, tr }){
  const [selected, setSelected] = useState(null);
  const sel = projects.find(p=>p.id===selected);
  return (
    <div>
      <div className="flat-grid">
        {projects.map(p=>(
          <div key={p.id} className={'flat-card'+(selected===p.id?' selected':'')} onClick={()=>setSelected(prev=>prev===p.id?null:p.id)}>
            <div className={'pcard-shot'+(p.image?'':' has-cover')}>{p.image?<img src={p.image} alt=""/>:<ProjectCover project={p}/>}</div>
            <div className="pcard-body">
              <div className="pcard-title">{p.name}</div>
              <div className="pcard-meta">{p.meta}</div>
              <button className={'pcard-add'+(isInCart(p.id)?' in-cart':'')} onClick={e=>{e.stopPropagation();onCartToggle(p.id,p.name);}}>
                {isInCart(p.id)?t('added'):t('addResume')}
              </button>
            </div>
          </div>
        ))}
      </div>
      {sel && <DetailPanel project={sel} isInCart={isInCart} onCartToggle={onCartToggle} onClose={()=>setSelected(null)} t={t} tr={tr}/>}
    </div>
  );
}

/* ---- Projects ---- */
function Projects({ filterDefs, search, onSearchChange, activeChips, onChipToggle, filteredProjects, filteredCompanies, isInCart, onCartToggle, onVisible, lang, t, tr }){
  const [layout, setLayout] = useState('company');
  const ref = useObserver(onVisible);
  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="proj-header">
        <span className="proj-header-label">// 02 — {t('projects')}</span>
        <div className="proj-header-spacer" />
        <div className="view-toggle">
          <button className={'view-btn'+(layout==='company'?' active':'')} onClick={()=>setLayout('company')}>{t('byCompany')}</button>
          <button className={'view-btn'+(layout==='flat'?' active':'')} onClick={()=>setLayout('flat')}>{t('flatGrid')}</button>
        </div>
      </div>
      <FilterBar filterDefs={filterDefs} search={search} onSearchChange={onSearchChange} activeChips={activeChips}
        onChipToggle={onChipToggle} resultCount={filteredProjects.length} lang={lang} t={t}/>
      {layout==='company'
        ? <CompanyView companies={filteredCompanies} isInCart={isInCart} onCartToggle={onCartToggle} t={t} tr={tr}/>
        : <FlatView projects={filteredProjects} isInCart={isInCart} onCartToggle={onCartToggle} t={t} tr={tr}/>}
    </section>
  );
}

/* ---- Skills ---- */
function Skills({ t, tr, onVisible }){
  const ref = useObserver(onVisible);
  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="klabel"><span className="c">//</span> 03 — {t('skills')}</div>
      <div className="skills-grid">
        {DATA.skills.map((sg,i)=>(
          <div className="skill-group" key={i}>
            <h4>{tr(sg.group)}</h4>
            <div className="skill-chips">{sg.chips.map(c=><span className="s-chip" key={c}>{c}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---- Contact ---- */
function Contact({ t, tr, onVisible }){
  const ref = useObserver(onVisible);
  const links = [
    { href:DATA.github, label:DATA.github.replace('https://',''), type:'arrow' },
    { href:DATA.linkedin, label:DATA.linkedin.replace('https://',''), type:'arrow' },
    { href:'mailto:'+DATA.email, label:DATA.email, type:'mail' }
  ];
  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="klabel"><span className="c">//</span> 04 — {t('contact')}</div>
      <div className="contact-box">
        <div>
          <p className="contact-msg">{tr(DATA.contactMsg)}</p>
          <div className="contact-links">
            {links.map((l,i)=><a key={i} className="contact-link" href={l.href} target="_blank"><span className="arrow">{l.type==='mail'?'✉':'↗'}</span>{l.label}</a>)}
          </div>
        </div>
        <div className="contact-art"><span className="lbl">{t('location')}</span></div>
      </div>
    </section>
  );
}

/* ---- ResumeCart ---- */
const TEMPLATES = ['Compact','Detailed','1-pager'];
function ResumeCart({ cart, onRemove, onReorder, onClose, t, lang }){
  const [template, setTemplate] = useState('Compact');
  const dragIdx = useRef(null);
  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-drawer">
        <h3>{t('resumeCart')}</h3>
        {cart.length===0 ? <p className="cart-sub">{t('cartEmpty')}</p> : (
          <>
            <p className="cart-sub">{cart.length}{lang==='ko'?'개 프로젝트':` project${cart.length!==1?'s':''}`} · {t('dragReorder')}</p>
            <div>
              {cart.map((item,idx)=>(
                <div key={item.id} className="cart-item" draggable
                  onDragStart={e=>{dragIdx.current=idx;e.dataTransfer.effectAllowed='move';}}
                  onDragOver={e=>{e.preventDefault(); if(dragIdx.current===null||dragIdx.current===idx)return; onReorder(dragIdx.current,idx); dragIdx.current=idx;}}
                  onDragEnd={()=>{dragIdx.current=null;}}>
                  <span className="cart-handle">⠿</span>
                  <span className="cart-item-name">{item.name}</span>
                  <button className="cart-item-rm" onClick={()=>onRemove(item.id)}>×</button>
                </div>
              ))}
            </div>
            <div className="cart-opts">
              <h4>{t('template')}</h4>
              <div className="template-seg">
                {TEMPLATES.map(tp=><button key={tp} className={'template-opt'+(template===tp?' active':'')} onClick={()=>setTemplate(tp)}>{tp}</button>)}
              </div>
              <button className="gen-btn">{t('generatePdf')}</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

/* ---- IntersectionObserver hook ---- */
function useObserver(onVisible){
  const ref = useRef(null);
  useEffect(()=>{
    const el = ref.current; if(!el) return;
    const ob = new IntersectionObserver(([e])=>{ if(e.isIntersecting) onVisible(); }, { rootMargin:'-40% 0px -55% 0px' });
    ob.observe(el); return ()=>ob.disconnect();
  },[onVisible]);
  return ref;
}

/* ---- App ---- */
function App(){
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [activeChips, setActiveChips] = useState([]);
  const [activeSection, setActiveSection] = useState('summary');

  const t = useCallback((k)=>UI[lang][k] ?? UI.en[k] ?? k, [lang]);
  const tr = useCallback((v)=>resolve(v,lang), [lang]);

  useEffect(()=>{ document.documentElement.setAttribute('data-theme', theme==='light'?'light':''); }, [theme]);

  const toggleCart=useCallback((id,name)=> setCart(prev=> prev.find(x=>x.id===id)?prev.filter(x=>x.id!==id):[...prev,{id,name}]),[]);
  const removeFromCart=useCallback((id)=>setCart(prev=>prev.filter(x=>x.id!==id)),[]);
  const reorderCart=useCallback((from,to)=>setCart(prev=>{const n=[...prev];const[i]=n.splice(from,1);n.splice(to,0,i);return n;}),[]);
  const isInCart=useCallback((id)=>cart.some(x=>x.id===id),[cart]);
  const toggleChip=useCallback((k)=>setActiveChips(prev=>prev.includes(k)?prev.filter(x=>x!==k):[...prev,k]),[]);

  const filterDefs = useMemo(()=>{
    const all = DATA.companies.flatMap(c=>c.projects.flatMap(p=>p.tags));
    return [...new Set(all)].sort();
  },[]);
  const filteredProjects = useMemo(()=>{
    const all = DATA.companies.flatMap(c=>c.projects);
    return all.filter(p=>{
      const s=search.toLowerCase();
      const ms = !search || p.name.toLowerCase().includes(s) || p.meta.toLowerCase().includes(s) || String(tr(p.desc)).toLowerCase().includes(s) || p.tags.some(t=>t.toLowerCase().includes(s));
      if(!ms) return false;
      if(!activeChips.length) return true;
      return activeChips.some(c=>p.tags.includes(c));
    }).sort(byRecency);
  },[search,activeChips,lang,tr]);
  const filteredCompanies = useMemo(()=>{
    const vis = new Set(filteredProjects.map(p=>p.id));
    return DATA.companies.map(co=>({...co, projects:co.projects.filter(p=>vis.has(p.id)).sort(byRecency)}))
      .filter(co=>co.projects.length>0)
      .sort((a,b)=>recencyKey(b.projects[0].meta)-recencyKey(a.projects[0].meta));
  },[filteredProjects]);

  return (
    <div>
      <Topbar theme={theme} onToggleTheme={()=>setTheme(t=>t==='dark'?'light':'dark')} lang={lang}
        onToggleLang={()=>setLang(l=>l==='en'?'ko':'en')} cartCount={cart.length} onToggleCart={()=>setCartOpen(o=>!o)} t={t}/>
      {cartOpen && <ResumeCart cart={cart} onRemove={removeFromCart} onReorder={reorderCart} onClose={()=>setCartOpen(false)} t={t} lang={lang}/>}
      <div className="shell">
        <Sidebar activeSection={activeSection} t={t} tr={tr}/>
        <main className="main-content">
          <Summary t={t} tr={tr} onVisible={()=>setActiveSection('summary')}/>
          <Projects filterDefs={filterDefs} search={search} onSearchChange={setSearch} activeChips={activeChips}
            onChipToggle={toggleChip} filteredProjects={filteredProjects} filteredCompanies={filteredCompanies}
            isInCart={isInCart} onCartToggle={toggleCart} onVisible={()=>setActiveSection('projects')} lang={lang} t={t} tr={tr}/>
          <Skills t={t} tr={tr} onVisible={()=>setActiveSection('skills')}/>
          <Contact t={t} tr={tr} onVisible={()=>setActiveSection('contact')}/>
        </main>
      </div>
    </div>
  );
}

if (window.mermaid) window.mermaid.initialize({ startOnLoad:false, theme:'dark' });
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
