import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.less']
})
export class ActiveUserComponent{

  @Input() users:string[];
  @Output() inactivatingUser = new EventEmitter<number>();
  
  inactivating(id:number)
  {
    this.inactivatingUser.emit(id);
  }
}
