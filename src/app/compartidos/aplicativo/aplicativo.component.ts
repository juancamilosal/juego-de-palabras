import {Component, ViewChild} from '@angular/core';
import {TemporizadorComponent} from "../temporizador/temporizador.component";
import {ApiService} from "../../servicios/api.service";




@Component({
    selector: 'app-aplicativo',
    templateUrl: './aplicativo.component.html',
    styleUrls: ['./aplicativo.component.scss']
})
export class AplicativoComponent {
    @ViewChild(TemporizadorComponent) temporizador: TemporizadorComponent
    palabras: any[] = [];
    indiceAleatorio: number = 0;
    palabraAleatoria: any = 'PRESIONE INICIAR';
    isCorrect: boolean = true;
    puntaje: number = 0;
    IsStarted: boolean = false;
    isButtonActive: boolean = true;
    IsScoringActivated: boolean = false;
    listaDePalabras:any[]=['PRESIONE INICIAR']



    constructor(private apiService: ApiService) {
    }

    siguientePalabra = (correcto: boolean) => {
        this.apiService.getWord().subscribe(data=>{
            this.listaDePalabras=data;
        })
        this.isCorrect = correcto;
        this.palabras=this.listaDePalabras;
      /*  this.palabras.splice(this.indiceAleatorio, 1);
        this.indiceAleatorio = Math.floor(Math.random() * this.palabras.length);*/

        if (correcto) {
            this.puntaje += 1;
        }

        if (this.palabras.length === 0) {
            this.palabraAleatoria = 'Todas las palabras han sido utilizadas.'
            this.IsStarted = false
            return;
        }

        this.palabraAleatoria = this.palabras[this.indiceAleatorio];
    };

   /* probando = () => {
        if (this.temporizador.minutes == 0 && this.temporizador.seconds == 1) {
            this.listaDePalabras = ['Todas las palabras han sido utilizadas.']
            this.IsStarted = false
            return;
        }
    }*/
    iniciar = () => {
        this.apiService.getWord().subscribe(data=>{
            this.listaDePalabras=data;
        })
        this.IsStarted = true;
        this.isButtonActive = false;
        this.IsScoringActivated = true;
        this.palabras = [this.listaDePalabras];
        this.indiceAleatorio = Math.floor(Math.random() * this.palabras.length);
        this.palabraAleatoria = this.palabras[this.indiceAleatorio];
        setTimeout(() => {
            this.temporizador.start()
        }, 1000);
        setTimeout(() => {
            this.listaDePalabras = ['TERMINÓ EL TIEMPO']
            this.IsStarted = false;
            this.temporizador.stop()
            return;
        }, 60000);
    }
    regresar = () => {
        history.back()
    }
}
