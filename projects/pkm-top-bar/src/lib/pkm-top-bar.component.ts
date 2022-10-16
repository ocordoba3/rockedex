import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../../../src/app/services/app.service';

@Component({
  selector: 'PkmTopBar',
  template: `
    <nav class="navbar navbar-expand-lg bg-light">
      <img [src]="logo" alt="Rockedex Logo">
        <div class="position-relative">
          <i class="fa-solid fa-heart card-fav" (click)="goToFavs()"></i>
          <span *ngIf="favItems > 0" class="fav-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{favItems}}
          </span>
        </div>
    </nav>
  `,
  styles: [
    `
    .navbar {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
        display: flex;
        justify-content: space-between;
        padding: 2rem 2.4rem; 
    }
    @media screen and (max-width: 991px) {
        .navbar {
            padding: 1.8rem;
        }
    }
    `
  ]
})
export class PkmTopBarComponent implements OnInit {

  @Input() logo: string = '';
  favItems: number = 0;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.runGetFavCount();
    this.appService.favCount.subscribe((value) => this.favItems = value );
  }

  goToFavs() {
    this.appService.runRefresView('favorites');
  }

}
