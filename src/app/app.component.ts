import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  activeUser = ['luffy','zoro'];
  inactiveUser = ['sanji','robin'];

  onSetToActive(id:number)
  {
    this.activeUser.push(this.inactiveUser[id]);
    this.inactiveUser.slice(id,1);
  }

  onSetToInactive(id:number)
  {
    this.inactiveUser.push(this.activeUser[id]);
    this.activeUser.slice(id,1);
  }
}
