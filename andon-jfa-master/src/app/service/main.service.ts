import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Main } from '../module/main';
import { environment } from 'src/environments/environment.development';
import { RealizadoGeral } from '../module/realizadoGeral';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }


  put(imposto: number, tcimposto: number, shiftTime: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(
       environment.url + 'main/1',{imposto, tcimposto, shiftTime}, {headers});
  }

  getAllMain(): Observable<Main[]> {
    return this.http.get<Main[]>( environment.url + 'main');
  }

  postControleRealizado(imposto: number, realizado: number, realizadoHora: number, justificativa: string): Observable<RealizadoGeral>{
    return this.http.post<RealizadoGeral>(environment.url + "realizado", {
      "imposto": imposto,
      "realizado": realizado,
      "realizadoHora": realizadoHora,
      "justificativa": justificativa
  })
  }

  getControleRealizadoByDate(): Observable<RealizadoGeral[]>{
    return this.http.get<RealizadoGeral[]>(environment.url + "realizado")
  }
}
