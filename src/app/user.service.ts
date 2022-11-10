import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

const baseUrl = "http://localhost:8080/api/users/id";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(
    private http: HttpClient
  ) { }

  getUsers() { 
   return this.http.get<userConfig[]>("./assets/json/users.json");
     
  }

  getPerms() {
    return this.http.get<PermsConfig[]>("./assets/json/users.json");
  }

  getAll(app: any): Observable<Users[]> {
    return this.http.get<Users[]>(baseUrl); 
  }
  get(id: any): Observable<Users> {
    return this.http.get(`${baseUrl}/${id}`); 
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, username: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
export interface userConfig {
  id: number,
  username: string,
  role: string,
  password: string
}

export interface PermsConfig {
  read: string,
  readwrite: string
}