import { ModelUser } from './../models/ModelUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor-view',
  templateUrl: './autor-view.component.html',
  styleUrls: ['./autor-view.component.css']
})
export class AutorViewComponent implements OnInit {

  public user: ModelUser;

  constructor() { 
    this.user = new ModelUser();
    this.user.firtsName = "felipe";
    this.user.lastName = "Gonzalez";
    this.user.career ="ISC";
    this.user.nameUser = "felipSen";
  }

  ngOnInit() {
  }

  salir(){
    alert("estoy fuera");
  }

  addUser(){
    alert("add amigo");
  }
}
