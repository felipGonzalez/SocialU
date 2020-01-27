import { AutorViewComponent } from './../../autor-view/autor-view.component';
import { NewPublicacitonComponent } from './../../new-publicaciton/new-publicaciton.component';
import { Component, OnInit } from '@angular/core';
import { ModelPublication } from 'src/app/models/ModelPublication';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  publicationList: Array<ModelPublication>;
   
  constructor(private dialog: MatDialog){
    this.publicationList = new Array<ModelPublication>();
    for (let i = 1; i < 10; i++) {
      this.publicationList.push(new ModelPublication(`${i}`,`${i}`, `Este el el titulo de la p. # ${i}`,`Este es todo el contenido que posee la publicacion # ${i}`,`Yo soy el autor de la publicacion # ${i}`, new Date(), `categoria ${i}`));  
    }
    console.log(this.publicationList);
  }

  ngOnInit() {
  
  }

  openModal() { 
    const dialogRef = this.dialog.open(NewPublicacitonComponent, {
      autoFocus : true,
    });
  }

  openUser(id: string){
    const dialogRef = this.dialog.open(AutorViewComponent, {
      autoFocus : true,
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
