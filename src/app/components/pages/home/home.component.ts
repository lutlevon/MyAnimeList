import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../../services/anime.service';
import { AnimeTopModel } from '../../shared/models/AnimeTop.model';
import { BrowserModule } from '@angular/platform-browser';
import { MangaTopModel } from '../../shared/models/mangaTop.Model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  array:AnimeTopModel[] = [];
  Mangas : MangaTopModel[] = [];
  cont:number = 0;
  constructor(private animeService : AnimeService) { }

  ngOnInit(): void {
    this.animeTop();
    this.mangaTop();
  }

  animeTop(){
    this.animeService.getAnimeTopTv()
    .subscribe((resp:any) =>{
      this.array = resp.top;
    });
    
  }

  mangaTop(){
    this.animeService.getMangaTop()
    .subscribe((resp:any)=>{
      this.Mangas = resp.top;
    });
  }
}
