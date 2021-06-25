import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AnimeComponent } from './components/pages/anime/anime.component';

const APP_ROUTES: Routes = [
{path:'home',component:HomeComponent},
{path:'anime',component:AnimeComponent},
{path: '**', pathMatch:'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});