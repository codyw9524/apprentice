<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('User');
	}

	public function index(){
		$this->load->view('users/new');
	}

	public function create(){
		if(!$this->User->validate_registration($this->input->post())){
			redirect('/');
		} else {
			redirect('users/success');
		}
	}

	public function success(){
		if(!$this->session->userdata('user_id')){
			redirect('/');
		}
		$this->load->view('users/success');
	}
}