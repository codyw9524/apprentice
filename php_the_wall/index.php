<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>The Wall</title>
</head>
<body>
	<div id="container">
		<form action="process.php" method="post">
			<input type="hidden" name="action" value="register">
			<p>
				<label>First Name</label>
				<input type="text" name="first_name">
			</p>
			<p>
				<label>Last Name</label>
				<input type="text" name="last_name">
			</p>
			<p>
				<label>Email</label>
				<input type="email" name="email">
			</p>
			<p>
				<label>Password</label>
				<input type="password" name="password">
			</p>
			<p>
				<label>Confirm Password</label>
				<input type="password" name="password_confirmation">
			</p>
			<p>
				<input type="submit" value="Register">
			</p>
		</form>
		<form action="process.php" method="post">
			<input type="hidden" name="action" value="login">
			<p>
				<label>Email</label>
				<input type="email" name="email">
			</p>
			<p>
				<label>Password</label>
				<input type="password" name="password">
			</p>
			<p>
				<input type="submit" value="Log In">
			</p>
		</form>
	</div>
</body>
</html>