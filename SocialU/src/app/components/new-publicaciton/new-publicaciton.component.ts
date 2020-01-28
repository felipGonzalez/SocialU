import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormControlName } from '@angular/forms';
import { ModelPublication } from 'src/app/models/ModelPublication';

@Component({
  selector: 'app-new-publicaciton',
  templateUrl: './new-publicaciton.component.html',
  styleUrls: ['./new-publicaciton.component.css']
})
export class NewPublicacitonComponent implements OnInit {

  publication: ModelPublication;
  themes: Array<string>;

  constructor() {
    this.publication = new ModelPublication("1", "2","", "", "Mendez", new Date(), "arte");
  }

  ngOnInit() {
    this.themes = new Array<string>();
    this.themes.push("Deportes");
    this.themes.push("Ciencia");
    this.themes.push("Arte");
    this.themes.push("Humanidades");
  }

  /**
   * send
   */
  public send() {
    alert("send");
  }

  /**
   * validSend
   */
  public validSend(): boolean {
      return this.titleFormControl.invalid || this.themeFormControl.invalid || this.contentFormControl.invalid;
  }

  public titleFormControl = new FormControl('', [Validators.required,
    Validators.maxLength(30)
    ]);

    public themeFormControl = new FormControl('', [Validators.required]);
    
    public contentFormControl = new FormControl('', [Validators.required]);
}
