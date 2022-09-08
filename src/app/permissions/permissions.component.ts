import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css'],
  template: ''
})

export class PermissionsComponent implements OnInit {
  users = this.serverService.getUsers();
  SelectedValue: any; 
  PermissionsList: any; 

  constructor(
    public serverService: UserService,
    private http: HttpClient
  ) { }

  changeRole(e: { target: { value: any; }; }) {
    console.log(e.target.value)
    this.SelectedValue = e.target.value;
  }

  ngOnInit(): void {
    this.serverService.getPerms().subscribe((data: any) => {
      this.PermissionsList = data; 
    })
  }
}