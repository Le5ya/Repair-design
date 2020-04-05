/*document.addEventListener('DOMContentLoaded', function(event){
	// const modal = document.querySelector('.modal');
	// const modalBtn = document.querySelectorAll('[data-toggle=modal]');
	// const closeBtn = document.querySelector('.modal__close');
	// const switchModal = () => {
	// 		modal.classList.toggle('modal--visible');
	//   }
	// modalBtn.forEach(element => {
 //   element.addEventListener('click', switchModal);
	// });

 //  closeBtn.addEventListener('click', switchModal);

 //  document.addEventListener('keydown', function(event){
 //  	if (event.code == 'Escape') {
 //  		switchModal();
 //  	}
 //  });
 */

 // вверх к началу JS
	// const backTopBtn = document.querySelector('.button__back-top');
	// const up =() => {  
	//  let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
	// if(top > 0) {  
	//   window.scrollBy(0,((top+100)/-10));  
	//   t = setTimeout('up()',20);  
	// } else clearTimeout(t);  
	// return false;  
	// } 
	// backTopBtn.addEventListener('click', up);
  


 // });

$(document).ready(function () {

  

	var modal = $('.modal'),
			modalBtn = $('[data-toggle=modal]'),
			closeBtn = $('.modal__close');

	modalBtn.on('click', function() {

	modal.toggleClass('modal--visible');		
	});

	closeBtn.on('click', function() {

  modal.toggleClass('modal--visible');
	});
  
    // Вверх к началу jQ
	var backTopBtn = $('.button__back-top'),
		  sitePage = $('body,html'); 
    
	 backTopBtn.on('click', function() {  
	 sitePage.animate({scrollTop:0},500);    
	  });

	  var mySwiper = new Swiper ('.swiper-container', {
    	loop: true,
    	pagination: {
    		el: '.swiper-pagination',
    		type: 'bullets',
  },

  navigation: {
  	nextEl: '.swiper-button-next',
  	prevEl: '.swiper-button-prev',
  },
  
   })


var next = $('.swiper-button-next');
var prev = $('.swiper-button-prev');
var bullets = $('.swiper-pagination');

next.css('left', prev.width() + 10 + bullets.width() + 10);
bullets.css('left', prev.width() + 10);

new WOW().init();

// Валидация формы
$('.modal__form').validate({
	errorClass: "invalid",
	rules: {
 	// simple rule, converted to {required:true}
 	userName: {
 		required: true,
 	  minlength: 2,
 	  maxlength: 15
 	}, 
 	userPhone: "required",
 	// compound rule
 	userEmail: {
   	required: true,
   	email: true
 	}	
 },
 //сообщения
 messages: {
    userName: {
    	required: "Имя обязательно",
    	minlength: "Имя не короче  двух букв",
  		maxlength: "Не более 15 символов"
    }, 
    userPhone: "Укажите телефон",
      userEmail: {
        required: "Укажите email",
        email: "Введите корректный email"
    }
   },

    submitHandler: function(form) {
      $.ajaxSubmit();
      $.ajax({
      type: "POST",
      url: "send.php",
      data: "$(form).serialize()",
      success: function(response){
        console.log('Ajax сработал, ответ сервера:' + response);
        alert('Форма отправлена, мы свяжемся с ввми через 10 минут')
        $(form)[0].reset();
        modal.removeClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса')
        }

      })
    }


     });
  

  // var player
  // $('.video__play').on('click', function onYouTubeIframeAPIReady() {
  //       player = new YT.Player('player', {
  //         height: '465',
  //         width: '100%',
  //         videoId: 'RHzzLqJWqHs',
  //         events: {
  //           'onReady': videoPlay,
          
  //         }
  //       });
  //     })

  // function videoPlay() {
  //   event.target.player.playVideo();
  // }

   //создание Яндекс-карты
  /*ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'image/location.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

   

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});*/ 

   
});



