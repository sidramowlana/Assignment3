import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from './CounterService.servie';

@Injectable()
export class UsersService{
  activeUser = ['luffy','zoro'];
  inactiveUser = ['sanji','robin'];

  clickCount = new EventEmitter<number>();
  constructor(private countService:CounterService){}
  onActive(id:number)
  {
    this.activeUser.push(this.inactiveUser[id]);
    this.inactiveUser.splice(id,1);
  }
  onInactive(id:number)
  {
    this.inactiveUser.push(this.activeUser[id]);
    this.activeUser.splice(id,1);  
  }
}
