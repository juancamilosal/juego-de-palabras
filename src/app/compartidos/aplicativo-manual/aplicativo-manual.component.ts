import {Component, ViewChild, OnInit} from '@angular/core';
import {Validators} from "@angular/forms";
import {TemporizadorComponent} from "../temporizador/temporizador.component";
import {TituloNavbarService} from "../../servicios/shared/titulo-navbar.service";
import {ListaPalabrasIngresadasService} from "../../servicios/shared/lista-palabras-ingresadas.service";

@Component({
    selector: 'app-aplicativo-manual',
    templateUrl: './aplicativo-manual.component.html',
    styleUrls: ['./aplicativo-manual.component.scss', '../../estilos/botones.scss',  '../../estilos/tipografia.scss']
})
export class AplicativoManualComponent implements OnInit{
    @ViewChild (TemporizadorComponent) temporizador:TemporizadorComponent
    palabras: string
    palabrasIngresadas: any[] = [];
    palabrasEnPantalla: any[] = [];
    isReady: boolean = false;
    isCorrect: boolean = true;
    puntaje: number = 0;
    isBottonActive: boolean = true;
    isBottonSatartActive: boolean = true;
    isBackActived: boolean = false;
    isTemporizadorActived:boolean=false;
    isWordPush:boolean=true;



    constructor(public tituloNavbarService:TituloNavbarService, public listaPalabrasIngresadasService:ListaPalabrasIngresadasService,) {
    }
    ngOnInit() {
        this.tituloNavbarService.titulo='Juego de palabras manuales';

    }


    ingresarPalabras = (palabra: string) => {
        if (this.palabras == null || this.palabras == '' || this.palabras == ' ') {
            alert('Ingrese la frase o palabra en el campo asignado')
            this.isBottonSatartActive = true;
        } else {
            this.isWordPush=false;
            this.palabrasIngresadas.push(palabra);
            this.listaPalabrasIngresadasService.listaPalabras=this.palabrasIngresadas;
            this.palabras = '';
            this.isBottonSatartActive = false;
        }
    }

    regresar = () => {
        history.back()
    }


    eliminarPalabra = (index: number) => {
        this.palabrasIngresadas.splice(index, 1);
        if (this.palabrasIngresadas.length == 0) {
            this.isBottonSatartActive = true;
                this.isWordPush=true;
        }
    }


    volverAlJuego = () => {
        this.isReady = false;
        this.puntaje = 0;
        this.isBottonActive = true;
        this.isBackActived = false;
    }
}
