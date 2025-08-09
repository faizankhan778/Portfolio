// Typing effect for title name
const name = "Faizan";
let i = 0;
const titleEl = document.querySelector('.title');
const cursor = document.querySelector('.cursor');
function typeName(){
  if(i < name.length){
    const span = document.createElement('span');
    span.textContent = name[i];
    span.className = 'typed';
    titleEl.insertBefore(span, cursor);
    i++;
    setTimeout(typeName, 120);
  } else {
    cursor.style.opacity = '0';
  }
}
setTimeout(typeName, 600);

// simple parallax on mouse for profile card
const profile = document.getElementById('profileCard');
document.addEventListener('mousemove', (e) => {
  const r = profile.getBoundingClientRect();
  const cx = r.left + r.width/2;
  const cy = r.top + r.height/2;
  const dx = (e.clientX - cx)/40;
  const dy = (e.clientY - cy)/40;
  profile.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx/8}deg)`;
});

// reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('in');
  });
},{threshold:0.15});

document.querySelectorAll('.proj-card, .skill, .timeline-item, .profile-card').forEach(el => {
  observer.observe(el);
});

// set year
document.getElementById('year').textContent = new Date().getFullYear();
