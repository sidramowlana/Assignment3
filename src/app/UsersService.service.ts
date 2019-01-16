export class UsersService{
  activeUser = ['luffy','zoro'];
  inactiveUser = ['sanji','robin'];

  onActive(id:number)
  {
    this.activeUser.push(this.inactiveUser[id]);
    this.inactiveUser.splice(id,1);
  }
  onIinactive(id:number)
  {
    this.inactiveUser.push(this.activeUser[id]);
    this.activeUser.splice(id,1);  
  }
}
