import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-filter',
  templateUrl: './heroes-filter.component.html',
  styles: []
})
export class HeroesFilterComponent implements OnInit {

  heroesFilter:Heroe[] = [];
  busqueda:string = "";
  
  constructor( private _heroesService:HeroesService,
               private activatedRoute: ActivatedRoute,
               private router:Router ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.busqueda = params['termino'];
      this.heroesFilter = this._heroesService.buscarHeroes(this.busqueda);
    });
  }

  verHeroe(idx: number){
    this.router.navigate(['/heroe', idx]);
  }

}
