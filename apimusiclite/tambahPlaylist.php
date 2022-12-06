<?php
  require 'koneksi.php';
  $input = file_get_contents('php://input');
  $data = json_decode($input, true); 
  $pesan = [];
  $title = trim($data['title']);
  $detail = trim($data['detail']);

  
  if ($title !=''and $detail !='') { 
    $query = mysqli_query($koneksi, "INSERT INTO playlist(title,detail) VALUES ('$title','$detail')");
    $pesan['status'] = 'berhasil';
  } else {
    $pesan['status'] = 'gagal';
  }
  echo json_encode($pesan); 
  echo mysqli_error($koneksi);
  
?>