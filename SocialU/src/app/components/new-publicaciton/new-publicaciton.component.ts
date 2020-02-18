import { PublicationService } from './../../services/publication/publication.service';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormControlName } from '@angular/forms';
import { ModelPublication } from 'src/app/models/ModelPublication';
import { ModelInterest } from 'src/app/models/ModelInterest';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-publicaciton',
  templateUrl: './new-publicaciton.component.html',
  styleUrls: ['./new-publicaciton.component.css']
})
export class NewPublicacitonComponent implements OnInit {

  publication: ModelPublication;
  themes: Array<ModelInterest>;

  constructor(private serve: UserService, private router: Router, private servicePublication: PublicationService,
    private dialog: MatDialogRef<NewPublicacitonComponent>) {
  }

  ngOnInit() {
    this.themes = new Array<ModelInterest>();
    if (sessionStorage.getItem('user')) {
      let user = JSON.parse(sessionStorage.getItem('user'));
      this.publication = new ModelPublication(user._id, user.nameUser);
      this.loadThemes();
    } else {
      this.router.navigateByUrl('/');
    }
  }

  private loadThemes() {
    this.serve.getInterestList().subscribe(
      res => {
        console.log(res);

        this.themes = res;
      },
      err => {
        // alert(err);
      }
    );
  }

  /**
   * send
   */
  public send() {
    console.log("Publicacion: ", this.publication);
    this.publication.date = new Date().toISOString().slice(0,10);
    console.log("Esta es la fecha: ", this.publication.date);
    
    this.servicePublication.savePublication(this.publication).subscribe(
      res => {
        console.log("Enviada");
        this.dialog.close();
      },
      err => {
      }
    );
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
