<?php
  require 'koneksi.php';
  $input = file_get_contents('php://input');
  $data = json_decode($input, true);
  $pesan = [];

  $id = trim($data['id']);
  $title = trim($data['title']);
  $detail = trim($data['detail']); 

  //jika nama matakuliah dan detail tidak
  if ($title != "and $detail !=") {
    $query = mysqli_query($koneksi, "UPDATE playlist SET title = '$title',detail = '$detail' WHERE id = '$id'");
    $pesan['status'] = 'berhasil';
  } else {
    $pesan['status'] = 'gagal';
  }
  echo json_encode($pesan); 
  echo mysqli_error($koneksi);
  ?>