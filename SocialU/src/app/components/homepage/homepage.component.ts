import { PublicationService } from './../../services/publication/publication.service';

import { NewPublicacitonComponent } from '../new-publicaciton/new-publicaciton.component';
import { Component, OnInit } from '@angular/core';
import { ModelPublication } from 'src/app/models/ModelPublication';
import { MatDialog } from '@angular/material';
import { AutorViewComponent } from '../autor-view/autor-view.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  publicationList: Array<ModelPublication>;

  constructor(private dialog: MatDialog, private serve: PublicationService) {
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
  public like() {
    alert("Is liked");
  }
}
