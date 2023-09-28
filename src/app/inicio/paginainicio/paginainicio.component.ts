import { Component, OnInit} from '@angular/core';
import {TituloNavbarService} from "../../servicios/shared/titulo-navbar.service";

@Component({
  selector: 'app-paginainicio',
  templateUrl: './paginainicio.component.html',
  styleUrls: ['./paginainicio.component.scss']
})
export class PaginainicioComponent implements OnInit{

/*  audioInicio= new Audio('assets/audios/musica-inicio.mp3')*/

  constructor(public tituloPalabrasAleatorias:TituloNavbarService) {

  }
  ngOnInit() {
    this.tituloPalabrasAleatorias.titulo='BIENVENIDO';
  }
}
