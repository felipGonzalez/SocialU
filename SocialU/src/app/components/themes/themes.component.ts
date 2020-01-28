import { ModelInterest } from 'src/app/models/ModelInterest';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewCategoryComponent } from 'src/app/components/new-category/new-category.component';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  categoryList: Array<ModelInterest>;

  constructor(private serve: UserService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.categoryList = new Array<ModelInterest>();
    this.loadCategory();
  }

  /**
   * showPublications
   */
  public showPublications(id: string) {
    alert("Ver publicaciones de la categoria con ID: " + id);
  }

  /**
   * newCategory
   */
  public newCategory() {
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      autoFocus: true,
    });
  }

  /**
   * loadCategory
   */
  public loadCategory() {
    this.serve.getInterestList().subscribe(
      res =>{
        console.log(res);
       this.categoryList = res;
      },
      err =>{
       alert("Error al cargar");
      }
    );
  }
}
