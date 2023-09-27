import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {CompartidosModule} from "./compartidos/compartidos.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidosModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule { }
