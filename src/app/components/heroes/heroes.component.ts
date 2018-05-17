import { Component, OnInit } from '@angular/core';
import { HeroesSevice,Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})

export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor(private _heroesService:HeroesSevice,private router:Router) {

   }

  ngOnInit() {
    this.heroes=this._heroesService.getHeroes();
  }

}
