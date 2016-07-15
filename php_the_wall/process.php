<?php
	session_start();
	require('new-connection.php');

	function registerUser(){
		// if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
		// 	$message = 'You must supply a valid e-mail address.';
		// }
		$first_name = escape_this_string($_POST['first_name']);
		$last_name = escape_this_string($_POST['last_name']);
		$email = escape_this_string($_POST['email']);
		$password = md5($_POST['password']);
		$query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES ('{$first_name}', '{$last_name}', '{$email}', '{$password}', NOW(), NOW())";
		run_mysql_query($query);
		$query2 = "SELECT * FROM users WHERE email = '{$email}'";
		$user = fetch_record($query2);
		$_SESSION['user_id'] = $user['id'];
		header('location: success.php');
		exit;
	}

	function loginUser(){
		$password = md5($_POST['password']);
		$email = escape_this_string($_POST['email']);
		$query = "SELECT * FROM users WHERE email = '{$email}' AND password = '{$password}'";
		$user = fetch_record($query);
		if(count($user) > 0){
			$_SESSION['user_id'] = $user['id'];
			header('location: success.php');
			exit;
		} else {
			$message = "Invalid Credentials";
			$_SESSION['login_error'] = $message;
			header('location: index.php');
			exit;
		}
	}

	function createPost(){
		$content = escape_this_string($_POST['message']);
		$user_id = $_SESSION['user_id'];
		$query = "INSERT INTO posts (content, user_id, created_at, updated_at) VALUES ('{$content}', '{$user_id}', NOW(), NOW())";
		run_mysql_query($query);
		header('location: success.php');
		exit;
	}

	function createComment(){
		$content = escape_this_string($_POST['comment']);
		$user_id = $_SESSION['user_id'];
		$post_id = $_POST['post_id'];
		$query = "INSERT INTO comments (content, user_id, post_id, created_at, updated_at) VALUES ('{$content}', '{$user_id}', '{$post_id}', NOW(), NOW())";
		run_mysql_query($query);
		header('location: success.php');
	}

	if(isset($_POST['action']) && $_POST['action'] == 'register'){
		registerUser();
	}
	else if(isset($_POST['action']) && $_POST['action'] == 'login'){
		loginUser();
	}
	else if(isset($_POST['action']) && $_POST['action'] == 'post'){
		createPost();
	}
	else if(isset($_POST['action']) && $_POST['action'] == 'comment'){
		createComment();
	} else {
		session_destroy();
		header("location: index.php");
		exit;
	}

?>