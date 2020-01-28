import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModelInterest } from 'src/app/models/ModelInterest';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  public category: ModelInterest;

  constructor(private service: UserService, private dialog: MatDialogRef<NewCategoryComponent>) { }

  ngOnInit() {
    this.category = new ModelInterest();
  }

  public send() {
    this.service.saveCategory(this.category).subscribe(
      res =>{
        console.log(res);
        this.dialog.close();
      },
      err=>{
        alert("error al cargar temas");
      }
    );
  }

  /**
   * validSend
   */
  public validSend(): boolean {
    return this.titleFormControl.invalid || this.contentFormControl.invalid;
  }

  public titleFormControl = new FormControl('', [Validators.required,Validators.maxLength(30)]);
  public contentFormControl = new FormControl('', [Validators.required]);
  public urlFormControl = new FormControl('', [Validators.required]);
}
