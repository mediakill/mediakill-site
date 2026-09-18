const items=document.querySelectorAll('.project-card,.bot,.steps div,.about,.contact,.numbers div');
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}})
},{threshold:.12});
items.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=(i%4)*70+'ms';observer.observe(el)});
