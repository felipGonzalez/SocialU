import { ModelUser } from './../../models/ModelUser';
import { Component, OnInit } from '@angular/core';
import { ModelInterest } from 'src/app/models/ModelInterest';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: ModelUser;
  public confirmPass: string;

  constructor() {
    this.user = new ModelUser();
    this.user.firtsName = "felipe";
    this.user.lastName = "Gonzalez";
    this.user.career ="ISC";
    this.user.address ="23123";
    this.user.email ="adsasd@hotmail.com";
    this.user.nameUser = "felipSen";
    this.user.password = "123";
    this.user.phone = "1234567890";
    this.user.interestList = new Array<ModelInterest>();
    this.user.interestList.push(new ModelInterest("1","Arte"));
    this.user.interestList.push(new ModelInterest("1","Sociales"));
    this.user.interestList.push(new ModelInterest("1","Ingles"));
    this.user.interestList.push(new ModelInterest("1","interes"));
   }

  ngOnInit() {
  }

  saveData(){
    alert("guardar cambios");
  }

}
