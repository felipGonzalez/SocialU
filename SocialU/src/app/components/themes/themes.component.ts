import { Component, OnInit } from '@angular/core';
import { ModelCategory } from 'src/app/models/ModelCategory';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  categoryList: Array<ModelCategory>;

  constructor(private serve: CategoryService) {
    this.categoryList = new Array<ModelCategory>();
    this.categoryList.push(new ModelCategory("1","Tecnologia", "Esta categoría es un contenedor general, utilizado para organizar categorías más precisas. Por su naturaleza amplia, solo deben aparecer en ella los artículos muy generales. Por favor, utiliza en lo posible alguna de las subcategorías", "https://www.bbva.com/wp-content/uploads/2018/06/fintech-tecnologia-innovacion-digital-blockchain-bbva_opt-1024x431.jpg"));
    this.categoryList.push(new ModelCategory("2","Cine", "Esta categoría es un contenedor general, utilizado para organizar categorías más precisas. Por su naturaleza amplia, solo deben aparecer en ella los artículos muy generales. Por favor, utiliza en lo posible alguna de las subcategorías", "https://www.bbva.com/wp-content/uploads/2018/06/fintech-tecnologia-innovacion-digital-blockchain-bbva_opt-1024x431.jpg"));
    this.categoryList.push(new ModelCategory("3","Matematicas", "Esta categoría es un contenedor general, utilizado para organizar categorías más precisas. Por su naturaleza amplia, solo deben aparecer en ella los artículos muy generales. Por favor, utiliza en lo posible alguna de las subcategorías", "https://www.bbva.com/wp-content/uploads/2018/06/fintech-tecnologia-innovacion-digital-blockchain-bbva_opt-1024x431.jpg"));
    this.categoryList.push(new ModelCategory("4","Idiomas", "Esta categoría es un contenedor general, utilizado para organizar categorías más precisas. Por su naturaleza amplia, solo deben aparecer en ella los artículos muy generales. Por favor, utiliza en lo posible alguna de las subcategorías", "https://www.bbva.com/wp-content/uploads/2018/06/fintech-tecnologia-innovacion-digital-blockchain-bbva_opt-1024x431.jpg"));
    this.categoryList.push(new ModelCategory("5","Ingenieria", "Esta categoría es un contenedor general, utilizado para organizar categorías más precisas. Por su naturaleza amplia, solo deben aparecer en ella los artículos muy generales. Por favor, utiliza en lo posible alguna de las subcategorías", "https://www.bbva.com/wp-content/uploads/2018/06/fintech-tecnologia-innovacion-digital-blockchain-bbva_opt-1024x431.jpg"));

   }

  ngOnInit() {
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
    alert("Nueva categoria");
  }

  /**
   * loadCategory
   */
  public loadCategory() {
    this.serve.loadCategory().subscribe(
      res =>{
       this.categoryList = res;
      },
      err =>{
       alert("Error al login");
      }
    );
  }

}
