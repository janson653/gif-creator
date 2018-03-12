import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreatorDetailComponent } from './creator-detail/creator-detail.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.router';
import { CreatorHomeComponent } from './creator-home/creator-home.component';
import {SuiModule} from 'ng2-semantic-ui';
import { AppHeaderComponent } from './app-header/app-header.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatorDetailComponent,
    CreatorHomeComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
