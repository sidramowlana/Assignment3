import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UsersService } from '../UsersService.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.less']
})
export class ActiveUserComponent{

  @Input() users:string[]=[];
  count:number=1;
  // @Output() inactivatingUser = new EventEmitter<number>();
  
  constructor(private usersService:UsersService){}
  inactivating(id:number)
  {
    // this.inactivatingUser.emit(id);
    this.usersService.onInactive(id);
    this.usersService.clickCount.emit(this.count++);
  }
}
