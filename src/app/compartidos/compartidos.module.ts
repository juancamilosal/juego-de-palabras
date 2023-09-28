import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterLink, RouterModule} from "@angular/router";
import {AplicativoManualComponent} from './aplicativo-manual/aplicativo-manual.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TemporizadorComponent} from "./temporizador/temporizador.component";




@NgModule({
    declarations: [
        NavbarComponent,
        AplicativoManualComponent,
        TemporizadorComponent,
    ],
    imports: [
        CommonModule,
        RouterLink,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [NavbarComponent, TemporizadorComponent]
})
export class CompartidosModule {
}
