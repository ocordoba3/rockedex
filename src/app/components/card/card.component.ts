import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PokemonData } from '../../models/response';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokemon: PokemonData = new PokemonData;
  @Output() pokemonId: EventEmitter<number> = new EventEmitter();

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  goToDetail(pokemon: PokemonData) {
    this.appService.runRefresView('detail');
    this.appService.runPokemonDetail(pokemon);
  }

  checkPokemon(id: number | undefined) {
    this.pokemonId.emit(id);
    this.appService.runGetFavCount();
  }
}
