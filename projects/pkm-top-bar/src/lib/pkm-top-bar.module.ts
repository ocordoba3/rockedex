import { NgModule } from '@angular/core';
import { PkmTopBarComponent } from './pkm-top-bar.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PkmTopBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PkmTopBarComponent
  ]
})
export class PkmTopBarModule { }
