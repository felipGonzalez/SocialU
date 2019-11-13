import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegistryComponent } from '../registry/registry.component';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(private dialog: MatDialog, private serve: LoginService) { }

  ngOnInit() {
  }


  openModal() { 
    const dialogRef = this.dialog.open(RegistryComponent, {
      width: "600px",
      maxWidth : "800px",
      autoFocus : false,
      panelClass: 'myapp-modal'
    });
  }

  loadCompany(){
   this.serve.login(this.emailFormControl.value, this.passworFormControl.value).subscribe(
     res =>{
      
     },
     err =>{
      alert("Error al login");
     }
   );
  }
}
