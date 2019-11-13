import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegistryComponent } from '../registry/registry.component';
import { MatDialog } from '@angular/material';

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

  constructor(private dialog: MatDialog) { }

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
}
