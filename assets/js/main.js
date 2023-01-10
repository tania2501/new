(function ($)
  { "use strict"
  
/* 1. Preloder (готовый код, можно использовать в любом проекте) */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. Sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  

})(jQuery);

/* TABS */

    $('.nav-tabs>.nav-link').on('click',function(){
        $(this).parent().index();


        $('.nav-tabs>.nav-link').removeClass('active');
        $(this).addClass('active');

        $('.tab-content>').removeClass('show active');
        $('.tab-content>').eq($(this).index()).addClass('show active');
    });

    /* PARALLAX */

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

/* SLIDER */
var mySwiper = new Swiper ('.swiper-container',{
    direction : 'horizontal',
    stopOnLastSlide : false,
    autoplay : {
      delay: 5000
  }
});

/* HAMBURGER */
$('.hamburger').on('click',function(){
    $('.head-menu').toggle();
})

$('#closeMenu').on('click',function(){
    $('.head-menu').hide();
});

//       MODAL-WINDOW       

var btnOpen = document.getElementById('btn-open');
var modal = document.getElementById('wrapper-modal');
var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click',function(){
    modal.classList.add('active');
});

function closeModal(){
    modal.classList.remove('active');
}

overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);

//Валидация и отправка формы

$(document).ready(function() {
    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var regExp = new RegExp(regexp);
            return regExp.test(value);
        },
        "Please check your input."
    );

    // Функция валидации и вывода сообщений
    function valEl(el) {
        el.validate({
            rules: {
                Phone: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                Name: {
                    required: true
                },
                Email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                Phone: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Телефон может содержать символы + - ()'
                },
                Name: {
                    required: 'Поле обязательно для заполнения',
                },
                Email: {
                    required: 'Поле обязательно для заполнения',
                    Email: 'Неверный формат E-mail'
                }
            },

            // Начинаем проверку id="" формы
            submitHandler: function(form) {
                $('#loader').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    // Если у формы id="goToNewPage" - делаем:
                    case 'overlayForm':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $('#message-for-user').fadeIn();
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                }, 1100);
                                $('#message-for-user').on('click', function(e) {
                                    $(this).fadeOut();
                                });
                            });
                        break;
                    // Если у формы id="popupResult" - делаем:
                    case 'sendForm':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $('#message-for-users').fadeIn();
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                }, 1100);
                                $('#message-for-users').on('click', function(e) {
                                    $(this).fadeOut();
                                });

                            });
                        break;
                    // Если у формы id="subForm" - делаем:
                    case 'subForm':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $('#mesage-for-users').fadeIn();
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                }, 1100);
                                $('#mesage-for-users').on('click', function(e) {
                                    $(this).fadeOut();
                                });

                            });
                        break;
                }
                return false;
            }
        })
    }

    // Запускаем механизм валидации форм, если у них есть класс .js-form
    $('.js-form').each(function() {
        valEl($(this));
    });
    
});