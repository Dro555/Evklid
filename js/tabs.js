// Header-search================================================================================
function searchToggle(obj, evt){
	var container = jQuery(obj).closest('.search-form');
	if(!container.hasClass('activ')){
	 container.addClass('activ');
	 evt.preventDefault();
	}
	else if(container.hasClass('activ') && jQuery(obj).closest('.search-form__input-holder').length == 0){
	 container.removeClass('activ');
	 container.find('.search-form__input').val(''); // очистка input
	}
}
// Header-burger================================================================================
document.querySelector('.header-burger__burger').addEventListener('click', function(){
  document.querySelector('.header-burger__burger-line').classList.toggle('active');
  document.querySelector('.header-burger__menu').classList.toggle("animate");

})
// Hero=========================================================================================


new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Слайд изображения',
  },
})
// Services==================================================================================
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-list__btn').forEach(function(navlist__btn){
    navlist__btn.addEventListener('click', function(dro){
    const path = dro.currentTarget.dataset.path;
    document.querySelectorAll('.nav-list__btn').forEach(function(btn){
    btn.classList.remove('nav-list__btn--active')});
    dro.currentTarget.classList.add('nav-list__btn--active');
    document.querySelectorAll('.services-cart__item').forEach(function(tabsBtn){
      tabsBtn.classList.remove('services-cart__item--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('services-cart__item--active');
      });
  });
})

// Support====================================================================================
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
  $( ".selector" ).accordion({
    heightStyle: "auto"
  });

} );
