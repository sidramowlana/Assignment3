import { Component, OnInit } from '@angular/core';
import { UsersService } from './UsersService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  activeUser:string[];
  inactiveUser:string[];

  constructor(private usersService:UsersService)
  {}
  ngOnInit()
  {
    this.activeUser = this.usersService.activeUser;
    this.inactiveUser = this.usersService.inactiveUser;
  }
}
