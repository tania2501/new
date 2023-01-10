<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Тренировка jQuery</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="main.css">
</head>
<body>
		<!-- Кнопка, открывающая pop-up -->
	<div class="header-right-btn f-right d-none d-lg-block ml-20" id="btn-open">
		<a href="#" class="border-btn header-btn">Order Online</a>
	</div>
    <!-- Основная форма с полями разного типа -->
	<form action="#" class="form-book" method="get" id="forms">
		<input type="text" class="form-book__input" placeholder="Name" name="Name">
		<input type="text" class="form-book__input" placeholder="Email" name="Email">
		<input type="text" class="form-book__input" placeholder="Phone" name="Phone">
		<button class="btn select-btn">Book Now</button>
	</form>
    <!-- Modal -->
	<div id="wrapper-modal">
      <div id="overlay"></div>
      <div id="modal-window">
         <div>
            <button id="btn-close">x</button>
         </div>
         <div class="window-content">
            <div class="booking-form">
               <div class="container">
                  <div class="row justify-content-center">
                     <div class="cl-xl-7 col-lg-8 col-md-10">
                                <!-- Section Tittle -->
                        <div class="section-tittle text-center mb-40">
                           <span>About Our Restaurant</span>
                            <h2>Book A Table</h2>
                        </div> 
                     </div>
                  </div>
                  <div class="row justify-content-center">
                     <div class="col-12">
                        <form action="#" class="form-book" method="get" id="form">
                           <input type="text" class="form-book__input" placeholder="Name" name="Name">
                           <input type="text" class="form-book__input" placeholder="Email" name="Email">
                           <input type="text" class="form-book__input" placeholder="Phone" name="Phone">
                           <button class="btn select-btn">Book Now</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
	<!-- Сообщение "спасибо" после отправки формы -->
	<div id="message-for-user">
		<div id="thx">
			Спасибо! Мы обязательно вам перезвоним
		</div>
   </div>
	<script src="https://code.jquery.com/jquery-latest.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src="main.js"></script>
</body>
</html>