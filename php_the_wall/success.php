<?php
	session_start();
	require('new-connection.php');

	function displayMessages(){
		$query = "SELECT
								users.id as 'user_id',
								CONCAT(users.first_name, ' ', users.last_name) AS 'name',
								posts.content,
								posts.created_at,
								posts.id as 'post_id'
								FROM posts JOIN users ON users.id = posts.user_id
								ORDER BY posts.id DESC;";
		$posts = fetch_all($query);

		foreach ($posts as $post){
			echo "<h3>" . $post['name'] . " - " . $post['created_at'] . "</h4>";
			echo "<p>" . $post['content'] . "</p>";
			//display comments
			$comment_query = "SELECT users.id as 'user_id',
													CONCAT(users.first_name, ' ', users.last_name) AS 'name',
													posts.id AS 'post_id',
													comments.content,
													comments.id AS 'comment_id',
													comments.created_at,
													comments.updated_at
													FROM users JOIN comments ON users.id = comments.user_id
													JOIN posts ON posts.id = comments.post_id
													WHERE comments.post_id = '{$post['post_id']}'
													ORDER BY comments.id ASC;";
			$comments = fetch_all($comment_query);
			foreach ($comments as $comment){
				echo "<p>" . $comment['name'] . " - " . $comment['created_at'] . "</p>";
				echo "<p>" . $comment['content'] . "</p>";
			}
			//display form for new comment
			echo "<form action='process.php' method='post'>";
			echo "<input type='hidden' name='action' value='comment'>";
			echo "<input type='hidden' name='post_id' value='" . $post['post_id'] . "'>";
			echo "<p>";
			echo "<label>Post a comment</label>";
			echo "<textarea name='comment'></textarea>";
			echo "</p>";
			echo "<p>";
			echo "<input type='submit' value='Post'>";
			echo "</p>";
			echo "</form>";
			echo "<hr>";
		}
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>The Wall</title>
</head>
<body>
	<form action="process.php" method="post">
		<input type="hidden" name="action" value="logout">
		<input type="submit" value="Log Out">
	</form>
	<form action="process.php" method="post">
		<input type="hidden" name="action" value="post">
		<p>
			<label>Post Message</label>
			<textarea name="message"></textarea>
		</p>
		<p>
			<input type="submit" value="Post">
		</p>
	</form>
	<div id="posts">
		<?= displayMessages(); ?>
	</div>
</body>
</html>