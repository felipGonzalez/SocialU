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
  commentData: string = "";

  constructor(private dialog: MatDialog, private serve: PublicationService, private router: Router) {
    this.publicationList = new Array<ModelPublication>();
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
    dialogRef.afterClosed().subscribe(result => {
      this.loadPublicationList();
    });
  }

  openUser(id: string) {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (id !== user._id) {
      const dialogRef = this.dialog.open(AutorViewComponent, {
        autoFocus: true,
        maxHeight: "300px",
        maxWidth: "150px",
        panelClass: "user-class",
        data: { id }
      });
    }
  }

  /**
   * like
   */
  public like(item: ModelPublication) {
    item.likes = (item.likes + 1);
    this.serve.sendLike(item).subscribe(
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

  public saveComment(publication: ModelPublication) {
    console.log("comentario de: ", publication);

    if (publication.comments == null) {
      publication.comments = new Array<string>();
    }
    publication.comments.push(this.commentData);
    this.serve.saveComment(publication).subscribe(
      res => {
        console.log(res);
        this.commentData = "";

      },
      err => {

      }
    );
  }
}
