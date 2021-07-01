import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { AnimeTopModel } from '../models/AnimeTop.model';
import { CharacterModel } from '../models/Character.Model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  topAnimes:AnimeTopModel[]=[];
  topAnimesAiring:AnimeTopModel[]=[];
  topCharacters:CharacterModel[]=[];


  constructor(private animeService:AnimeService) { }

  ngOnInit(): void {
    this.animeTopTv();
    this. animeTopAiring();
    this.charactersTop();

  }

  animeTopTv(){
    this.animeService.getAnimeTop("tv")
    .subscribe((resp:any) =>{
      this.topAnimes = resp.top;
    });
  }
  animeTopAiring(){
    this.animeService.getAnimeTop("airing")
    .subscribe((resp:any) =>{
      this.topAnimesAiring = resp.top;
    });
  }
  charactersTop(){
    this.animeService.getCharactersTop()
    .subscribe((resp:any)=>{
      this.topCharacters = resp.top;
    })
  }
  
}
