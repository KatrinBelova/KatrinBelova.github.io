<?php
if(
	(isset($_POST['name'])&&$_POST['name'] != "")&&
	(isset($_POST['phone'])&&$_POST['phone'] != "")
		&&
	(isset($_POST['book_time'])&&$_POST['book_time'] != "")
){
	$to = 'email@gmail.com';
	$subject = 'order';
	$message = '
		<html>
			<header>
			</header>
		</html>
		<body>
			<p>Name: '.$_POST['name'].'</p>
			<p>Phone: '.$_POST['phone'].'</p>
			<p>Booking: '.$_POST['book_time'].'</p>
		</body>
		</html>
	';
	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: Отправитель <restaurant@example.com>\r\n";
	mail($to, $subject, $message, $headers);
}

?>