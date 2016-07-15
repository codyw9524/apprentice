<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Session extends CI_Model {

	public function create($post){
		$this->load->model('User');
		$user = $this->User->show($post['email']);
		if(count($user) > 0 && password_verify($post['password'], $user['password']) === TRUE){
			$user_info = array('user_id' => $user['id']);
			$this->session->set_userdata($user_info);
		} else {
			$this->session->set_flashdata('error', '<p>Invalid Credentials</p>');
		}
	}
}