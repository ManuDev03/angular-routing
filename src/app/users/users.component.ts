import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    {
    id:1,
    name:'max'
  },
  {
    id:2,
    name:'manu'
  }
]

  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onReload(){
    this.router.navigate(['users'])

  }

    }
