 
 'use strict'
 
 
 // Modal

 let more = document.querySelector('.more'),                   // get button with class '.more'
 btnDescr = document.querySelectorAll('.description-btn'),    // get a pseudo-array tabs
 overlay = document.querySelector('.overlay'),               // get modal -  class '.overlay'
 close = document.querySelector('.popup-close');             // get cover element(X) - class '.popup-close'  

more.addEventListener('click', function() {                //when you click on the button(class '.more') appears modal
 overlay.style.display = 'block';
 this.classList.add('more-splash');
 document.body.style.overflow = 'hidden';
});
btnDescr.forEach(function(item) {                         // in cycle (forEach) use addEvenetListener for each tabs 
 item.addEventListener('click', function() {
     overlay.style.display = 'block';
     this.classList.add('more-splash');
     document.body.style.overflow = 'hidden';
 });
});
close.addEventListener('click', function() {             //when you click on the element(X) (class '.popup-close')  modal closes
 overlay.style.display = 'none';
 more.classList.remove('more-splash');
 document.body.style.overflow = '';
});
