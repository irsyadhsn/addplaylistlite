import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahplaylistPageRoutingModule } from './tambahplaylist-routing.module';

import { TambahplaylistPage } from './tambahplaylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahplaylistPageRoutingModule
  ],
  declarations: [TambahplaylistPage]
})
export class TambahplaylistPageModule {}
