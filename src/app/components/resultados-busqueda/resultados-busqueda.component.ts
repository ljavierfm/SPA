    import { Component, OnInit } from '@angular/core';
import { HeroesSevice, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css']
})
export class ResultadosBusquedaComponent implements OnInit {
  heroes:Heroe[]=[];
  parametroBusqueda:string='';

  constructor(private _heroesService: HeroesSevice, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      this.parametroBusqueda=params['termino'];
      this.heroes=this._heroesService.buscarHeroes(this.parametroBusqueda);
    });
  }
}
