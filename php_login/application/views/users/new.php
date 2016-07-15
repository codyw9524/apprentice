<!DOCTYPE html>
<html>
<head>
	<title>Login and Registration</title>
</head>
<body>
	<div id="container">
		<form action="/users/create" method="post">
			<p>
				<label>Name</label>
				<input type="text" name="name">
			</p>
			<p><?= $this->session->flashdata('name') ?></p>
			<p>
				<label>Email</label>
				<input type="email" name="email">
			</p>
			<p><?= $this->session->flashdata('email') ?></p>
			<p>
				<label>Password</label>
				<input type="password" name="password">
			</p>
			<p><?= $this->session->flashdata('password') ?></p>
			<p>
				<label>Confirm Password</label>
				<input type="password" name="password_confirmation">
			</p>
			<p><?= $this->session->flashdata('password_confirmation') ?></p>
			<p>
				<input type="submit" value="Register">
			</p>
		</form>
		<form action="/sessions/create" method="post">
			<p>
				<label>Email</label>
				<input type="email" name="email">
			</p>
			<p>
				<label>Password</label>
				<input type="password" name="password">
			</p>
			<?= $this->session->flashdata('error') ?>
			<p>
				<input type="submit" value="Log In">
			</p>
		</form>
	</div>
</body>
</html>