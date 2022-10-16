import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppService, View } from '../../services/app.service';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonData } from 'src/app/models/response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  viewSelected: View = 'list';
  inputSearch: string = '';

  constructor(
    private appService: AppService,
    private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.appService.viewSelected.subscribe((value) => this.viewSelected = value);
  }

  goBack() {
    this.appService.runRefresView('list');
    this.appService.runPokemonDetail(new PokemonData());
  }

  searchPokemon() {
    this.pokeApiService.getPokemonByName(this.inputSearch.toLowerCase())
      .subscribe((response) => {
      this.appService.runRefresView('detail');
      this.appService.runPokemonDetail(response);
      this.inputSearch = '';
      }, () => {
        alert('No existe Pokemón con ese nombre');
      });
  }

}
