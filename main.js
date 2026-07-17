// ============ FOOTER YEAR ============
document.getElementById('fyear').textContent = new Date().getFullYear();

// ============ NAV SCROLL STATE ============
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

// ============ REVEAL ON SCROLL ============
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// ============ SKILL BARS FILL ON VIEW ============
const skillBars = document.querySelectorAll('.sbar');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
skillBars.forEach(el => skillObserver.observe(el));

// ============ WORK ROWS: hover preview + expand ============
const preview = document.getElementById('workPreview');
const previewImg = document.getElementById('workPreviewImg');
const workRows = document.querySelectorAll('.work-row');
const isDesktop = () => window.matchMedia('(min-width: 981px)').matches;

workRows.forEach(row => {
  const img = row.dataset.img;

  row.addEventListener('mousemove', (e) => {
    if (!isDesktop() || !img) return;
    previewImg.src = img;
    const offsetX = 34, offsetY = -105;
    let x = e.clientX + offsetX;
    let y = e.clientY + offsetY;
    const maxX = window.innerWidth - 340;
    const maxY = window.innerHeight - 230;
    x = Math.min(x, maxX);
    y = Math.max(20, Math.min(y, maxY));
    preview.style.left = x + 'px';
    preview.style.top = y + 'px';
    preview.classList.add('show');
  });

  row.addEventListener('mouseleave', () => preview.classList.remove('show'));

  row.addEventListener('click', () => {
    const wasOpen = row.classList.contains('open');
    workRows.forEach(r => r.classList.remove('open'));
    if (!wasOpen) row.classList.add('open');
    preview.classList.remove('show');
  });

  row.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); row.click(); }
  });
});

// ============ SHOW MORE PROJECTS ============
const moreBtn = document.getElementById('moreProjectsBtn');
const workExtra = document.getElementById('workExtra');
moreBtn.addEventListener('click', () => {
  const open = workExtra.classList.toggle('show');
  moreBtn.classList.toggle('open', open);
  moreBtn.querySelector('.mtext').textContent = open ? 'Show fewer projects' : 'Show 5 more projects';
  if (open) {
    // re-observe reveal targets inside, and re-bind row listeners already exist since elements were in DOM
    workExtra.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});

// ============ CERTIFICATE LIGHTBOX ============
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCap = document.getElementById('lightboxCap');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', () => {
    const file = card.dataset.file;
    if (!file) return;
    if (file.endsWith('.pdf')) {
      window.open(file, '_blank');
      return;
    }
    lightboxImg.src = file;
    lightboxCap.textContent = card.querySelector('.cert-name').textContent;
    lightbox.classList.add('open');
  });
});
lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.remove('open'); });

// ============ TOAST ============
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

// ============ CONTACT FORM ============
(function () {
  const form = document.getElementById('contactFormElement');
  const btn = document.getElementById('submitBtn');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let ok = true;
    ['name', 'email', 'message'].forEach(id => {
      const el = document.getElementById(id);
      const err = document.getElementById(id + '-error');
      if (el && !el.value.trim()) { if (err) err.textContent = 'Required.'; ok = false; }
      else if (err) err.textContent = '';
    });
    if (!ok) return;
    const originalText = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
      if (res.ok) { form.reset(); showToast('Message sent — thank you.'); }
      else { const d = await res.json(); showToast((d.errors || []).map(x => x.message).join(', ') || 'Something went wrong.'); }
    } catch {
      showToast('Network error — please try again.');
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
})();
