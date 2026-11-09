const menuToggle=document.getElementById('menuToggle');const navMenu=document.getElementById('navMenu');menuToggle.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});navMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navMenu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));document.getElementById('year').textContent=new Date().getFullYear();const backTop=document.getElementById('backTop');window.addEventListener('scroll',()=>backTop.classList.toggle('show',window.scrollY>500),{passive:true});backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
const themeToggle=document.getElementById('themeToggle');
const themeIcon=themeToggle.querySelector('.theme-icon');
const themeLabel=themeToggle.querySelector('.theme-label');
function applyTheme(theme){const light=theme==='light';document.body.classList.toggle('light-theme',light);themeIcon.textContent=light?'☾':'☼';themeLabel.textContent=light?'Dark mode':'Light mode';themeToggle.setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme');}
const savedTheme=localStorage.getItem('naveen-portfolio-theme');
applyTheme(savedTheme||'dark');
themeToggle.addEventListener('click',()=>{const next=document.body.classList.contains('light-theme')?'dark':'light';applyTheme(next);localStorage.setItem('naveen-portfolio-theme',next);});
