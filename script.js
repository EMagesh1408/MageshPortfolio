/* ===================================================
   Magesh Kumar E — Portfolio Scripts
   =================================================== */

/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx - 5 + 'px';
  cursor.style.top  = my - 5 + 'px';
});

(function animateRing() {
  rx += (mx - rx - 19) * 0.12;
  ry += (my - ry - 19) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, button, .project-card, .skill-group, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2.2)';
    ring.style.transform   = 'scale(1.5)';
    ring.style.opacity     = '1';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    ring.style.transform   = 'scale(1)';
    ring.style.opacity     = '0.7';
  });
});

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity   = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.skill-group, .project-card, .stat-card, .cert-card, .edu-item'
).forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(24px)';
  el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
  observer.observe(el);
});

/* ── CONTACT FORM → MAILTO ── */
function sendMail() {
  const name  = document.getElementById('visitorName').value.trim();
  const email = document.getElementById('visitorEmail').value.trim();
  const msg   = document.getElementById('visitorMsg').value.trim();

  if (!name || !email) {
    alert('Please enter your name and email before sending.');
    return;
  }

  const subject = encodeURIComponent('Portfolio Inquiry from ' + name);
  const body    = encodeURIComponent(
    'Hi Magesh,\n\n' +
    'My name is ' + name + '.\n' +
    'Reach me at: ' + email + '\n\n' +
    (msg || '(No message provided)') +
    '\n\nBest regards,\n' + name
  );

  window.location.href = 'mailto:mageshkumar@example.com?subject=' + subject + '&body=' + body;

  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}
