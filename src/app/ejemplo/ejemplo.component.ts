import { Component, OnInit } from '@angular/core';

import { DataService } from "../data.service";
import { Post } from "../Post";

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  users: string[] = ["joe","carlos","maria"]
  name: string = "Yojhan";
  age: number = 24;
  posts: Post[];

  constructor(private dataService: DataService){}

  ngOnInit(){
   this.dataService.getData().subscribe( (data) => {
    this.posts = data;
    console.log(this.posts)
   })
  }

  getPosts(){

  }

  onClick(){
    alert("Hello");
  }

  deleteUser(user: string){
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  addUser(newUser: any){
    this.users.push(newUser.value);
    newUser.value = "";
    newUser.focus();
  }

}
