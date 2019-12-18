import { Component, OnInit } from '@angular/core';
import { ModelFriend } from 'src/app/models/ModelFriend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendsList: Array<ModelFriend>;

  constructor() {
    this.friendsList = new Array<ModelFriend>();
    console.log(this.friendsList);
    for (let i = 1; i < 10; i++) {
      this.friendsList.push(new ModelFriend(`Nombre de usuario del amigo # ${i}`, `firstName del amigo # ${i}`,
        `LastName del amigo # ${i}`, `Genero del amigo # ${i}`,
        `Cumpleaños del amigo # ${i}`, `carrera del amigo # ${i}`,
        `Email del amigo # ${i}`, `telefono del amigo # ${i}`));

    }
    console.log(this.friendsList);

  }

  ngOnInit() {
    console.log("En el onInit");
    console.log(this.friendsList);
    
  }

  private loadFriends(id: string) {

  }

}
