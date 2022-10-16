import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PkmButtonComponent } from './pkm-button.component';



@NgModule({
  declarations: [
    PkmButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PkmButtonComponent
  ]
})
export class PkmButtonModule { }
