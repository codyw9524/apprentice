<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Sessions extends CI_Controller {

	public function create(){
		$this->load->model('Session');
		$this->Session->create($this->input->post());
		if($this->session->flashdata('error')){
			redirect('/');
		} else {
			redirect('/users/success');
		}
	}

	public function destroy(){
		$this->session->sess_destroy();
		redirect('/');
	}

}