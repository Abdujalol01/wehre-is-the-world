elDarkModeButton=document.querySelector('.site-header-link');
elLightModeButton=document.querySelector('.site-header-link');
elDarkModeButton.addEventListener('click',function(){
document.body.classList.add('dark-mode');}
);
elLightModeButton.addEventListener('click',function(){
  document.body.classList.remove('light-mode');}
  );