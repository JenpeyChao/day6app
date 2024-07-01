import { Component } from '@angular/core';
import { UserService } from '../user.service'
import { users } from '../user.model';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userData: any = [];
  addName: string = '';
  deleteName: string = '';
  constructor(private UserService: UserService){
    this.getUsers()
  }

  addUser(){
    const user: users = {
      name: this.addName,
      id: uuidv4().slice(0,4),
    }
    this.UserService.addUsers(user).subscribe(
      response =>{
        this.addName = ''
        this.getUsers()
      }
    );
    
  }
  getUsers(){

    this.UserService.getUsers().subscribe(
      data =>{
        console.log(data);
        this.userData = data;
        console.log(this.userData)
    })
    
    
  }
  deleteUsers(){
    this.UserService.deleteUsers(this.deleteName).subscribe(
      response =>{
        this.getUsers();
        this.deleteName = ''
      }
    );
  }
}


