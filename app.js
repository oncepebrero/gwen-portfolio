/* ════════════════════════════════════════════════════════════════
   GWEN BASCONCILLO — PORTFOLIO
   All editable content lives in the CONTENT object below. Update
   text, links, and asset paths here — the rest of the file only
   renders and animates what you put in CONTENT.
   ════════════════════════════════════════════════════════════════ */

const CONTENT = {

  roles: [
    'UI/UX &amp; Graphic Designer',
    'Front-End Developer',
    'QA &amp; Software Tester',
    'Virtual Assistant'
  ],

  servicesPrimary: [
    { icon:'fa-pen-nib', title:'UI/UX Design', desc:'User flows, wireframes, and interactive prototypes built around usability first — turning ambiguous problems into interfaces people navigate without thinking twice.' },
    { icon:'fa-swatchbook', title:'Graphic Design', desc:'Clean, versatile visuals — layouts, mockups, and brand assets — crafted in Canva and refined for whatever platform they need to live on.' }
  ],
  servicesSecondary: [
    { icon:'fa-code', title:'Front-End Development', desc:'Responsive, user-centered builds with HTML, CSS, JavaScript, and Bootstrap.' },
    { icon:'fa-bug', title:'QA &amp; Software Testing', desc:'Manual testing, bug reporting, and validation so software works the way it should.' },
    { icon:'fa-headset', title:'Virtual Assistance', desc:'Organized, detail-driven admin support — documentation, scheduling, and inbox &amp; task management.' },
    { icon:'fa-hashtag', title:'Social Media Content &amp; Management', desc:'On-brand graphics and content calendars built with the same design eye as client work.' }
  ],

  skillGroups: [
    { name:'Design &amp; Prototyping', tags:['Design Systems','Wireframing &amp; Prototyping','Figma','Canva'] },
    { name:'Languages &amp; Development', tags:['HTML5','CSS3','JavaScript','PHP','Python','C#','Bootstrap','Node.js','Express.js'] },
    { name:'Data, CMS &amp; Tools', tags:['MySQL','Wix','Git &amp; GitHub'] },
    { name:'QA &amp; Practice', tags:['Manual Testing','Test Case Design','Bug Reporting','Technical Documentation','Multimedia Editing'] },
    { name:'Admin &amp; Content', tags:['Canva','CapCut','Documentation &amp; Reporting','Scheduling','Client Communication'] }
  ],

  /* type: 'image' or 'doc' (opens the zoomable image viewer or the PDF viewer)
     status colors are inferred from statusKind: shipped | professional | academic | prototype */
  projects: [
    { id:'remhart', title:"RM'S Inventory — Capstone Project", year:'2025', org:'Mindoro State University · for REMHART', role:'Technical Writer, QA Analyst &amp; Prototyping', statusKind:'shipped', status:'Shipped',
      type:'doc', src:'assets/rms-capstone.pdf', thumb:'assets/rms-pdf-cover.jpg', pages:'186 pages',
      bullets:['AI-integrated inventory &amp; e-commerce system with real-time demand forecasting, built for a live retail client','Designed the database schema and admin dashboard for stock, sales, and order tracking'],
      stack:['PHP','JavaScript','MySQL','AI Integration'], caseStudy:'remhart' },

    { id:'dailydrive', title:'DailyDrive — Task Management System', year:'2026', org:'Personal / Academic Project', role:'Solo Developer', statusKind:'shipped', status:'Shipped',
      type:'doc', src:'assets/dailydrive-manual.pdf', thumb:'assets/dailydrive-pdf-cover.jpg', pages:'21 pages',
      bullets:['Full-featured productivity platform with admin &amp; user dashboards, subtasks, file attachments, and real-time notifications','Gamification system, recurring tasks, and automated due-date reminders via cron jobs'],
      stack:['Node.js','Express','MySQL','EJS/CSS','FullCalendar','Chart.js'], caseStudy:'dailydrive' },

    { id:'safepath', title:'SafePath — Bullying Complaint System', year:'2024', org:'Application Development', role:'Graphic Designer &amp; Documentation', statusKind:'shipped', status:'Shipped',
      type:'image', src:'assets/SafepathUI.png', thumb:'assets/SafepathUI.png',
      bullets:['Student safety platform for reporting bullying incidents confidentially','AI-powered text classification using TensorFlow &amp; Wit.ai to flag concerning reports for review'],
      stack:['Express.js','TensorFlow','Bootstrap','MySQL'], repo:'https://github.com/oncepebrero/SafePath', caseStudy:'safepath' },

    { id:'attendance', title:'Attendance Monitoring System', year:'2025', org:'New San Jose Builders Inc.', role:'QA &amp; Developer', statusKind:'professional', status:'Professional',
      type:'image', src:'assets/NSJBI.png', thumb:'assets/NSJBI.png',
      bullets:['Web-based attendance monitoring system built during my time as a QA &amp; development team member','Wrote test cases and documentation alongside feature development for company use'],
      stack:['Vue.js','Node.js','MySQL'] },

    { id:'minsu', title:'MinSU Event Venue Scheduling System', year:'2023', org:'Mindoro State University', role:'Developer', statusKind:'academic', status:'Academic',
      type:'image', src:'assets/Minsu.png', thumb:'assets/Minsu.png',
      bullets:['Reservation &amp; scheduling app with role-based accounts for booking venues','Conflict-checking logic to prevent double-booking of venues and slots'],
      stack:['HTML','PHP','MySQL'] },

    { id:'slites', title:'SLITES — Smart Lighting Intelligence', year:'2024', org:'Integrative Programming &amp; Technologies', role:'IoT Developer', statusKind:'prototype', status:'Prototype',
      type:'image', src:'assets/Slites.png', thumb:'assets/Slites.png',
      bullets:['IoT automated lighting system using LDR &amp; PIR sensors on an Orange Pi board','Live monitoring dashboard to track sensor readings and lighting state'],
      stack:['Orange Pi','Python','MySQL'] },

    { id:'lavalust', title:'Panchitan ni Unchang — Lavalust Build', year:'2024', org:'Web Development 2', role:'Web Developer', statusKind:'shipped', status:'Shipped',
      type:'image', src:'assets/lavalust.jpg', thumb:'assets/lavalust.jpg',
      bullets:['Local eatery e-commerce site built on the Lavalust PHP framework','Added FAQs, customer support, and user accounts for order history'],
      stack:['Lavalust','PHP','MySQL'] },

    { id:'wix', title:'Panchitan ni Unchang — Wix CMS', year:'2024', org:'CMS Integration &amp; System Architecture', role:'Site Builder &amp; IA Designer', statusKind:'shipped', status:'Shipped',
      type:'image', src:'assets/WIX.png', thumb:'assets/WIX.png',
      bullets:['Same eatery, rebuilt as a Wix CMS storefront with fresh information architecture','Designed the full site structure and navigation flow from scratch'],
      stack:['Wix','E-Commerce'] },

    { id:'mushroom', title:'IoT — Mushroom Cultivation Monitor', year:'2023', org:'Integrative Programming &amp; Technologies', role:'IoT Developer', statusKind:'prototype', status:'Prototype',
      type:'image', src:'assets/mushroom.jpg', thumb:'assets/mushroom.jpg',
      bullets:['Humidity &amp; temperature monitoring system for mushroom cultivation','Automated pump control triggered by sensor thresholds'],
      stack:['Arduino','Sensors','MySQL'] },

    { id:'meat', title:'Meat Quality Detection Tool', year:'2024', org:'Embedded Systems', role:'ML Developer', statusKind:'prototype', status:'Prototype',
      type:'image', src:'assets/meat.jpg', thumb:'assets/meat.jpg',
      bullets:['Embedded image-processing system that predicts meat quality using ML','Trained a classification model on sample image data to flag freshness'],
      stack:['Python','Image ML'] },

    { id:'brainster', title:'Brainster — Discrete Mathematics Game', year:'2023', org:'Discrete Mathematics', role:'Game Developer', statusKind:'academic', status:'Academic',
      type:'image', src:'assets/BRAINSTER.png', thumb:'assets/BRAINSTER.png',
      bullets:['Interactive puzzle game teaching logic, set theory, and graph theory','Designed level progression to reinforce concepts through play'],
      stack:['JavaScript'] }
  ],

  caseStudies: {
    remhart: {
      eyebrow:'Featured case study', title:"RM'S Inventory — Capstone Project",
      meta:'Mindoro State University · for REMHART · 2025 · Technical Writer, QA Analyst &amp; Prototyping',
      blocks:[
        ['The problem', ['REMHART, a live retail client, was tracking stock, sales, and orders manually with no formal spec for a digital system — and no reliable way to anticipate demand before it became a stock-out or overstock problem.']],
        ['My approach', ['As technical writer and QA analyst on the capstone team, I worked directly with the client to gather requirements, then translated them into wireframes and a database schema before any code was written — so the build matched how the business actually operated.']],
        ['Key decisions', ['Designed the database schema to keep stock counts accurate across sales and order flows in real time.','Structured the admin dashboard so demand-forecasting output was readable by non-technical staff, not just developers.','Wrote and ran test cases throughout development to catch data and workflow issues before client handoff.']],
        ['Outcome', ['A working AI-integrated inventory &amp; e-commerce system with real-time demand forecasting, delivered for a live retail client and used as the team\u2019s capstone project.']]
      ],
      stack:['PHP','JavaScript','MySQL','AI Integration']
    },
    dailydrive: {
      eyebrow:'Case study', title:'DailyDrive — Task Management System',
      meta:'Personal / Academic Project · 2026 · Solo Developer',
      blocks:[
        ['The problem', ['Most task apps I\u2019d used were either too simple to manage real workloads or too complex to stick with. I wanted to design and build one myself — a productivity platform I\u2019d actually keep using.']],
        ['My approach', ['Built solo, end to end: wireframed the admin and user dashboards first, then built the full stack, using my own daily task load to test and refine the flows as I went.']],
        ['Key decisions', ['Added a gamification layer to encourage consistent use rather than one-off task dumping.','Built dark/light mode from the start rather than retrofitting it, since it touched nearly every screen.','Automated due-date reminders via cron jobs so the system nudges users instead of relying on them to check in.']],
        ['Outcome', ['A full-featured productivity platform with admin &amp; user dashboards, subtasks, file attachments, real-time notifications, and recurring tasks — shipped and in personal use.']]
      ],
      stack:['Node.js','Express','MySQL','EJS/CSS','FullCalendar','Chart.js']
    },
    safepath: {
      eyebrow:'Case study', title:'SafePath — Bullying Complaint System',
      meta:'Application Development · 2024 · Graphic Designer &amp; Documentation',
      blocks:[
        ['The problem', ['Bullying often goes unreported because students fear being identified. The team needed a platform where a student could report an incident and trust that the process was actually confidential.']],
        ['My approach', ['As graphic designer and documentation lead, I focused on making the interface feel calm and non-intimidating — visual tone matters when the person using it may already feel exposed — while documenting system flows and requirements alongside the development team.']],
        ['Key decisions', ['Kept the visual design neutral and reassuring rather than clinical, to lower the barrier to actually filing a report.','Documented how AI-powered text classification (TensorFlow &amp; Wit.ai) would flag concerning reports for staff review, so the logic stayed transparent to the team.']],
        ['Outcome', ['A shipped confidential reporting platform with AI-assisted flagging, built to help staff respond to concerning reports without exposing the reporting student.']]
      ],
      stack:['Express.js','TensorFlow','Bootstrap','MySQL']
    }
  },

  mockups: [
    { title:'BLOOM', url:'bloom.design', desc:'Flower delivery e-commerce concept — warm palette, product grid &amp; gifting flow.', meta:'E-commerce concept · Seasonal flower delivery brand', src:'assets/mockup-bloom.jpg', thumb:'assets/mockup-bloom-thumb.jpg' },
    { title:'ROAM', url:'roam.design', desc:'Travel &amp; stays booking concept — search flow, curated destinations &amp; trip builder.', meta:'Travel booking concept · Stays, experiences &amp; guides', src:'assets/mockup-roam.jpg', thumb:'assets/mockup-roam-thumb.jpg' },
    { title:'LEVELUP', url:'levelup.design', desc:'Gaming platform concept — dark neon UI, library progress &amp; community pulse.', meta:'Gaming platform concept · Library, community &amp; news feed', src:'assets/mockup-levelup.jpg', thumb:'assets/mockup-levelup-thumb.jpg' }
  ],

  logos: [
    { name:'Logo Concept 01', src:'assets/logo-1.png' },
    { name:'Logo Concept 02', src:'assets/logo-2.png' },
    { name:'Logo Concept 03', src:'assets/logo-3.png' },
    { name:'Logo Concept 05', src:'assets/logo-5.png' },
    { name:'Logo Concept 08', src:'assets/logo-8.png' }
  ],

  process: [
    { title:'Discover &amp; Define', desc:'Understanding the problem — gathering requirements, identifying user needs, and uncovering pain points before designing anything.' },
    { title:'Wireframe &amp; Prototype', desc:'Translating insights into low-fidelity wireframes and interactive prototypes to explore layout, flow, and structure.' },
    { title:'Design &amp; Build', desc:'Crafting polished UI and design systems, then developing the front end to bring the design to life with clean, responsive code.' },
    { title:'Test &amp; Refine', desc:'Manually testing features, logging bugs, and refining usability and visual details before final delivery.' }
  ],

  timeline: [
    { date:'2025 – 2026 · 1 Year', org:'New San Jose Builders Inc.', role:'QA Analyst, Developer &amp; Technical Documentation',
      bullets:['Wrote and executed test cases, logging defects for the development team to resolve','Documented system features and internal processes for reference and onboarding','Built and maintained internal web tools alongside the development team'] },
    { date:'2022 – 2026', org:'Mindoro State University', role:'BS Information Technology', badge:'Academic Distinction (Dean\u2019s Lister, AY 2023–2026)',
      bullets:['Capstone: AI-integrated inventory &amp; e-commerce system with demand forecasting, built for REMHART'] }
  ],

  certifications: [
    { name:'Certificate of Academic Distinction', issuer:'Mindoro State University', date:'June 2026', thumb:'assets/cert-covers/academic-distinction.jpg', href:'assets/cert-covers/academic-distinction.jpg' },
    { name:'Python Programming II', issuer:'CodeChum', date:'Dec 2025', thumb:'assets/cert-covers/python-cover.png', href:'assets/certificate3.pdf' },
    { name:'Fortinet Certified Associate in Cybersecurity', issuer:'Fortinet Training Institute', date:'Sep 2025', thumb:'assets/cert-covers/cybersecurity-cover.png', href:'assets/certificate1.pdf' },
    { name:'Fortinet Networking Fundamentals', issuer:'Fortinet Training Institute', date:'Sep 2025', thumb:'assets/cert-covers/networking-cover..png', href:'assets/certificate2.pdf' },
    { name:'Data Analytics — IT Specialist', issuer:'IT Specialist Program', date:'Dec 2025', thumb:'assets/cert-covers/data-cover.png', href:'assets/certificate4.pdf' },
    { name:'MC Tech Training — Data Analytics', issuer:'8-Hour IT Specialist Program', date:'Dec 2025', thumb:'assets/cert-covers/mctech-cover.png', href:'assets/certificate5.pdf' }
  ]
};

/* ════════════════════════════════════════════════════════════════
   RENDERING — builds each section's DOM from CONTENT above.
   ════════════════════════════════════════════════════════════════ */
function statusClass(kind){
  return { shipped:'sage', professional:'accent', academic:'coral', prototype:'ink-faint' }[kind] || 'ink-faint';
}

function renderServices(){
  const p = document.getElementById('servicesPrimary');
  p.innerHTML = CONTENT.servicesPrimary.map((s,i)=>`
    <div class="svc-hero rv rv-up" style="transition-delay:${i*0.08}s">
      <span class="n">Primary focus</span>
      <i class="fas ${s.icon} ic"></i>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`).join('');
  const g = document.getElementById('servicesGrid');
  g.innerHTML = CONTENT.servicesSecondary.map((s,i)=>`
    <div class="svc-card rv rv-up" style="transition-delay:${i*0.06}s">
      <i class="fas ${s.icon}"></i>
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
    </div>`).join('');
}

function renderSkills(){
  const el = document.getElementById('skillsGroups');
  el.innerHTML = CONTENT.skillGroups.map((g,gi)=>`
    <div class="skill-group-row rv rv-up" style="transition-delay:${gi*0.05}s">
      <h4>${g.name}</h4>
      <div class="tag-cloud">${g.tags.map((t,ti)=>`<span class="tag" style="transition-delay:${ti*0.02}s">${t}</span>`).join('')}</div>
    </div>`).join('');
}

function renderProcess(){
  const el = document.getElementById('processGrid');
  el.innerHTML = CONTENT.process.map((s,i)=>`
    <div class="process-card rv rv-up" data-step="${i+1}" style="transition-delay:${i*0.08}s">
      <div class="process-num">0${i+1}</div>
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
    </div>`).join('');
}

function renderTimeline(){
  const el = document.getElementById('timeline');
  el.insertAdjacentHTML('beforeend', CONTENT.timeline.map(t=>`
    <div class="tl-item rv rv-left">
      <div class="tl-dot"></div>
      <div class="tl-date">${t.date}</div>
      <div class="tl-org">${t.org}</div>
      <div class="tl-role">${t.role}</div>
      ${t.badge ? `<div class="tl-badge"><i class="fas fa-star"></i> ${t.badge}</div>` : ''}
      <ul>${t.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
    </div>`).join(''));
}

function renderCerts(){
  const el = document.getElementById('certGrid');
  el.innerHTML = CONTENT.certifications.map((c,i)=>`
    <a class="cert-card rv rv-up clickable" style="transition-delay:${i*0.05}s" href="${c.href}" target="_blank" rel="noopener">
      <div class="cert-thumb"><img src="${c.thumb}" alt="${c.name}" loading="lazy" onerror="this.style.opacity=0"></div>
      <div class="cert-info"><h4>${c.name}</h4><p>${c.issuer} · ${c.date}</p></div>
    </a>`).join('');
}

function renderMockups(){
  const el = document.getElementById('mockupRail');
  el.innerHTML = CONTENT.mockups.map((m,i)=>`
    <div class="mockup-rail-card">
      <div class="mockup-rail-thumb clickable" data-i="${i}">
        <div class="chrome"><span></span><span></span><span></span><span class="url">${m.url}</span></div>
        <img src="${m.thumb}" alt="${m.title} website mockup" loading="lazy">
      </div>
      <div class="mockup-rail-meta"><h4>${m.title}</h4><p>${m.desc}</p></div>
    </div>`).join('');
  el.querySelectorAll('.mockup-rail-thumb').forEach(t=>{
    t.addEventListener('click', ()=>{
      const m = CONTENT.mockups[t.dataset.i];
      openMockup(m.src, m.title, m.meta, m.url);
    });
  });
}

function renderLogos(){
  const el = document.getElementById('logoGrid');
  el.innerHTML = CONTENT.logos.map((l,i)=>`<div class="logo-tile clickable" data-i="${i}"><img src="${l.src}" alt="${l.name}" loading="lazy"></div>`).join('');
  el.querySelectorAll('.logo-tile').forEach(t=>{
    t.addEventListener('click', ()=>{
      const l = CONTENT.logos[t.dataset.i];
      openImg(l.src, l.name);
    });
  });
}

let activeProjectIndex = 0;
function renderProjects(){
  const list = document.getElementById('projIndexList');
  list.innerHTML = CONTENT.projects.map((p,i)=>`
    <div class="proj-row clickable" data-i="${i}">
      <span class="idx">${String(i+1).padStart(2,'0')}</span>
      <span class="ti">${p.title}</span>
      <span class="yr">${p.year}</span>
    </div>`).join('');
  list.querySelectorAll('.proj-row').forEach(row=>{
    row.addEventListener('mouseenter', ()=> setActiveProject(Number(row.dataset.i)));
    row.addEventListener('click', ()=>{
      setActiveProject(Number(row.dataset.i));
      openProjectPrimary(CONTENT.projects[row.dataset.i]);
    });
  });
  setActiveProject(0);

  const mobile = document.getElementById('projMobileCards');
  mobile.innerHTML = CONTENT.projects.map((p,i)=>`
    <div class="proj-mcard rv rv-up">
      <div class="proj-mcard-media clickable" data-i="${i}"><img src="${p.thumb}" alt="${p.title}" loading="lazy"></div>
      <div class="proj-mcard-body">
        <div class="org">${p.org}</div>
        <h3 style="font-family:var(--serif);font-size:1.15rem;margin-top:.3rem;">${p.title} <span style="font-family:var(--mono);font-size:.7rem;color:var(--ink-faint);">· ${p.year}</span></h3>
        <div class="role" style="font-family:var(--mono);font-size:.68rem;color:var(--accent);margin-top:.3rem;">${p.role}</div>
        <ul style="margin-top:.7rem;display:flex;flex-direction:column;gap:.35rem;">${p.bullets.map(b=>`<li style="font-size:.85rem;color:var(--ink-soft);">${b}</li>`).join('')}</ul>
        <div class="proj-stack" style="margin-top:.9rem;">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div>
        <div class="proj-preview-links" style="margin-top:.9rem;">
          ${p.repo ? `<a href="${p.repo}" target="_blank"><i class="fab fa-github"></i> Repository</a>` : ''}
          ${p.caseStudy ? `<button type="button" data-cs="${p.caseStudy}"><i class="fas fa-book-open"></i> Case study</button>` : ''}
        </div>
      </div>
    </div>`).join('');
  mobile.querySelectorAll('.proj-mcard-media').forEach(m=>{
    m.addEventListener('click', ()=> openProjectPrimary(CONTENT.projects[m.dataset.i]));
  });
  mobile.querySelectorAll('[data-cs]').forEach(b=>{
    b.addEventListener('click', ()=> openCaseStudy(b.dataset.cs));
  });
}

function openProjectPrimary(p){
  if (p.type === 'doc') openDoc(p.src, p.title, p.pages ? `${p.pages} · Full documentation` : '');
  else openImg(p.src, p.title);
}

function setActiveProject(i){
  activeProjectIndex = i;
  document.querySelectorAll('.proj-row').forEach(r=> r.classList.toggle('active', Number(r.dataset.i) === i));
  const p = CONTENT.projects[i];
  const box = document.getElementById('projPreview');
  box.innerHTML = `
    <div class="proj-preview-media clickable" id="projPreviewMedia">
      <span class="status status-${p.statusKind}">${p.status}</span>
      <img src="${p.thumb}" alt="${p.title}">
    </div>
    <div class="proj-preview-body">
      <div class="org">${p.org}</div>
      <h3>${p.title}</h3>
      <div class="role">${p.role}</div>
      <ul>${p.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
      <div class="proj-preview-foot">
        <div class="proj-stack">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div>
        <div class="proj-preview-links">
          ${p.repo ? `<a href="${p.repo}" target="_blank"><i class="fab fa-github"></i> Repository</a>` : ''}
          ${p.caseStudy ? `<button type="button" id="csBtn"><i class="fas fa-book-open"></i> Case study</button>` : ''}
        </div>
      </div>
    </div>`;
  document.getElementById('projPreviewMedia').addEventListener('click', ()=> openProjectPrimary(p));
  const csBtn = document.getElementById('csBtn');
  if (csBtn) csBtn.addEventListener('click', ()=> openCaseStudy(p.caseStudy));
}

function renderCaseStudy(id){
  const cs = CONTENT.caseStudies[id];
  if (!cs) return;
  document.getElementById('caseEyebrow').textContent = cs.eyebrow;
  document.getElementById('caseTitle').innerHTML = cs.title;
  document.getElementById('caseMeta').innerHTML = cs.meta;
  document.getElementById('caseBody').innerHTML = cs.blocks.map(([label, items])=>`
    <div class="case-block">
      <div class="case-block-label">${label}</div>
      ${items.length > 1 ? `<ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul>` : `<p>${items[0]}</p>`}
    </div>`).join('') + `<div class="case-stack">${cs.stack.map(s=>`<span>${s}</span>`).join('')}</div>`;
}

/* ════════════════════════════════════════════════════════════════
   MODALS
   ════════════════════════════════════════════════════════════════ */
function anyModalOpen(){ return !!document.querySelector('.modal-veil.open'); }
function lockScroll(){ document.body.style.overflow = 'hidden'; }
function unlockScroll(){ if (!anyModalOpen()) document.body.style.overflow = ''; }

function openImg(src, caption){
  document.getElementById('modalImage').src = src;
  document.getElementById('modalCaption').textContent = caption || '';
  document.getElementById('imageModal').classList.add('open');
  lockScroll();
}
function closeImg(){ document.getElementById('imageModal').classList.remove('open'); unlockScroll(); }

let mockupFitWidth = 900, mockupNativeWidth = 1366, mockupScale = 1;
function computeFitWidth(){
  const body = document.getElementById('mockupModalBody');
  const available = Math.max(280, body.clientWidth - 56);
  return Math.min(available, mockupNativeWidth);
}
function applyMockupZoom(){
  const img = document.getElementById('mockupModalImage');
  const width = Math.round(mockupFitWidth * mockupScale);
  img.style.width = width + 'px';
  const label = document.getElementById('mockupZoomLevel');
  if (Math.abs(mockupScale - 1) < 0.01) label.textContent = 'Fit';
  else if (width >= mockupNativeWidth) label.textContent = '1:1';
  else label.textContent = Math.round((width / mockupNativeWidth) * 100) + '%';
}
function mockupZoom(delta){
  const step = delta > 0 ? 1.2 : 1/1.2;
  let nextWidth = (mockupFitWidth * mockupScale) * step;
  nextWidth = Math.max(mockupFitWidth * 0.4, Math.min(mockupNativeWidth, nextWidth));
  mockupScale = nextWidth / mockupFitWidth;
  applyMockupZoom();
}
function mockupZoomReset(){
  mockupScale = 1; applyMockupZoom();
  const b = document.getElementById('mockupModalBody'); b.scrollTop = 0; b.scrollLeft = 0;
}
function openMockup(src, title, meta, url){
  const img = document.getElementById('mockupModalImage');
  document.getElementById('mockupModalTitle').textContent = title || '';
  document.getElementById('mockupModalMeta').textContent = meta || '';
  img.style.opacity = '0';
  img.src = src;
  const onReady = ()=>{
    mockupNativeWidth = img.naturalWidth || 1366;
    mockupFitWidth = computeFitWidth();
    mockupScale = 1;
    applyMockupZoom();
    img.style.opacity = '1';
  };
  if (img.complete && img.naturalWidth) onReady(); else img.onload = onReady;
  const body = document.getElementById('mockupModalBody');
  body.scrollTop = 0; body.scrollLeft = 0;
  document.getElementById('mockupModal').classList.add('open');
  lockScroll();
}
function closeMockup(){ document.getElementById('mockupModal').classList.remove('open'); unlockScroll(); }

function openDoc(src, title, meta){
  const frame = document.getElementById('docModalFrame');
  document.getElementById('docModalTitle').textContent = title || '';
  document.getElementById('docModalMeta').textContent = meta || '';
  frame.src = src + '#toolbar=1&navpanes=0&view=FitH';
  document.getElementById('docOpenTab').href = src;
  document.getElementById('docDownload').href = src;
  document.getElementById('docModal').classList.add('open');
  lockScroll();
}
function closeDoc(){
  const m = document.getElementById('docModal');
  if (!m.classList.contains('open')) return;
  m.classList.remove('open');
  document.getElementById('docModalFrame').src = '';
  unlockScroll();
}

function openCaseStudy(id){
  renderCaseStudy(id);
  document.getElementById('caseStudyModal').classList.add('open');
  lockScroll();
}
function closeCaseStudy(){ document.getElementById('caseStudyModal').classList.remove('open'); unlockScroll(); }

function openGallery(kind){
  const title = document.getElementById('galleryModalTitle');
  const grid = document.getElementById('galleryModalGrid');
  if (kind === 'certs'){
    title.textContent = `All certifications (${CONTENT.certifications.length})`;
    grid.innerHTML = CONTENT.certifications.map(c=>`
      <a class="cert-card clickable" href="${c.href}" target="_blank" rel="noopener">
        <div class="cert-thumb"><img src="${c.thumb}" alt="${c.name}" loading="lazy" onerror="this.style.opacity=0"></div>
        <div class="cert-info"><h4>${c.name}</h4><p>${c.issuer} · ${c.date}</p></div>
      </a>`).join('');
  }
  document.getElementById('galleryModal').classList.add('open');
  lockScroll();
}
function closeGallery(){ document.getElementById('galleryModal').classList.remove('open'); unlockScroll(); }

document.getElementById('imageModal').addEventListener('click', e=>{ if (e.target.id === 'imageModal') closeImg(); });
document.getElementById('mockupModal').addEventListener('click', e=>{ if (e.target.id === 'mockupModal') closeMockup(); });
document.getElementById('docModal').addEventListener('click', e=>{ if (e.target.id === 'docModal') closeDoc(); });
document.getElementById('caseStudyModal').addEventListener('click', e=>{ if (e.target.id === 'caseStudyModal') closeCaseStudy(); });
document.getElementById('galleryModal').addEventListener('click', e=>{ if (e.target.id === 'galleryModal') closeGallery(); });
document.addEventListener('keydown', e=>{
  if (e.key !== 'Escape') return;
  closeImg(); closeMockup(); closeDoc(); closeCaseStudy(); closeGallery();
});
window.addEventListener('resize', ()=>{
  const modal = document.getElementById('mockupModal');
  if (!modal.classList.contains('open')) return;
  const wasFit = Math.abs(mockupScale - 1) < 0.01;
  mockupFitWidth = computeFitWidth();
  if (wasFit) applyMockupZoom();
});
(function(){
  const body = document.getElementById('mockupModalBody');
  body.addEventListener('wheel', e=>{
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    mockupZoom(e.deltaY < 0 ? 0.15 : -0.15);
  }, { passive:false });
  let isDown=false, startX=0, startY=0, startLeft=0, startTop=0;
  body.addEventListener('mousedown', e=>{ isDown=true; body.classList.add('dragging'); startX=e.pageX; startY=e.pageY; startLeft=body.scrollLeft; startTop=body.scrollTop; });
  window.addEventListener('mouseup', ()=>{ isDown=false; body.classList.remove('dragging'); });
  body.addEventListener('mouseleave', ()=>{ isDown=false; body.classList.remove('dragging'); });
  body.addEventListener('mousemove', e=>{
    if (!isDown) return; e.preventDefault();
    body.scrollLeft = startLeft - (e.pageX - startX);
    body.scrollTop = startTop - (e.pageY - startY);
  });
})();

/* ════════════════════════════════════════════════════════════════
   CHROME: theme, nav, toast, contact form, year
   ════════════════════════════════════════════════════════════════ */
document.getElementById('fyear').textContent = new Date().getFullYear();

const htmlEl = document.documentElement;
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
function setTheme(t){
  htmlEl.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
  localStorage.setItem('gwen_theme', t);
  themeIcon.className = t === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}
setTheme(localStorage.getItem('gwen_theme') || 'light');
themeToggleBtn.addEventListener('click', ()=> setTheme(htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light'));

const navMenuBtn = document.getElementById('navMenuBtn');
const navLinks = document.getElementById('navLinks');
navMenuBtn.addEventListener('click', ()=>{
  const open = navLinks.classList.toggle('open');
  navMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  navMenuBtn.innerHTML = open ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
});
navLinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
  navLinks.classList.remove('open');
  navMenuBtn.setAttribute('aria-expanded', 'false');
  navMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
}));
document.getElementById('contactScrollBtn').addEventListener('click', ()=>{
  document.getElementById('connect').scrollIntoView({ behavior:'smooth', block:'start' });
});

function showToast(msg, ok){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.background = ok ? 'var(--sage)' : 'var(--coral)';
  t.style.color = '#fff';
  t.classList.add('show');
  setTimeout(()=> t.classList.remove('show'), 3200);
}
(function(){
  const form = document.getElementById('contactFormElement');
  const btn = document.getElementById('submitBtn');
  form.addEventListener('submit', async e=>{
    e.preventDefault();
    let ok = true;
    ['name','email','message'].forEach(id=>{
      const el = document.getElementById(id);
      const err = document.getElementById(id + '-error');
      if (el && !el.value.trim()){ if (err) err.textContent = 'Required.'; ok = false; }
      else if (err) err.textContent = '';
    });
    if (!ok) return;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…'; btn.disabled = true;
    try {
      const res = await fetch(form.action, { method:'POST', body:new FormData(form), headers:{'Accept':'application/json'} });
      if (res.ok){ form.reset(); showToast('Message sent — thank you.', true); }
      else { const d = await res.json(); showToast((d.errors||[]).map(x=>x.message).join(', ') || 'Something went wrong.', false); }
    } catch { showToast('Network error. Please try again.', false); }
    finally { btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send message'; btn.disabled = false; }
  });
})();

/* ════════════════════════════════════════════════════════════════
   MOTION SYSTEM
   ════════════════════════════════════════════════════════════════ */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isFinePointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

/* custom cursor */
if (isFinePointer && !prefersReducedMotion){
  document.body.classList.add('has-cursor');
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  const label = document.getElementById('cursorLabel');
  let rx=0, ry=0, tx=0, ty=0;
  window.addEventListener('mousemove', e=>{
    dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px';
    tx = e.clientX; ty = e.clientY;
    label.style.left = e.clientX + 'px'; label.style.top = e.clientY + 'px';
  });
  function loop(){ rx += (tx-rx)*0.2; ry += (ty-ry)*0.2; ring.style.left = rx+'px'; ring.style.top = ry+'px'; requestAnimationFrame(loop); }
  loop();
  document.querySelectorAll('.clickable, a, button').forEach(el=>{
    el.addEventListener('mouseenter', ()=> ring.classList.add('big'));
    el.addEventListener('mouseleave', ()=>{ ring.classList.remove('big'); label.classList.remove('show'); label.textContent=''; });
  });
  document.querySelectorAll('[data-cursor]').forEach(el=>{
    el.addEventListener('mouseenter', ()=>{ label.textContent = el.dataset.cursor; label.classList.add('show'); });
  });
} else {
  document.getElementById('cursorDot').style.display='none';
  document.getElementById('cursorRing').style.display='none';
  document.getElementById('cursorLabel').style.display='none';
}

/* scroll progress + back-to-top + index rail */
const progressLine = document.getElementById('progressLine');
const backToTop = document.getElementById('backToTop');
const sections = ['about-me','services','skills','work','process','experience','certifications','connect'];
const railCur = document.getElementById('railCur');
const railFill = document.getElementById('railFill');
document.getElementById('railTotal').textContent = String(sections.length).padStart(2,'0');

function onScroll(){
  const h = document.documentElement;
  const scrolled = h.scrollTop;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (scrolled/max)*100 : 0;
  progressLine.style.width = pct + '%';
  backToTop.classList.toggle('show', scrolled > 600);
  document.getElementById('mainNav').classList.toggle('scrolled', scrolled > 20);

  let curIdx = 0;
  sections.forEach((id,i)=>{
    const el = document.getElementById(id);
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top <= 160) curIdx = i;
  });
  railCur.textContent = String(curIdx+1).padStart(2,'0');
  railFill.style.width = ((curIdx+1)/sections.length*100) + '%';
}
document.addEventListener('scroll', onScroll, { passive:true });
backToTop.addEventListener('click', ()=> window.scrollTo({ top:0, behavior:'smooth' }));

/* role swapper — cross-fades a labeled chip */
(function(){
  const el = document.getElementById('roleSwap');
  const roles = CONTENT.roles;
  let i = 0;
  function make(text){ const s = document.createElement('span'); s.className='r'; s.innerHTML = text; return s; }
  let cur = make(roles[0]); el.appendChild(cur); requestAnimationFrame(()=> cur.classList.add('active'));
  if (prefersReducedMotion) return;
  setInterval(()=>{
    i = (i+1) % roles.length;
    const next = make(roles[i]);
    el.appendChild(next);
    requestAnimationFrame(()=> next.classList.add('active'));
    cur.classList.add('leaving'); cur.classList.remove('active');
    setTimeout(()=> cur.remove(), 550);
    cur = next;
  }, 2600);
})();

/* hero inspector — live coordinate + role readout, tracks pointer inside hero */
(function(){
  const canvas = document.getElementById('inspCanvas');
  const node = document.getElementById('inspNode');
  const coords = document.getElementById('inspCoords');
  const roleInline = document.getElementById('inspRole');
  if (!canvas) return;
  roleInline.innerHTML = CONTENT.roles[0];
  if (prefersReducedMotion || !isFinePointer) return;
  canvas.addEventListener('mousemove', e=>{
    const r = canvas.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const shiftX = (px - 0.5) * 14;
    const shiftY = (py - 0.5) * 14;
    node.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
    coords.textContent = `x ${Math.round(px*480)} · y ${Math.round(py*360)}`;
  });
  canvas.addEventListener('mouseleave', ()=>{ node.style.transform = ''; coords.textContent = 'x 240 · y 160'; });
})();

/* stat count-up */
(function(){
  const nums = document.querySelectorAll('.stat-num[data-count]');
  if (!nums.length) return;
  function animate(el){
    const target = parseInt(el.dataset.count,10)||0;
    if (prefersReducedMotion){ el.textContent = target; return; }
    const start = performance.now(); const dur = 1000;
    function tick(now){
      const p = Math.min((now-start)/dur,1);
      el.textContent = Math.round((1-Math.pow(1-p,3))*target);
      if (p<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if (en.isIntersecting){ animate(en.target); io.unobserve(en.target); } });
  }, { threshold:.5 });
  nums.forEach(n=> io.observe(n));
})();

/* generic reveal observer for .rv elements */
function observeReveals(){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold:.14, rootMargin:'0px 0px -8% 0px' });
  document.querySelectorAll('.rv:not(.in)').forEach(el=> io.observe(el));
}

/* process — scroll-linked progress + active step */
(function(){
  const section = document.getElementById('process');
  const fill = document.getElementById('processFill');
  function update(){
    const r = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = r.height + vh*0.6;
    const passed = vh*0.85 - r.top;
    const progress = Math.max(0, Math.min(1, passed/total));
    fill.style.width = (progress*100)+'%';
    const step = Math.max(1, Math.min(4, Math.ceil(progress*4)||1));
    document.querySelectorAll('.process-card').forEach(c=> c.classList.toggle('active', Number(c.dataset.step) <= step && progress > 0.02));
  }
  document.addEventListener('scroll', update, { passive:true });
  window.addEventListener('resize', update);
  window.__processUpdate = update;
})();

/* timeline — draw line + dot activation as items enter view */
(function(){
  const fill = document.getElementById('tlFill');
  function bind(){
    const items = document.querySelectorAll('.tl-item');
    const io = new IntersectionObserver(entries=>{
      entries.forEach(en=>{
        if (en.isIntersecting){ en.target.classList.add('in'); }
      });
      const last = document.querySelector('.tl-item.in:last-of-type');
      if (last && fill){
        const tl = document.querySelector('.timeline');
        const tlRect = tl.getBoundingClientRect();
        const lastRect = last.querySelector('.tl-dot').getBoundingClientRect();
        fill.style.height = Math.max(0, (lastRect.top - tlRect.top) + 8) + 'px';
      }
    }, { threshold:.4 });
    items.forEach(i=> io.observe(i));
  }
  window.__timelineBind = bind;
})();

/* mockup rail — drag to scroll */
(function(){
  const rail = document.getElementById('mockupRail');
  if (!rail) return;
  let isDown=false, startX=0, startLeft=0;
  rail.addEventListener('mousedown', e=>{ isDown=true; rail.classList.add('dragging'); startX=e.pageX; startLeft=rail.scrollLeft; });
  window.addEventListener('mouseup', ()=>{ isDown=false; rail.classList.remove('dragging'); });
  rail.addEventListener('mouseleave', ()=>{ isDown=false; rail.classList.remove('dragging'); });
  rail.addEventListener('mousemove', e=>{
    if (!isDown) return; e.preventDefault();
    rail.scrollLeft = startLeft - (e.pageX - startX);
  });
})();

/* work tabs */
document.querySelectorAll('.work-tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.work-tab').forEach(t=> t.classList.remove('active'));
    document.querySelectorAll('.work-panel').forEach(p=> p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.panel).classList.add('active');
  });
});

/* ════════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════════ */
renderServices();
renderSkills();
renderProcess();
renderTimeline();
renderCerts();
renderMockups();
renderLogos();
renderProjects();
observeReveals();
onScroll();
if (window.__processUpdate) window.__processUpdate();
if (window.__timelineBind) window.__timelineBind();
