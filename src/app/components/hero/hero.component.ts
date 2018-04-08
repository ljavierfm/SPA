import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesSevice, Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesSevice) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }

}
