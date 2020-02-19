import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegistryComponent } from '../registry/registry.component';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { ModelUser } from 'src/app/models/ModelUser';

@Component({
  selector: 'app-social-u',
  templateUrl: './social-u.component.html',
  styleUrls: ['./social-u.component.css']
})
export class SocialUComponent implements OnInit {

  
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public passworFormControl = new FormControl('', [
    Validators.required,
    
  ]);

  public user: ModelUser;

  constructor(private dialog: MatDialog, private serve: UserService, private router: Router) {
    this.user = new ModelUser();
    //this.initUser();
   }

  ngOnInit() {
  }

  public initUser() {
    this.user.email ="adsasd@hotmail.com";
    this.user.password = "123";
  }

  openModal() { 
    const dialogRef = this.dialog.open(RegistryComponent, {
      autoFocus : true,
      panelClass: 'myapp-modal'
    });
  }

  loadUser(){
   console.log("Datos enviados");
    console.log(this.user);
    
    
   this.serve.login(this.user).subscribe(
     res =>{
     if(res !== null){
      console.log(res)
      sessionStorage.setItem("user", JSON.stringify(res));
      this.router.navigateByUrl('/home/homePage');
     }else {
      alert("usuario o contraseña incorrecta")
     }
     },
     err =>{
      alert("Error al caragr servicio");
     }
   );

  }
}
