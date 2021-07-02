import { Component, Input, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { AnimeTopModel } from '../models/AnimeTop.model';

@Component({
  selector: 'app-animecard',
  templateUrl: './animecard.component.html',
  styleUrls: ['./animecard.component.css']
})
export class AnimecardComponent implements OnInit {

  @Input() arrayPadre:AnimeTopModel;

  n:number = 0;

  constructor(private animeService:AnimeService) { }

  ngOnInit(): void {
    
  }
}
