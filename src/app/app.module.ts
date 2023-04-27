import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CorsiComponent } from './components/corsi/corsi.component';
import { AbbonamentiComponent } from './components/abbonamenti/abbonamenti.component';
import { PersoneComponent } from './components/persone/persone.component';
import { SeguitiComponent } from './components/seguiti/seguiti.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CorsiComponent,
    AbbonamentiComponent,
    PersoneComponent,
    SeguitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
