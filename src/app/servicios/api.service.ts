import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {juego} from "../enlaces-api/juego";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  public getWord():Observable<any>{
    return this.http.get<any>(juego.juegoDePalabras.listaDePalabras, {observe:'response'}).
    pipe(map((response:HttpResponse<any>)=>response.body));
  }
}
