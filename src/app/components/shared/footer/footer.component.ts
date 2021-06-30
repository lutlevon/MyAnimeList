import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { AnimeTopModel } from '../models/AnimeTop.model';

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
    this.animeService.getAnimeTopTv()
    .subscribe((resp:any) =>{
      this.topAnimes = resp.top;
    });
  }
  animeTopAiring(){
    this.animeService.getAnimeTopAiring()
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
