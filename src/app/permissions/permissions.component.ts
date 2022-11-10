import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css'],
  encapsulation: ViewEncapsulation.None,
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

// Shadow Dom Test Component 
export class permissionShadow extends HTMLElement {

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" });

    // Create spans
      const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");
      const icon = document.createElement("span");
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", [0]);
      const info = document.createElement("span");
        info.setAttribute("class", "info");

      // Take attribute content and put it inside the info span
      const text = this.getAttribute("data-text");
      info.textContent = text;

      // Insert icon
      const img = document.createElement("img");
        img.src = this.hasAttribute("img")
          ? this.getAttribute("img")
          : "img/default.png";
        img.alt = this.hasAttribute("alt")
          ? this.getAttribute("alt")
          : "";
      icon.appendChild(img);

  }
}