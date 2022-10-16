import { NgModule } from '@angular/core';
import { PkmFavButtonComponent } from './pkm-fav-button.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PkmFavButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PkmFavButtonComponent
  ]
})
export class PkmFavButtonModule { }
