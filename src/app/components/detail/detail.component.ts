import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonData } from '../../models/response';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() pokemon: PokemonData = new PokemonData();
  @Output() pokemonId: EventEmitter<number> = new EventEmitter();

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  checkPokemon(id: number) {
    this.pokemon = {...this.pokemon, checked: true};
    const favItems: number[] = JSON.parse(localStorage.getItem('favoritesPokemons') || '');
    localStorage.setItem('favoritesPokemons', JSON.stringify([...favItems, id]));
    this.appService.runGetFavCount();
  }
}
