import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

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
}

