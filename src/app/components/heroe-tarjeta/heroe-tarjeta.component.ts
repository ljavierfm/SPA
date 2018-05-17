import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:Heroe;
  @Input() index:number;

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  verHeroe() {
    console.log(this.index);
    this._router.navigate(['/heroe',this.index]);
  }

}