import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
   
  private users=[
    new User("1","admin123","c810@g.com","Administrator")
  ]
  getUsers(){
    return this.users;
  }
  addUser(user:User){
    this.users.push(user);
  }
  getUserByPassword(pass:string){
    return this.users.find(u => u.password === pass);
  }
  updateUser(user:User, pass:string){
    const index = this.users.findIndex(u => u.password === pass);
    if(index!==-1){
      this.users[index] = user;
    }
  }
  deleteUser(user:User){
    this.users = this.users.filter(element => element!== user)
  }
}