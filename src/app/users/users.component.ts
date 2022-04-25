import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @ViewChild('f') signupForm: NgForm;

  users = [
    {
      id: 1,
      name: 'Chad'
    },
    {
      id: 2,
      name: 'Meagan'
    },
    {
      id: 3,
      name: 'Rohan'
    }
  ];

  onSubmit() {
    console.log(this.signupForm);
  }
}
