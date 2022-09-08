import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServersService {
  
  constructor(
    private http: HttpClient
  ) {}

  getServers() { 
    return this.http.get<Config[]>("./assets/json/servers.json");
  }
}

export interface Config {
  product: string,
  name: string,
  service: string,
  size: string,
  users: string
}



