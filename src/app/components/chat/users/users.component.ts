import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  UsersList: any;
  UsersListOriginal: any;


  seachQuery: string;

  constructor() {
    this.UsersListOriginal = [
      {id: 1, name: 'puneet', lastMsg: 'Hi', isOnline: true},
      {id: 2, name: 'aman', lastMsg: 'hey there', isOnline: false},
      {id: 3, name: 'ravi', lastMsg: 'hi..', isOnline: true},
      {id: 4, name: 'shreya', lastMsg: 'good morning', isOnline: true},
    ];

    this.UsersList = this.UsersListOriginal;
  }

  filterUsersList() {
    this.UsersList = this.UsersListOriginal.filter(user => {
        return user.name.includes(this.seachQuery);
    });
  }

  ngOnInit() {
  }

}
