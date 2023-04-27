import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  getPersone(){
    return this.http.get(`${this.baseUrl}/getPersone`);
  }

  getCorsi(){
    return this.http.get(`${this.baseUrl}/allCorso`);
  }

  getAbbonamenti(){
    return this.http.get(`${this.baseUrl}/abbonamenti`);
  }

  getSeguiti(id:any){
    return this.http.get(`${this.baseUrl}/getPersone/${id}`);
  }
}
