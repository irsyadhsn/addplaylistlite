import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tambahplaylist',
  templateUrl: './tambahplaylist.page.html',
  styleUrls: ['./tambahplaylist.page.scss'],
})
export class TambahplaylistPage implements OnInit {
  id: any;
  title: any;
  detail: any;
  constructor(private router: Router, public _apiService: ApiService) {}

  ngOnInit() {}

  addPlaylist() {
    let data = {
      title: this.title,
      detail: this.detail,
    };
    this._apiService.tambah(data, '/tambahPlaylist.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.title = '';
        this.detail = '';
        this._apiService.notif('Add Playlist Succesfull');
        this.router.navigateByUrl('/tabs');
      },
      error: (err: any) => {
        this._apiService.notif('gagal input Playlist');
      },
    });
  }
}
