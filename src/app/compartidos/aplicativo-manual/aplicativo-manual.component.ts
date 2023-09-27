import {Component, ViewChild} from '@angular/core';
import {Validators} from "@angular/forms";
import {TemporizadorComponent} from "../temporizador/temporizador.component";

@Component({
    selector: 'app-aplicativo-manual',
    templateUrl: './aplicativo-manual.component.html',
    styleUrls: ['./aplicativo-manual.component.scss']
})
export class AplicativoManualComponent {
    @ViewChild (TemporizadorComponent) temporizador:TemporizadorComponent
    palabras: string;
    palabrasIngresadas: any[] = [];
    palabrasEnPantalla: any[] = [];
    isReady: boolean = false;
    isCorrect: boolean = true;
    puntaje: number = 0;
    isBottonActive: boolean = true;
    isBottonSatartActive: boolean = true;
    isBackActived: boolean = false;
    isTemporizadorActived:boolean=false;

    ingresarPalabras = (palabra: string) => {
        if (this.palabras == null || this.palabras == '' || this.palabras == ' ') {
            alert('Ingrese la frase o palabra en el campo asignado')
            this.isBottonSatartActive = true;
        } else {
            this.palabrasIngresadas.push(palabra);
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
        }
    }

    iniciar = () => {
        this.isReady = true;
        this.palabrasEnPantalla = this.palabrasIngresadas[0];
        console.log(this.palabrasIngresadas);
        this.isTemporizadorActived=true;

        setTimeout(()=>{
                this.temporizador.start()
        }, 1000)
        setTimeout(() => {
            this.palabrasEnPantalla = ['Juego Terminado'];
            this.isTemporizadorActived = false;
            this.isBottonActive=false;
            this.isBackActived = true;
            this.isTemporizadorActived=false;
            this.temporizador.stop()
            return;
        }, 60000);
    }

    siguientePalabra = (correcto: boolean) => {
        if (correcto) {
            this.isCorrect = correcto;
            this.puntaje += 1;
            this.palabrasEnPantalla = this.palabrasIngresadas.pop();
        } else {
            this.palabrasEnPantalla = this.palabrasIngresadas.pop();
        }
        if (this.palabrasIngresadas.length == 0 || this.palabras == null) {
            this.palabrasEnPantalla = ['Juego terminado | Se acabaron las palabras'];
            this.isBottonActive = false;
            this.isBackActived = true;
            this.temporizador.stop()
            this.isTemporizadorActived=false;
            this.temporizador.stop()
        }
    }

    volverAlJuego = () => {
        this.isReady = false;
        this.puntaje = 0;
        this.isBottonActive = true;
        this.isBackActived = false;
    }
}
