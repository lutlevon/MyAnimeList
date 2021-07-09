import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private url = 'https://api.jikan.moe/v3'; 
  constructor(private http : HttpClient) { }

  getMangaTop(){
    return this.http.get(`${this.url}/top/manga/1/manga`);
  }

}
