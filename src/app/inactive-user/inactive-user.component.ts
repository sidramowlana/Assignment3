import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UsersService } from '../UsersService.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.less']
})
export class InactiveUserComponent{

  @Input() users:string[];
  // @Output() activatingUser = new EventEmitter<number>();
 
  constructor(private usersService:UsersService){}
  activating(id:number)
  {
    // this.activatingUser.emit(id);
    this.usersService.onActive(id);
  }

}
