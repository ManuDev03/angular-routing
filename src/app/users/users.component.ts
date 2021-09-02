import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'max',
    },
    {
      id: 2,
      name: 'manu',
    },
  ];
}
