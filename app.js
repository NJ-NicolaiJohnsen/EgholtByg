document.querySelector('#menu-icon').addEventListener('click', function(e){
  const menu = document.querySelector('.nav-bar')
  const hideBtn = document.querySelector('.hide-menu')
  hideBtn.style.display = 'block'


  menu.style.translate = '0'
  
  
  
  hideBtn.addEventListener('click', function(){
    menu.style.translate = '-100%'
  })
  menu.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', function (e1) {
      menu.style.translate = '-100%'
      hideBtn.style.display = 'none'
    })
  })
  
})