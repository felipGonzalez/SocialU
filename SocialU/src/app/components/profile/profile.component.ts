import { ModelUser } from './../../models/ModelUser';
import { Component, OnInit } from '@angular/core';
import { ModelInterest } from 'src/app/models/ModelInterest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: ModelUser;
  public confirmPass: string;

  constructor(private router:Router) {
    if (sessionStorage.getItem('user')) {
      console.log("Existe");
      
      this.user = JSON.parse(sessionStorage.getItem('user'));
    } else {
      this.router.navigateByUrl('/');
    }

    console.log(this.user);

    
    
    }

  ngOnInit() {
  }

  saveData(){

    


  }

}
