import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private url = 'https://api.jikan.moe/v3'; 
  constructor(private http : HttpClient) { }

  getAnimeTop(title:String){
    return this.http.get(`${this.url}/top/anime/1/${title}`);
  }
  getAnimeSeason(season:String,year:String){
    return this.http.get(`${this.url}/season/${year}/${season}`);
  }
  getAnimeSchedule(){
    return this.http.get(`${this.url}/schedule`)
  }
  getAnimeReviews(){
    return this.http.get(`${this.url}/anime/1/reviews`)
  }
  getMangaTop(){
    return this.http.get(`${this.url}/top/manga/1/manga`);
  }
  getCharactersTop(){
    return this.http.get(`${this.url}/top/characters/1`);
  }
}
