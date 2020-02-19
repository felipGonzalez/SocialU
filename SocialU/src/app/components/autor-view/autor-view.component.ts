import { UserService } from 'src/app/services/user/user.service';
import { ModelUser } from '../../models/ModelUser';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-autor-view',
  templateUrl: './autor-view.component.html',
  styleUrls: ['./autor-view.component.css']
})
export class AutorViewComponent implements OnInit {

  public user: ModelUser;
  public flag: boolean = false;
  public listFollow: Array<ModelUser>;
  public flagButton: boolean = false;

  constructor(private service: UserService, @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<AutorViewComponent>) {
    this.user = new ModelUser();
    this.listFollow = new Array<ModelUser>();
  }


  ngOnInit() {

    this.service.getDataUser(this.data.id).subscribe(
      res => {
        console.log("reesponde datra");
        this.user = res[0];

        console.log(res);
        this.getFollow();
      },
      err => {

      }
    )
  }

  public getFollow() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.service.getFollow(user.nameUser).subscribe(
      res => {
        console.log("Llego respuesta", res);

        for (let i = 0; i < res.length; i++) {
          let user = new ModelUser()
          user = res[i]._fields[0].properties;
          this.listFollow.push(user)
        }
        this.verifyUser();
      },
      err => { }
    )
  }

  salir() {
    alert("estoy fuera");
  }

  addUser() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    var data = { nameUser: user.nameUser, followNameUser: this.user.nameUser, followDate: new Date().toString() };
    this.service.addFollow(data).subscribe(
      res => {
        console.log(res);
        this.dialog.close();
      },
      err => {

      }
    )
  }

  public verifyUser() {
    for (let i = 0; i < this.listFollow.length; i++) {
      if (this.listFollow[i].nameUser === this.user.nameUser) {
        this.flagButton = true;
      }

    }
    this.flag = true;
  }

  public deleteFollow() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    var data = { nameUser: user.nameUser, followNameUser: this.user.nameUser };
    this.service.deleteFollow(data).subscribe(
      res => {
        console.log(res);
        this.dialog.close();
      },
      err => {

      }
    )
  }
}
