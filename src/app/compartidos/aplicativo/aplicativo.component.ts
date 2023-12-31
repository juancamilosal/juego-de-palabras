import {Component, ViewChild, OnInit} from '@angular/core';
import {TemporizadorComponent} from "../temporizador/temporizador.component";
import {ApiService} from "../../servicios/apis/api.service";
import {TituloNavbarService} from "../../servicios/shared/titulo-navbar.service";
import {ListaPalabrasIngresadasService} from "../../servicios/shared/lista-palabras-ingresadas.service";


@Component({
    selector: 'app-aplicativo',
    templateUrl: './aplicativo.component.html',
    styleUrls: ['./aplicativo.component.scss', '../../estilos/botones.scss',  '../../estilos/tipografia.scss'],
})
export class AplicativoComponent implements OnInit {
    @ViewChild(TemporizadorComponent) temporizador: TemporizadorComponent
    palabras: any[] = [];
    isCorrect: boolean = true;
    puntaje: number = 0;
    IsStarted: boolean = false;
    isButtonBackActived: boolean = true;
    IsScoringActivated: boolean = false;
    listaDePalabras: any[] = ['PRESIONE INICIAR']
    claseListadoPalabras: string = 'listado-palabras mb-5 pt-5';
    claseTituloPuntajeFinal: string;
    clasePuntuacionFinal = 'puntaje text-center';
    audioCorrect = new Audio('assets/audios/correcto.mp3');
    efectoSoundBuuu = new Audio('assets/audios/bu.mp3');
    botonIniciar: string = 'INICIAR';
    botonRegresar: string = 'REGRESAR';
    isValidAlert: boolean = false;
    isButtonActiveTimer: boolean = true;
    IsButtonsFinishActived: boolean = false;
    linkAplicativo:string;
    isLinkAplicativoTrue:boolean;
    isLinkAplicativoFalse:boolean;


    constructor(private apiService: ApiService, public tituloNavbarService: TituloNavbarService, public listaPalabrasIngresadasService: ListaPalabrasIngresadasService) {
    }

    ngOnInit() {
        this.tituloNavbarService.titulo = 'Juego de palabras aleatorias';
        if (!this.listaPalabrasIngresadasService.isJuegoDePalabrasAleatorias){
            this.tituloNavbarService.titulo = 'Juego de palabras manuales';
        }
    }

    iniciar = () => {

        /*if (this.temporizador.seconds < 30 && this.temporizador.minutes == 0) {
            this.isValidAlert = true;
            return;
        }*/

        if (this.listaPalabrasIngresadasService.isJuegoDePalabrasAleatorias) {
            this.apiService.getWord().subscribe(data => {
                this.listaDePalabras = data;
            })
            this.isLinkAplicativoTrue=true;
            this.isLinkAplicativoFalse=false;
            this.isButtonActiveTimer = false;
            this.isValidAlert = false;
            this.claseListadoPalabras = 'listado-palabras-pantalla mb-5 pt-5'
            this.IsStarted = true;
            this.isButtonBackActived = false;
            this.IsScoringActivated = true;
            this.palabras = [this.listaDePalabras];
            this.temporizador.start()
        } else {
            this.isLinkAplicativoTrue=false;
            this.isLinkAplicativoFalse=true;
            this.linkAplicativo='/aplicativo-manual'
            this.isButtonActiveTimer = false;
            this.isValidAlert = false;
            this.claseListadoPalabras = 'listado-palabras-pantalla mb-5 pt-5'
            this.IsStarted = true;
            this.isButtonBackActived = false;
            this.IsScoringActivated = true;
            this.listaDePalabras = this.listaPalabrasIngresadasService.listaPalabras;
            this.listaDePalabras = this.listaDePalabras[0];
            this.temporizador.start();
        }

    }

    siguientePalabra = (correcto: boolean) => {
        if (this.listaPalabrasIngresadasService.isJuegoDePalabrasAleatorias) {
            this.apiService.getWord().subscribe(data => {
                this.listaDePalabras = data;
            })
            this.isCorrect = correcto;
            this.palabras = this.listaDePalabras;

        } else {
            this.isCorrect = correcto;
            this.listaPalabrasIngresadasService.listaPalabras.shift()
            this.listaDePalabras = this.listaPalabrasIngresadasService.listaPalabras;
            this.listaDePalabras = this.listaDePalabras[0];
            console.log(this.listaPalabrasIngresadasService.listaPalabras)
        }

        if (correcto) {
       /*     this.audioCorrect.play();*/
            this.puntaje += 1;
        }else {
            /*this.efectoSoundBuuu.play();*/
        }

        if (this.palabras.length === 0 && this.listaPalabrasIngresadasService.listaPalabras.length === 0) {
            this.listaDePalabras = ['Todas las palabras fueron utilzadas']
            this.IsStarted = false;
            this.isButtonActiveTimer = false;
            this.temporizador.stop()
            this.claseTituloPuntajeFinal = 'titulo-puntaje-total';
            this.clasePuntuacionFinal = 'puntuacion-total text-center';
            this.botonIniciar = 'JUGAR NUEVAMENTE';
            this.botonRegresar = 'VOLVER AL INICIO';
            this.IsButtonsFinishActived = true;
            return;
        }
    };

    regresar = () => {
        history.back()
    }

    refrescar = () => {
        window.location.reload()
    }

    finalizarJuego = () => {
        this.listaDePalabras = ['TERMINÓ EL TIEMPO']
        this.IsStarted = false;
        this.temporizador.stop();
        this.claseTituloPuntajeFinal = 'titulo-puntaje-total';
        this.clasePuntuacionFinal = 'puntuacion-total text-center';
        this.botonIniciar = 'JUGAR NUEVAMENTE';
        this.botonRegresar = 'VOLVER AL INICIO';
        this.IsButtonsFinishActived = true;
    }
}
