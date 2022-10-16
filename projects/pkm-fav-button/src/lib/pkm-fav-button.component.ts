import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'PkmFavButton',
  template: `
    <i [ngClass]="{'fa-regular': !checked, 'fa-solid': checked}" class="fa-heart card-fav"></i>
  `,
  styles: [
    `
      .card-fav {
      position: absolute;
      top: 1rem;
      right: 1rem;
      }
    `
  ]
})
export class PkmFavButtonComponent implements OnInit {

  @Input() checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
