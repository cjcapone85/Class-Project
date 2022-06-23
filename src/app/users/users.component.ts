import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserSubmit } from '../user-submit.model';
// import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @ViewChild('f') signupForm: NgForm;

  myUsers: UserSubmit[]= [
    {
      name: 'Chad',
      email: 'chad@chad.com'
    },
    {
      name: 'Meagan',
      email: 'meagan@meagan.com'
    },
    {
      name: 'Rohan',
      email: 'rohan@rohan.com'
    }
  ];

  onSubmit(postData: UserSubmit) {
    console.log(this.signupForm);
  }
}
