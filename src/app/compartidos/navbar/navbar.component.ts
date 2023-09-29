import { Component } from '@angular/core';
import {TituloNavbarService} from "../../servicios/shared/titulo-navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',  '../../estilos/tipografia.scss']
})
export class NavbarComponent {


  constructor(public tituloNavbarService:TituloNavbarService) {
  }

}
