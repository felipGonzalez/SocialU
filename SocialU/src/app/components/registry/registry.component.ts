import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

export interface Gender {
  nameGender: string;
  domainGender: string;
}

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})



export class RegistryComponent implements OnInit {

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public passworFormControl = new FormControl('', [
    Validators.required,
    
  ]);

  public nameFormControl = new FormControl('', [Validators.required,
    Validators.maxLength(30)
  ]);

  public lastNameFormControl = new FormControl('', [Validators.required,
    Validators.maxLength(30)
  ]);

  public userNameFormControl = new FormControl('', [Validators.required,
    Validators.maxLength(30)
  ]);

  public phoneFormControl = new FormControl('', [
    Validators.required,
  ]);

  public dateFormControl = new FormControl('', [
    Validators.required,
  ]);

  public carrerFormControl = new FormControl('', [Validators.required,
    Validators.required
  ]);

  public addresFormControl = new FormControl('', [Validators.required,
    Validators.required
  ]);

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  public selectGenderControl = new FormControl('', Validators.required);
  
  public  genders: Gender[] = [
    {nameGender: 'Masculino', domainGender: 'M'},
    {nameGender: 'Femenino', domainGender: 'F'},
    {nameGender: 'Indefinido', domainGender: 'I'}
  ];

  constructor(public dialogRef: MatDialogRef<RegistryComponent>) { }

  ngOnInit() {
    this.dialogRef.updatePosition({ top: `50px`});
  }


  public restrictNumeric(e) {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }
}
