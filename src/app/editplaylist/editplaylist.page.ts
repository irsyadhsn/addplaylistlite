import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editplaylist',
  templateUrl: './editplaylist.page.html',
  styleUrls: ['./editplaylist.page.scss'],
})
export class EditplaylistPage implements OnInit {
  id: any;
  title: any;
  detail: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilPlaylist(this.id);
    });
  }

  ngOnInit() {}

  ambilPlaylist(id: any) {
    this._apiService.lihat(id, '/lihatPlaylist.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let playlist = hasil;
        this.title = playlist.title;
        this.detail = playlist.detail;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      },
    });
  }
  editPlaylist() {
    let data = {
      id: this.id,
      title: this.title,
      detail: this.detail,
    };
    this._apiService.edit(data, '/editPlaylist.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.title = '';
        this.detail = '';
        this._apiService.notif('Edit Playlist Successfull');
        this.router.navigateByUrl('/tabs');
      },
      error: (err: any) => {
        this._apiService.notif('Edit Playlist Cancelled');
      },
    });
  }
}
