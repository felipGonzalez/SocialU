import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModelInterest } from 'src/app/models/ModelInterest';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  public category: ModelInterest;

  constructor() { }

  ngOnInit() {
    this.category = new ModelInterest("","");
  }

  public send() {
    
  }

  /**
   * validSend
   */
  public validSend(): boolean {
    return this.titleFormControl.invalid || this.contentFormControl.invalid;
  }

  public titleFormControl = new FormControl('', [Validators.required,
    Validators.maxLength(30)
    ]);
  
    public contentFormControl = new FormControl('', [Validators.required]);
}
