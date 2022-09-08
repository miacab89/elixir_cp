import { Component } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent  {
  servers = this.serverService.getServers();
  

  constructor(
    private serverService: ServersService
  ) {}   
  
  onDelete() {
    window.alert('Are you sure you want to delete?')
  }

  onConfigure() {
    window.alert('')
  }

  onPower() {
    window.alert('Are you sure you want to deactivate this?')
  }
  ngOnInIt(): void {}

}


