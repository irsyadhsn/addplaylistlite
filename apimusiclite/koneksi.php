<?php 
 
  //membuat variable koneksi ke mysql 
  $koneksi = mysqli_connect('localhost','root','','ionicspotify') or die ('failed to connect');

   //header untuk menangani cors policy 
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Allow-Methods: PUT, GET, HEAD, DELETE, OPTIONS');
  header('Content-Type: application/json; charset=utf-8');
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");


  

    ?>