import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CardComponent } from './components/card/card.component';
import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { PkmButtonModule } from 'projects/pkm-button/src/public-api';
import { PkmFavButtonModule } from '../../projects/pkm-fav-button/src/lib/pkm-fav-button.module';
import { PkmTopBarModule } from '../../projects/pkm-top-bar/src/lib/pkm-top-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    CardComponent,
    DetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PkmButtonModule,
    PkmFavButtonModule,
    PkmTopBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
