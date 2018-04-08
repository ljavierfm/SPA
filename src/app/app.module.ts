import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { ResultadosBusquedaComponent } from './components/resultados-busqueda/resultados-busqueda.component';


import { APP_ROUTING } from './app.routes';

import { HeroesSevice } from './services/heroes.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroComponent,
    ResultadosBusquedaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [HeroesSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
