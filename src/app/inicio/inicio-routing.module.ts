import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginainicioComponent} from "./paginainicio/paginainicio.component";
import {AplicativoComponent} from "../compartidos/aplicativo/aplicativo.component";
import {AplicativoManualComponent} from "../compartidos/aplicativo-manual/aplicativo-manual.component";

export const routes: Routes = [
  {
    path:'',
    component:PaginainicioComponent
  },
  {
    path:'aplicativo',
    component:AplicativoComponent
  },
  {
    path:'aplicativo-manual',
    component:AplicativoManualComponent
  },
];
