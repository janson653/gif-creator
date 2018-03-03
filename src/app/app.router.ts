import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CreatorDetailComponent} from './creator-detail/creator-detail.component';
import {CreatorHomeComponent} from './creator-home/creator-home.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: CreatorHomeComponent},
  {path: 'creator-detail', component: CreatorDetailComponent},
];
