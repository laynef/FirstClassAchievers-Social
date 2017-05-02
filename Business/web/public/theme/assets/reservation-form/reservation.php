<?php
if(isset($_POST['r_submit'])) {
/* Set e-mail recipient */
$myemail  = "yourmail@domain.com";
$subject  = "Resto Booking Form";

/* Check all form inputs using check_input function */
$r_date = $_REQUEST['r_date'];
$r_name = $_REQUEST['r_name'];
$r_email    = $_REQUEST['r_email'];
$r_time  = $_REQUEST['r_time'];
$r_guest = $_REQUEST['r_guest'];
$r_phone_number = $_REQUEST['r_phone_number'];

/* Let's prepare the message for the e-mail */
$message = "<strong>Booking Form details below.</strong>
<br /><br />
<strong>Date:</strong> $r_date
<br /><br />
<strong>Name:</strong> $r_name
<br /><br />
<strong>Email ID:</strong> $r_email
<br /><br />
<strong>Time:</strong> $r_time
<br /><br />
<strong>Guest:</strong> $r_guest
<br /><br />
<strong>Phone Number:</strong> $r_phone_number";


$headers = "From: " . strip_tags($_REQUEST['r_email']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_REQUEST['r_email']) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
/* Send the message using mail() function */

if(mail($myemail, $subject, $message, $headers))
{
	echo '<div class="alert alert-success"><strong>Wow!</strong> Your Reservation has been received. We will confirm your order by Email or Phone.</div>';
}
else
{
	echo '<div class="alert alert-danger"><strong>Error!</strong> Your submission has error please try again...</div>';
}
}
else
{
 echo '<div class="alert alert-danger"><strong>Error!</strong> Your submission has error please try again...</div>';

}
?>