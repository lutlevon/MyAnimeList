import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private url = 'https://api.jikan.moe/v3'; 
  constructor(private http : HttpClient) { }

  getAnimeTopAiring(){
    return this.http.get(`${this.url}/top/anime/1/airing`);
  }
  getAnimeTopTv(){
    return this.http.get(`${this.url}/top/anime/1/tv`);
  }
  getMangaTop(){
    return this.http.get(`${this.url}/top/manga/1/manga`);
  }
}
