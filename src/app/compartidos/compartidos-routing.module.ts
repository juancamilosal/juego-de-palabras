import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {PaginainicioComponent} from "../inicio/paginainicio/paginainicio.component";
import {AplicativoComponent} from "./aplicativo/aplicativo.component";
import {AplicativoManualComponent} from "./aplicativo-manual/aplicativo-manual.component";

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
