import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Users } from '../../models/users.model'; 
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';

@Component ({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  // Services & Form Builders
  constructor(
      public userService: UserService,
      public http: HttpClient,
      private formBuilder: FormBuilder 
    ) {}

  // Get Users JSON 
  users = this.userService.getUsers(); 

  // New User Validation
  newUserForm = this.formBuilder.group({
      username: new FormControl('', 
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
      password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]),
      confirmPassword: new FormControl('',  Validators.required)
    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    });  

  // Validation Check
    submitValid() {
      if(this.newUserForm.valid){
        alert('User form is valid!!')
      } else {
        alert('User form is not valid!!')
      }
        console.log(this.newUserForm);
      }

  // New User Model component 
  usersList: Users = {
    username: '',
    role: '',
    password: ''
  };

  submitted = false; 

  // Save New User 
  saveUser(): void {
    const data = {
      username: this.usersList.username,
      role: this.usersList.role,
      password: this.usersList.password
    };
    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    }
  
  
  newUser(): void {
    this.submitted = false;
    this.usersList = {
      username: '',
      role: '',
      password: ''
    };
  }

    get f() {
      return this.newUserForm.controls;
    }



  ngOnInit(): void {
    
  }
}

