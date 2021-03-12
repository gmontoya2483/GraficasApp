import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient) { }

  getUsuarioRedesSociales(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData(): Observable<any> {
    return this.getUsuarioRedesSociales()
      .pipe(
        delay(1500),
        map (data => {

          const labels = Object.keys( data );
          const values: number[] = Object.values( data );

          return { labels, values };

        })
      );

  }




}
