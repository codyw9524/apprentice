<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Model {

	public function validation_rules(){
		$this->load->library('form_validation');
		$this->form_validation->set_rules('name', 'Name', 'trim|required|alpha');
		$this->form_validation->set_rules('email', 'Email', 'trim|required|is_unique[users.email]');
		$this->form_validation->set_rules('password', 'Password', 'required|min_length[6]');
		$this->form_validation->set_rules('password_confirmation', 'Password Confirmation', 'required|matches[password]');
	}

	public function validate_registration($post){
		$this->validation_rules();
		if($this->form_validation->run() === FALSE){
			$errors = array(
				'name' => form_error('name'),
				'email' => form_error('email'),
				'password' => form_error('password'),
				'password_confirmation' => form_error('password_confirmation')
			);
			$this->session->set_flashdata($errors);
			return FALSE;
		} else {
			$this->User->create($post);
			return TRUE;
		}
	}

	public function create($post){
		$query = "INSERT INTO users (name, email, password, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())";
		$values = array(htmlspecialchars($post['name']), htmlspecialchars($post['email']), password_hash($post['password'], PASSWORD_DEFAULT));
		$this->db->query($query, $values);
		$user = $this->User->show($post['email']);
		$user_info = array('user_id' => $user['id']);
		$this->session->set_userdata($user_info);
	}

	public function show($email){
		return $this->db->query("SELECT * FROM users WHERE email = ?", array($email))->row_array();
	}

}