const burger = document.querySelector('.burger__menu__image');
burger.addEventListener('click', function(){
  document.querySelector('.burger__button').classList.toggle('burger__button__animation');
  document.querySelector('.burger__menu__image').classList.toggle('burger__menu__active');
  document.querySelector('.logo__head').classList.toggle('logo__head__active');
  document.querySelector('body').classList.toggle('show');
  document.querySelector('.burger__show').classList.toggle('show');
})
window.addEventListener('click', function(event){
    const elem=document.querySelector('.burger__button');
      if(!(elem === event.target)&&  (!(burger === event.target))){
        document.querySelector('.burger__button').classList.remove('burger__button__animation');
        document.querySelector('.burger__button').classList.remove('burger__button__animation');
        document.querySelector('.logo__head').classList.remove('logo__head__active');
        document.querySelector('body').classList.remove('show');
        document.querySelector('.overlayBurger').classList.remove('show');
    }
      });