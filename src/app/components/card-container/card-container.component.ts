import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { addPokemonToFav } from 'src/app/helpers/setFav';
import { PokemonData } from 'src/app/models/response';
import { PokeApiService } from '../../services/poke-api.service';
import { AppService, View } from '../../services/app.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  pokemons: PokemonData[] = [];
  maxItems: number = 12;
  hideButton: boolean = false;

  constructor(
    private pokeService: PokeApiService,
    private appService: AppService) { }

  ngOnInit() {
    this.getData('list');
    this.appService.viewSelected.subscribe((value) => this.getData(value));
  }

  getData(value: View) {
    this.pokemons = [];
    const favItems = this.appService.getLocalStorage();
    if (value === 'list') {
      this.getListData(favItems);
    }
    if (value === 'favorites') {
      this.hideButton = true;
      this.getFavstData(favItems);
    }
    this.sortPokemons();
  }

  getMoreData() {
    this.maxItems = this.maxItems + 12;
    this.getData('list');
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }

  checkPokemon(id: number) {
    this.pokemons = addPokemonToFav(this.pokemons, id);
  }

  sortPokemons() {
    setTimeout(() => {
      this.pokemons = this.pokemons.sort((a, b) => a.id - b.id);
    }, 100);
  }

  getListData(favItems: number[]) {
    for (let id = 1; id <= this.maxItems; id++) {
      this.pokeService.getPokemonById(id).subscribe((data) => {
        const checked = favItems.includes(id);
        this.pokemons.push({ ...data, checked });
      });
    }
  }

  getFavstData(favItems: number[]) {
    for (let num of favItems) {
      this.pokeService.getPokemonById(num).subscribe((data) => {
        this.pokemons.push({ ...data, checked: true });
      });
    }
  }

}
