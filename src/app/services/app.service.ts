import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PokemonData } from '../models/response';

export type View = 'list' | 'detail' | 'favorites';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public viewSelected: Subject<View> = new Subject<View>();
  public pokemonDetail: Subject<PokemonData> = new Subject<PokemonData>();
  public favCount: Subject<number> = new Subject<number>();

  runRefresView(value: View) {
    return this.viewSelected.next(value);
  }

  runPokemonDetail(pokemon: PokemonData) {
    return this.pokemonDetail.next(pokemon);
  }

  getLocalStorage() {
    let favItems: number[] = [];
    try {
      favItems = JSON.parse(localStorage.getItem('favoritesPokemons') || '');
    } catch (err) {
      console.error('error', err);
    }
    return favItems;
  }

  runGetFavCount() {
    let favItems: number[] = this.getLocalStorage();
    return this.favCount.next(favItems.length);
  }

}
