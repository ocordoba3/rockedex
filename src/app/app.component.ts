import { Component, OnInit } from '@angular/core';
import { AppService, View } from './services/app.service';
import { PokemonData } from './models/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  viewSelected: View = 'list';
  pokemon: PokemonData = new PokemonData();
  logo: string = './assets/logo.svg';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    localStorage.setItem('favoritesPokemons', JSON.stringify([]));
    this.appService.viewSelected.subscribe((value) => this.viewSelected = value);
    this.appService.pokemonDetail.subscribe((pokemon) => this.pokemon = pokemon);
  }
}
