import {Component, ViewChild,OnInit} from '@angular/core';
import {TemporizadorComponent} from "../temporizador/temporizador.component";
import {ApiService} from "../../servicios/apis/api.service";
import {TituloNavbarService} from "../../servicios/shared/titulo-navbar.service";


@Component({
    selector: 'app-aplicativo',
    templateUrl: './aplicativo.component.html',
    styleUrls: ['./aplicativo.component.scss']
})
export class AplicativoComponent implements OnInit{
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
    claseListadoPalabras:string='listado-palabras mb-5 pt-5';
    claseTituloPuntaje:string;
    clasePuntuacionFinal='puntaje text-center';
    audioCorrect= new Audio('assets/audios/correcto.mp3');
    botonIniciar:string='INICIO';
    botonRegresar:string='REGRESAR';
    isValidAlert:boolean=false;
    isBotonActiveTimer:boolean=true;
    IsButtonsFinishActived:boolean=false;



    constructor(private apiService: ApiService, public tituloNavbarService:TituloNavbarService) {
    }

    ngOnInit() {
        this.tituloNavbarService.titulo='JUEGO DE PALABRAS';
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
            this.audioCorrect.play();
            this.puntaje += 1;
        }

        if (this.palabras.length === 0) {
            this.palabraAleatoria = 'Todas las palabras han sido utilizadas.'
            this.IsStarted = false
            return;
        }
        this.palabraAleatoria = this.palabras[this.indiceAleatorio];
    };

    iniciar = () => {

        if (this.temporizador.seconds<30 && this.temporizador.minutes==0){
            this.isValidAlert=true;
            return;
        }
        this.apiService.getWord().subscribe(data=>{
            this.listaDePalabras=data;
        })

        this.isBotonActiveTimer=false;
        this.isValidAlert=false;
        this.claseListadoPalabras='listado-palabras-pantalla mb-5 pt-5'
        this.IsStarted = true;
        this.isButtonActive = false;
        this.IsScoringActivated = true;
        this.palabras = [this.listaDePalabras];
        this.indiceAleatorio = Math.floor(Math.random() * this.palabras.length);
        this.palabraAleatoria = this.palabras[this.indiceAleatorio];
        this.temporizador.start()
    }
    regresar = () => {
        history.back()
    }

    refrescar=()=>{
    window.location.reload()
    }

    finalizarJuego =()=>{
        this.listaDePalabras = ['TERMINÓ EL TIEMPO']
        this.IsStarted = false;
        this.temporizador.stop();
        this.claseTituloPuntaje='titulo-puntaje';
        this.clasePuntuacionFinal='puntuacionFinal text-center';
        this.botonIniciar='JUGAR NUEVAMENTE';
        this.botonRegresar='VOLVER AL INICIO';
        this.IsButtonsFinishActived=true;
    }
}
