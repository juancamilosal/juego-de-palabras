import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routes} from './inicio-routing.module';
import {PaginainicioComponent} from './paginainicio/paginainicio.component';
import {AplicativoComponent} from "../compartidos/aplicativo/aplicativo.component";
import {RouterModule} from "@angular/router";
import {CompartidosModule} from "../compartidos/compartidos.module";


@NgModule({
    declarations: [
        PaginainicioComponent,
        AplicativoComponent
    ],
    imports: [
        CommonModule,
        CompartidosModule,
        RouterModule.forChild(routes)
    ]
})
export class InicioModule {
}
