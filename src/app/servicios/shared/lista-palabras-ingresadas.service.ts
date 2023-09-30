import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaPalabrasIngresadasService {

  listaPalabras:string[]=[];
  isJuegoDePalabrasAleatorias:boolean=true;
  constructor() { }
}
