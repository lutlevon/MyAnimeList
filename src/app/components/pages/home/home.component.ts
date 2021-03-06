import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../../services/anime.service';
import { AnimeTopModel } from '../../shared/models/AnimeTop.model';
import { BrowserModule } from '@angular/platform-browser';
import { MangaTopModel } from '../../shared/models/mangaTop.Model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoriaAnime:String;
  array:AnimeTopModel[] = [];
  topAiring:AnimeTopModel [] = [];
  topUpcoming:AnimeTopModel [] = [];
  
  numeroTarjetas:number = 5;
  Mangas : MangaTopModel[] = [];
  cont:number = 0;

  constructor(private animeService : AnimeService) {
    this.categoriaAnime = "tv";
   }

  ngOnInit(): void {
    this.animeTop();
    this.mangaTop();
    this.animeTopAiring();
    this.animeTopUpcoming();
    this.animeNews();
  }

  animeTop(){
    this.animeService.getAnimeTop("tv")
    .subscribe((resp:any) =>{
      this.array = resp.top;
    });
  }

  animeTopAiring(){
    this.animeService.getAnimeTop("airing")
    .subscribe((resp:any) =>{
      this.topAiring = resp.top;
    });
  }
  animeTopUpcoming(){
    this.animeService.getAnimeTop("upcoming")
    .subscribe((resp:any) =>{
      this.topUpcoming = resp.top;
    });
  }

  animeNews(){
    this.animeService.getAnimeReviews()
    .subscribe((resp:any)=>{
      console.log(resp);
    });
  }

  mangaTop(){
    this.animeService.getMangaTop()
    .subscribe((resp:any)=>{
      this.Mangas = resp.top;
    });
  }
}
