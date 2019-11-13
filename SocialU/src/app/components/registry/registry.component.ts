import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { ModelInterest } from 'src/app/models/ModelInterest';
import { ModelUser } from 'src/app/models/ModelUser';

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

  public addressFormControl = new FormControl('', [Validators.required,
  Validators.required
  ]);

  toppings = new FormControl();
  toppingList: Array<ModelInterest>;
  user: ModelUser;

  public selectGenderControl = new FormControl('', Validators.required);

  public genders: Gender[] = [
    { nameGender: 'Masculino', domainGender: 'M' },
    { nameGender: 'Femenino', domainGender: 'F' },
    { nameGender: 'Indefinido', domainGender: 'I' }
  ];

  constructor(public dialogRef: MatDialogRef<RegistryComponent>, private serve: UserService) {
    this.user = new ModelUser();
    this.user.firtsName = "felipe";
    this.user.lastName = "Gonzalez";
    this.user.career ="ISC";
    this.user.address ="23123";
    this.user.email ="adsasd@hotmail.com";
    this.user.nameUser = "felipSen";
    this.user.password = "123";
    this.user.phone = "1234567890";
   }

  ngOnInit() {
    this.loadInterest();
    this.dialogRef.updatePosition({ top: `50px` });
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

  /**
   * loadInterest
   */
  public loadInterest() {
    this.serve.getInterestList().subscribe(
      res => {
        this.toppingList = res;
      },
      err => {
        // alert(err);
      }
    );
  }

  /**
   * saveUser
   */
  public saveUser() {
    console.log(this.user);
    
    this.serve.saveUser(this.user).subscribe(
      res => {
        console.log(res)
      },
      err => {
        alert("No se puede guardar el usuario")
      }
    );
  }
}
