document.addEventListener('DOMContentLoaded', function () {

  // ── THEME ──
  const themeBox = document.getElementById('themeCheckbox');
  const htmlEl = document.documentElement;
  const saved = localStorage.getItem('gwen_theme') || 'light';
  htmlEl.setAttribute('data-theme', saved);
  if (themeBox) { themeBox.checked = saved === 'dark'; }
  if (themeBox) themeBox.addEventListener('change', function () {
    const t = this.checked ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', t);
    localStorage.setItem('gwen_theme', t);
  });

  // ── PROFILE ──
  const prof = document.getElementById('profileContainer');
  if (prof) prof.addEventListener('click', function () {
    this.style.transform = 'scale(.92) rotate(4deg)';
    setTimeout(() => this.style.transform = '', 250);
  });

  // ── CONTACT SCROLL ──
  const scrollBtn = document.getElementById('contactScrollBtn');
  const strip = document.getElementById('contactStrip');
  if (scrollBtn && strip) scrollBtn.addEventListener('click', () => {
    strip.scrollIntoView({ behavior: 'smooth', block: 'center' });
    strip.style.outline = '3px solid rgba(212,66,106,.4)';
    setTimeout(() => strip.style.outline = '', 1400);
  });

  // ── CERTS TOGGLE ──
  const certBtn  = document.getElementById('toggleCertificatesBtn');
  const certGrid = document.getElementById('certificatesGrid');
  if (certBtn && certGrid) {
    const hidden = [...certGrid.querySelectorAll('.hidden-cert')];
    if (!hidden.length) { certBtn.style.display = 'none'; } else {
      let exp = false;
      hidden.forEach(el => el.style.display = 'none');
      certBtn.addEventListener('click', () => {
        exp = !exp;
        hidden.forEach(el => { el.style.display = exp ? 'flex' : 'none'; });
        certBtn.innerHTML = exp ? '<i class="fas fa-chevron-up"></i> Show Less' : '<i class="fas fa-chevron-down"></i> View All';
        certBtn.classList.toggle('active', exp);
      });
    }
  }

  // ── PROJECTS TOGGLE ──
  const projBtn  = document.getElementById('toggleProjectsBtn');
  const projGrid = document.getElementById('projectsGrid');
  if (projBtn && projGrid) {
    const hidden = [...projGrid.querySelectorAll('.hidden-proj')];
    if (!hidden.length) { projBtn.style.display = 'none'; } else {
      let exp = false;
      hidden.forEach(el => el.style.display = 'none');
      projBtn.addEventListener('click', () => {
        exp = !exp;
        hidden.forEach(el => { el.style.display = exp ? 'flex' : 'none'; });
        projBtn.innerHTML = exp ? '<i class="fas fa-chevron-up"></i> Show Less' : '<i class="fas fa-chevron-down"></i> View All';
        projBtn.classList.toggle('active', exp);
      });
    }
  }

  // ── FORM ──
  const form      = document.getElementById('contactFormElement');
  const submitBtn = document.getElementById('submitBtn');
  const toast     = document.getElementById('toast');

  function showToast(msg, type = 'success') {
    if (!toast) return;
    const icons = { success:'check-circle', error:'exclamation-circle', info:'info-circle' };
    toast.innerHTML = `<i class="fas fa-${icons[type]||'info-circle'}"></i> ${msg}`;
    toast.className = 'toast ' + type + ' show';
    setTimeout(() => toast.classList.remove('show'), 3200);
  }
  window.showToast = showToast;

  if (form) form.addEventListener('submit', async function (e) {
    e.preventDefault();
    let ok = true;
    ['name','email','message'].forEach(id => {
      const el = document.getElementById(id);
      const err = document.getElementById(id + '-error');
      if (el && !el.value.trim()) { if (err) err.textContent = 'Required.'; ok = false; }
      else if (err) err.textContent = '';
    });
    if (!ok) return;
    if (submitBtn) { submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…'; submitBtn.disabled = true; }
    try {
      const r = await fetch('send-email.php', { method:'POST', body:new FormData(form) });
      const d = await r.json();
      if (d.success) { form.reset(); showToast('Message sent! 💌', 'success'); }
      else showToast(d.message, 'error');
    } catch { showToast('Network error. Try again.', 'error'); }
    finally {
      if (submitBtn) { submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message'; submitBtn.disabled = false; }
    }
  });

  // ── SCROLL REVEAL ──
  const revObs = new IntersectionObserver((entries, o) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.style.opacity = '1';
        en.target.style.transform = 'translateY(0)';
        o.unobserve(en.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.mc-section, .sb-section, .hero').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    revObs.observe(el);
  });

  // ── RESUME ──
  const resumeA = document.querySelector('.btn-solid');
  if (resumeA) resumeA.addEventListener('click', () => showToast('Opening resume… 📄', 'info'));

  // ── WELCOME ──
  setTimeout(() => showToast("Welcome to Gwen's portfolio! 🌸", 'info'), 1100);

  // ══════════════════════════════════════
  //  GAME MODAL
  // ══════════════════════════════════════
  const openBtn  = document.getElementById('openGameBtn');
  const closeBtn = document.getElementById('closeGameBtn');
  const overlay  = document.getElementById('gameOverlay');

  function openGame()  { overlay.classList.add('open');    if (!gameRunning) drawIdle(); }
  function closeGame() { overlay.classList.remove('open'); pauseGame(); }

  if (openBtn)  openBtn.addEventListener('click', openGame);
  if (closeBtn) closeBtn.addEventListener('click', closeGame);
  if (overlay)  overlay.addEventListener('click', e => { if (e.target === overlay) closeGame(); });

  // ══════════════════════════════════════
  //  STELLAR DASH — CANVAS GAME
  // ══════════════════════════════════════
  const canvas = document.getElementById('gameCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    const W = Math.min((canvas.parentElement || document.body).clientWidth - 44, 580);
    canvas.width  = W;
    canvas.height = Math.floor(W * 0.43);
  }
  resize();
  window.addEventListener('resize', () => { resize(); if (!gameRunning) drawIdle(); });

  let gameRunning = false, animId = 0;
  let score = 0, lives = 3, level = 1, frame = 0;
  let hs   = parseInt(localStorage.getItem('gwen_hs') || '0');
  let diff = 'easy', invincible = 0;
  let asteroids = [], bgStars = [], sparks = [], collectibles = [];

  const DIFF = {
    easy:  { spd:1.7, rate:90,  cRate:170, lives:4 },
    hard:  { spd:2.7, rate:60,  cRate:220, lives:3 },
    chaos: { spd:4.1, rate:35,  cRate:300, lives:2 },
  };

  const ship = { x:0, y:0, vx:0, vy:0, spd:3.8, trail:[], w:26, h:20 };
  const PAL  = ['#d4426a','#f4a8bc','#2bb5a0','#6c4ec9','#f7c948','#a02655','#2563eb'];

  const rn = (a,b) => a + Math.random()*(b-a);
  const rc = ()    => PAL[Math.floor(Math.random()*PAL.length)];

  // BG stars
  function mkBg() {
    bgStars = [];
    for (let i=0;i<70;i++) bgStars.push({x:rn(0,canvas.width),y:rn(0,canvas.height),r:rn(.4,1.8),spd:rn(.08,.5),a:rn(.2,.85)});
  }
  function tickBg() { bgStars.forEach(s=>{s.y+=s.spd;if(s.y>canvas.height){s.y=0;s.x=rn(0,canvas.width);}}); }
  function drawBg() { bgStars.forEach(s=>{ctx.save();ctx.globalAlpha=s.a;ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();ctx.restore();}); }

  // Ship
  function drawShip(x,y,flick) {
    ctx.save(); ctx.translate(x,y);
    if (flick && Math.floor(flick/5)%2===0){ctx.restore();return;}
    ship.trail.push({x,y,a:.5});
    if(ship.trail.length>8) ship.trail.shift();
    ship.trail.forEach((t,i)=>{
      ctx.save();ctx.globalAlpha=(i/ship.trail.length)*t.a*.6;ctx.fillStyle='#d4426a';
      ctx.beginPath();ctx.arc(t.x-x,t.y-y+ship.h*.4,3*(i/ship.trail.length),0,Math.PI*2);ctx.fill();ctx.restore();
    });
    const g=ctx.createRadialGradient(0,0,0,0,0,22);g.addColorStop(0,'rgba(212,66,106,.18)');g.addColorStop(1,'transparent');
    ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,22,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#f4a8bc';
    ctx.beginPath();ctx.moveTo(0,-ship.h/2);ctx.lineTo(ship.w/2,ship.h/2);ctx.lineTo(0,ship.h/3);ctx.lineTo(-ship.w/2,ship.h/2);ctx.closePath();ctx.fill();
    ctx.fillStyle='#6c4ec9';ctx.beginPath();ctx.arc(0,-2,4.5,0,Math.PI*2);ctx.fill();
    if(ship.vx||ship.vy){
      ctx.fillStyle=`rgba(247,${130+Math.floor(Math.random()*80)},72,.88)`;
      ctx.beginPath();ctx.moveTo(-4,ship.h/2);ctx.lineTo(4,ship.h/2);ctx.lineTo(0,ship.h/2+rn(7,14));ctx.closePath();ctx.fill();
    }
    ctx.restore();
  }

  // Asteroid
  function spawnAst() {
    const cfg=DIFF[diff];let x,y,vx,vy;
    const s=Math.random()<.65?'t':Math.random()<.5?'l':'r';
    if(s==='t'){x=rn(20,canvas.width-20);y=-25;vx=rn(-1,1);vy=cfg.spd*rn(.8,1.4);}
    else if(s==='l'){x=-25;y=rn(20,canvas.height-20);vx=cfg.spd*rn(.5,1.2);vy=rn(-1,1);}
    else{x=canvas.width+25;y=rn(20,canvas.height-20);vx=-cfg.spd*rn(.5,1.2);vy=rn(-1,1);}
    asteroids.push({x,y,vx,vy:vy+level*.1,r:rn(9,18),sides:Math.floor(rn(5,10)),col:rc(),rot:rn(0,Math.PI*2),rs:rn(-.04,.04)});
  }
  function drawAst(a) {
    ctx.save();ctx.translate(a.x,a.y);ctx.rotate(a.rot);
    ctx.strokeStyle=a.col;ctx.lineWidth=1.8;ctx.shadowBlur=7;ctx.shadowColor=a.col;ctx.fillStyle=a.col+'22';
    ctx.beginPath();
    for(let i=0;i<a.sides;i++){const ang=(i/a.sides)*Math.PI*2;const w=rn(.75,1.15)*a.r;i===0?ctx.moveTo(Math.cos(ang)*w,Math.sin(ang)*w):ctx.lineTo(Math.cos(ang)*w,Math.sin(ang)*w);}
    ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();
  }

  // Collectible star
  function spawnCol() { collectibles.push({x:rn(20,canvas.width-20),y:-15,vy:rn(.7,1.3),r:8,col:rc(),p:0}); }
  function drawStar5(x,y,r,col,a=1) {
    ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.fillStyle=col;ctx.shadowBlur=10;ctx.shadowColor=col;
    ctx.beginPath();
    for(let i=0;i<5;i++){const ou=(i/5)*Math.PI*2-Math.PI/2,inn=ou+Math.PI/5;
      i===0?ctx.moveTo(Math.cos(ou)*r,Math.sin(ou)*r):ctx.lineTo(Math.cos(ou)*r,Math.sin(ou)*r);
      ctx.lineTo(Math.cos(inn)*(r*.4),Math.sin(inn)*(r*.4));}
    ctx.closePath();ctx.fill();ctx.restore();
  }

  // Sparks
  function burst(x,y,col,n=12) {
    for(let i=0;i<n;i++){const ang=(i/n)*Math.PI*2,spd=rn(1.5,4.5);
      sparks.push({x,y,vx:Math.cos(ang)*spd,vy:Math.sin(ang)*spd,r:rn(2,5),col,life:1,dec:rn(.025,.055)});}
  }

  // Collision
  function circRect(cx,cy,cr,rx,ry,rw,rh){
    return Math.hypot(cx-Math.max(rx-rw/2,Math.min(cx,rx+rw/2)),cy-Math.max(ry-rh/2,Math.min(cy,ry+rh/2)))<cr;
  }

  // UI
  function updateUI(){
    const sv=document.getElementById('scoreStat'),lv=document.getElementById('livesStat'),hv=document.getElementById('hsStat');
    if(sv)sv.textContent=score; if(lv)lv.textContent='♥'.repeat(lives); if(hv)hv.textContent=hs;
  }
  function setMsg(t,col='rgba(200,160,180,.45)'){
    const el=document.getElementById('gameMsg');if(el){el.textContent=t;el.style.color=col;}
  }

  // Idle
  function drawIdle(){
    ctx.fillStyle='#050210';ctx.fillRect(0,0,canvas.width,canvas.height);drawBg();
    drawShip(canvas.width/2,canvas.height/2,0);
    ctx.save();ctx.textAlign='center';
    ctx.fillStyle='rgba(255,255,255,.07)';
    ctx.font=`bold ${Math.floor(canvas.width*.046)}px Nunito,sans-serif`;
    ctx.fillText('STELLAR DASH',canvas.width/2,canvas.height/2+52);
    ctx.fillStyle='rgba(212,66,106,.5)';
    ctx.font=`${Math.floor(canvas.width*.025)}px Plus Jakarta Sans,sans-serif`;
    ctx.fillText('Press PLAY to launch!',canvas.width/2,canvas.height/2+75);
    ctx.restore();
  }

  // Keys
  const keys={};
  document.addEventListener('keydown',e=>{keys[e.key]=true;});
  document.addEventListener('keyup',  e=>{keys[e.key]=false;});

  // Loop
  function loop(){
    if(!gameRunning)return;frame++;
    ctx.fillStyle='#050210';ctx.fillRect(0,0,canvas.width,canvas.height);
    drawBg();tickBg();
    const cfg=DIFF[diff];
    ship.vx=0;ship.vy=0;
    if(keys['ArrowLeft'] ||keys['a']||keys['A']) ship.vx=-ship.spd;
    if(keys['ArrowRight']||keys['d']||keys['D']) ship.vx= ship.spd;
    if(keys['ArrowUp']   ||keys['w']||keys['W']) ship.vy=-ship.spd;
    if(keys['ArrowDown'] ||keys['s']||keys['S']) ship.vy= ship.spd;
    ship.x=Math.max(ship.w/2,Math.min(canvas.width -ship.w/2,ship.x+ship.vx));
    ship.y=Math.max(ship.h/2,Math.min(canvas.height-ship.h/2,ship.y+ship.vy));

    if(frame%cfg.rate ===0) spawnAst();
    if(frame%cfg.cRate===0) spawnCol();
    if(frame%280===0){level++;score+=50;burst(canvas.width/2,30,'#f7c948',16);setMsg(`Level ${level}! +50`,'#f7c948');setTimeout(()=>setMsg(''),1100);}

    asteroids.forEach(a=>{a.x+=a.vx;a.y+=a.vy;a.rot+=a.rs;});
    asteroids=asteroids.filter(a=>a.x>-60&&a.x<canvas.width+60&&a.y<canvas.height+60);
    collectibles.forEach(c=>{c.y+=c.vy;c.p+=.1;});
    collectibles=collectibles.filter(c=>c.y<canvas.height+30);

    asteroids.forEach(drawAst);
    collectibles.forEach(c=>drawStar5(c.x,c.y+Math.sin(c.p)*3,c.r+Math.sin(c.p),c.col));
    drawShip(ship.x,ship.y,invincible);
    if(invincible>0)invincible--;

    sparks=sparks.filter(p=>{
      p.x+=p.vx;p.y+=p.vy;p.vy+=.07;p.life-=p.dec;p.r*=.96;
      if(p.life>0){ctx.save();ctx.globalAlpha=p.life;ctx.fillStyle=p.col;ctx.shadowBlur=5;ctx.shadowColor=p.col;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();ctx.restore();}
      return p.life>0;
    });

    score++;
    if(frame%60===0)updateUI();

    if(invincible===0){
      for(let i=asteroids.length-1;i>=0;i--){
        const a=asteroids[i];
        if(circRect(a.x,a.y,a.r,ship.x,ship.y,ship.w*.7,ship.h*.7)){
          burst(a.x,a.y,a.col);burst(ship.x,ship.y,'#f4a8bc',16);
          asteroids.splice(i,1);lives--;invincible=85;updateUI();
          setMsg('💥 Hit!','#f4a8bc');setTimeout(()=>setMsg(''),800);
          if(lives<=0){endGame();return;}break;
        }
      }
    }
    for(let i=collectibles.length-1;i>=0;i--){
      const c=collectibles[i];
      if(Math.hypot(c.x-ship.x,c.y-ship.y)<c.r+ship.w/2.5){
        burst(c.x,c.y,c.col,9);score+=25;collectibles.splice(i,1);updateUI();
        setMsg('+25 ⭐','#f7c948');setTimeout(()=>setMsg(''),600);
      }
    }
    ctx.save();ctx.font=`bold ${Math.floor(canvas.width*.02)}px Nunito,sans-serif`;ctx.fillStyle='rgba(212,66,106,.5)';ctx.textAlign='left';ctx.fillText(`LV ${level}`,9,canvas.height-7);ctx.restore();
    animId=requestAnimationFrame(loop);
  }

  function startGame(){
    const cfg=DIFF[diff];score=0;lives=cfg.lives;level=1;frame=0;
    asteroids=[];collectibles=[];sparks=[];ship.x=canvas.width/2;ship.y=canvas.height*.68;ship.trail=[];
    invincible=0;gameRunning=true;mkBg();updateUI();setMsg('');
    cancelAnimationFrame(animId);
    const pb=document.getElementById('gameStartBtn');if(pb)pb.innerHTML='<i class="fas fa-redo"></i> RESTART';
    loop();
  }

  function pauseGame(){gameRunning=false;cancelAnimationFrame(animId);}

  function endGame(){
    gameRunning=false;cancelAnimationFrame(animId);
    if(score>hs){hs=score;localStorage.setItem('gwen_hs',hs);}updateUI();
    ctx.save();
    ctx.fillStyle='rgba(5,2,16,.82)';ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.textAlign='center';
    const g=ctx.createLinearGradient(0,0,canvas.width,0);g.addColorStop(0,'#d4426a');g.addColorStop(1,'#6c4ec9');
    ctx.fillStyle=g;ctx.font=`bold ${Math.floor(canvas.width*.07)}px Nunito,sans-serif`;ctx.fillText('GAME OVER',canvas.width/2,canvas.height/2-16);
    ctx.fillStyle='rgba(255,255,255,.65)';ctx.font=`${Math.floor(canvas.width*.031)}px Plus Jakarta Sans,sans-serif`;ctx.fillText(`Score: ${score}  ·  Best: ${hs}`,canvas.width/2,canvas.height/2+18);
    ctx.fillStyle='rgba(212,66,106,.55)';ctx.font=`${Math.floor(canvas.width*.025)}px Plus Jakarta Sans,sans-serif`;ctx.fillText('Hit RESTART to try again',canvas.width/2,canvas.height/2+46);
    ctx.restore();
    const pb=document.getElementById('gameStartBtn');if(pb)pb.innerHTML='<i class="fas fa-rocket"></i> PLAY AGAIN';
    setMsg(`Final: ${score}`,'#f4a8bc');
  }

  // Mouse/touch
  let drag=false;
  canvas.addEventListener('mousedown',()=>drag=true);
  canvas.addEventListener('mouseup',()=>drag=false);
  canvas.addEventListener('mousemove',e=>{
    if(!drag||!gameRunning)return;const rc=canvas.getBoundingClientRect();
    ship.x=(e.clientX-rc.left)*(canvas.width/rc.width);ship.y=(e.clientY-rc.top)*(canvas.height/rc.height);
  });
  canvas.addEventListener('touchstart',e=>{e.preventDefault();drag=true;},{passive:false});
  canvas.addEventListener('touchend',()=>drag=false);
  canvas.addEventListener('touchmove',e=>{
    e.preventDefault();if(!drag||!gameRunning)return;const rc=canvas.getBoundingClientRect();
    ship.x=(e.touches[0].clientX-rc.left)*(canvas.width/rc.width);ship.y=(e.touches[0].clientY-rc.top)*(canvas.height/rc.height);
  },{passive:false});

  // D-pad
  ['up','down','left','right'].forEach(dir=>{
    const b=document.querySelector(`.dpad-btn[data-dir="${dir}"]`);
    if(!b)return;
    const fn=()=>{if(!gameRunning)return;const s=ship.spd*16;
      if(dir==='up')ship.y-=s;if(dir==='down')ship.y+=s;if(dir==='left')ship.x-=s;if(dir==='right')ship.x+=s;
      ship.x=Math.max(ship.w/2,Math.min(canvas.width-ship.w/2,ship.x));ship.y=Math.max(ship.h/2,Math.min(canvas.height-ship.h/2,ship.y));
    };
    b.addEventListener('touchstart',e=>{e.preventDefault();fn();},{passive:false});b.addEventListener('mousedown',fn);
  });

  const playBtn=document.getElementById('gameStartBtn');
  if(playBtn)playBtn.addEventListener('click',startGame);
  document.querySelectorAll('.g-dbtn').forEach(b=>b.addEventListener('click',function(){
    document.querySelectorAll('.g-dbtn').forEach(x=>x.classList.remove('active'));
    this.classList.add('active');diff=this.dataset.diff;
  }));

  // Init
  mkBg();ship.x=canvas.width/2;ship.y=canvas.height*.68;drawIdle();updateUI();setMsg('Arrow keys / WASD · Drag on mobile');

});
