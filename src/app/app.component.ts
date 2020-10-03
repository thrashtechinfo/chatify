import { UserService } from './core/http/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chatify';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getLoggedInUserInfo()
      .subscribe(data => {
        console.log(data);
      });
  }
}
