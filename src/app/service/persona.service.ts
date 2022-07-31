import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';
  constructor(private http: HttpClient) { }
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
  }

  //public lista(): Observable<PersonaService[]>{
 //   return this.URL.get<persona[]>(this.URL + 'lista');
  //}


  //public detail(id: number): Observable<Persona>{
  //  return this.URL.ed<persona>(this.URL + `detail/${id}`);
  //} 

  //public save(persona: persona): Observable<any>{
  //  return this.URL.post<any>(this.URL + 'create', persona);
  //}

  //public update(id: number, persona: persona): Observable<any>{
  //  return this.URL.put<any>(this.URL + `update/${id}`, persona);
  //}

  //public delete(id: number): Observable<any>{
  //  return this.URL.delete<any>(this.URL + `delete/${id}`);
  //}




}
