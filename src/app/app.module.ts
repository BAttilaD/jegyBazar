import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule, AlertModule  } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { EventcardComponent } from './eventcard/eventcard.component';
import { EsemenyekComponent } from './esemenyek/esemenyek.component';
import { JegyekComponent } from './jegyek/jegyek.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { BelepesComponent } from './belepes/belepes.component';
import { RegisztracioComponent } from './regisztracio/regisztracio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JumbotronComponent,
    FooterComponent,
    EventcardComponent,
    EsemenyekComponent,
    JegyekComponent,
    RolunkComponent,
    BelepesComponent,
    RegisztracioComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    CollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
