import { PublicationService } from './../../services/publication/publication.service';

import { NewPublicacitonComponent } from '../new-publicaciton/new-publicaciton.component';
import { Component, OnInit } from '@angular/core';
import { ModelPublication } from 'src/app/models/ModelPublication';
import { ModelComment } from 'src/app/models/ModelComment';
import { MatDialog } from '@angular/material';
import { AutorViewComponent } from '../autor-view/autor-view.component';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  publicationList: Array<ModelPublication>;
  comment: ModelComment;

  constructor(private dialog: MatDialog, private serve: PublicationService, private router: Router) {
    this.publicationList = new Array<ModelPublication>();
    if (sessionStorage.getItem('user')) {
      let user = JSON.parse(sessionStorage.getItem('user'));
     this.comment = new ModelComment(user.nameUser);
    } else {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit() {
    this.loadPublicationList();

  }

  private loadPublicationList() {
    this.serve.getPublicationList().subscribe(
      res => {
        console.log(res);
        this.publicationList = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  openModal() {
    const dialogRef = this.dialog.open(NewPublicacitonComponent, {
      autoFocus: true,
    });
  }

  openUser(id: string) {
    const dialogRef = this.dialog.open(AutorViewComponent, {
      autoFocus: true,
      maxHeight: "300px",
      maxWidth: "150px",
      panelClass: "user-class"
    });
  }

  /**
   * like
   */
  public like(id: string, likes: number) {
    this.serve.sendLike(id, (likes + 1)).subscribe(
      res => {
        console.log(res);

      },
      err => {
        alert("error al enviar");
      }
    )
  }

  public commentFormControl = new FormControl('', [Validators.required]);

  public validSend(): boolean {
    return this.commentFormControl.invalid;
  }

  public saveComment(){
    alert("Guardar Comment" + this.comment.autor_comment);
  }
}
