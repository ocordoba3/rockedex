import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PokemonData } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokemonById(id: number) {
    return this.http.get<PokemonData>(`${environment.apiUrl}/pokemon/${id}`);
  }

  getPokemonByName(name: string) {
    return this.http.get<PokemonData>(`${environment.apiUrl}/pokemon/${name}`);
  }
}
