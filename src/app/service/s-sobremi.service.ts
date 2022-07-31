import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SobreMi } from '../model/sobremi';


@Injectable({
  providedIn: 'root'
})
export class SSobreMiService {
  expURL = 'http://localhost:8080/sobremi/';

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<SobreMi[]>{
    return this.httpClient.get<SobreMi[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<SobreMi>{
    return this.httpClient.get<SobreMi>(this.expURL + `detail/${id}`);
  } 

  public save(sobreMi: SobreMi): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', sobreMi);
  }

  public update(id: number, sobreMi: SobreMi): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, sobreMi);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }


}
