
(function(){
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if(btn && menu){
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', (e) => {
      if(!menu.contains(e.target) && !btn.contains(e.target)){
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
      }
    });
  }
})();
