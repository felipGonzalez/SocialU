import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ModelFriend } from 'src/app/models/ModelFriend';
import { ModelUser } from 'src/app/models/ModelUser';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendsList: Array<ModelFriend>;

  constructor(private service: UserService) {
    this.friendsList = new Array<ModelFriend>();
  }

  ngOnInit() {
    console.log("En el onInit");
    console.log(this.friendsList);
    this.getFollow();
  }

  public getFollow() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.service.getFollow(user.nameUser).subscribe(
      res => {
        console.log("Llego respuesta", res);
        for (let i = 0; i < res.length; i++) {
          let user = new ModelUser()
          user = res[i]._fields[0].properties;
          console.log("Amigo: ", user);
          
          this.friendsList.push(user);
        }
      },
      err => { }
    )
    console.log(this.friendsList);
    
  }

  private loadFriends(id: string) {

  }

}
