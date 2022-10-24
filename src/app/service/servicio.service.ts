
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ServiciosResponse } from '../models/servicios-response';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  URL_BASE = environment.API_URL;
  constructor(private http: HttpClient) { }

  // VerRecord(): Observable<ServiciosResponse>{
  //   return this.http.get<ServiciosResponse>(`${this.URL_BASE}servicios`);
  // }
  // InsertRecord(data: any): Observable<any>{
  //   return this.http.post(`${this.URL_BASE}servicios`, data);
  // }
  // UpdateRecord(data: any,id:any): Observable<any>{
  //   return this.http.put(`${this.URL_BASE}servicios/${id}`, data);
  // }
  // DeleteRecord(id: any): Observable<any>{
  //   return this.http.delete(`${this.URL_BASE}servicios/${id}`);
  // }
  // async ViewRecord(id: any){
  //   const response = await fetch(`${this.URL_BASE}servicios/${id}`);
  //   return await response.json();
  // }
  // async ViewRecords(){
  //   const response = await fetch(`${this.URL_BASE}servicios`);
  //   return await response.json();
  // } 

  // VerRecordSingle(id:any): Observable<ServiciosResponse>{
  //   return this.http.get<ServiciosResponse>(`${this.URL_BASE}servicios/${id}`);
  // }


  InsertRecord(data: any): Observable<any>{
    return this.http.post(`${this.URL_BASE}servicios`, data);
  }
  UpdateRecord(data: any,id:any): Observable<any>{
    return this.http.put(`${this.URL_BASE}servicios/${id}`, data);
  }
  DeleteRecord(id: any): Observable<any>{
    return this.http.delete(`${this.URL_BASE}servicios/${id}`);
  }
  async ViewRecord(id: any){
    const response = await fetch(`${this.URL_BASE}servicios/${id}`);
    return await response.json();
  }
  async ViewRecords(){
    const response = await fetch(`${this.URL_BASE}servicios`);
    return await response.json();
  } 

  async ViewRecordsm(){
    const response = await fetch(`${this.URL_BASE}servicios`);
    return await response.json();
  } 
   VerRecord(): Observable<ServiciosResponse>{
    return this.http.get<ServiciosResponse>(`${this.URL_BASE}servicios`);
  }

  VerRecordSingle(id:any): Observable<ServiciosResponse>{
    return this.http.get<ServiciosResponse>(`${this.URL_BASE}servicios/${id}`);
  }
}
