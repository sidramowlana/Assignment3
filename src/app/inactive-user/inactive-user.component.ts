import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UsersService } from '../UsersService.service';
import { CounterService } from '../CounterService.servie';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.less']
})
export class InactiveUserComponent{

  @Input() users:string[]=[];
  count:number=1;
  // @Output() activatingUser = new EventEmitter<number>();
 
  constructor(private usersService:UsersService, private countService:CounterService){
    usersService.clickCount.subscribe(count=>  countService.counting(count)
    );
  }
  activating(id:number)
  {
    // this.activatingUser.emit(id);
    this.usersService.onActive(id);
    this.usersService.clickCount.emit(this.count++);
  }

}
