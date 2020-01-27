import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegistryComponent } from '../registry/registry.component';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

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

  constructor(private dialog: MatDialog, private serve: UserService, private router: Router) { }

  ngOnInit() {
  }


  openModal() { 
    const dialogRef = this.dialog.open(RegistryComponent, {
      autoFocus : true,
      panelClass: 'myapp-modal'
    });
  }

  loadUser(){
    this.router.navigate(['/home/homePage']);
   /*this.serve.login(this.emailFormControl.value, this.passworFormControl.value).subscribe(
     res =>{
      
     },
     err =>{
      alert("Error al login");
     }
   );*/

  }
}
