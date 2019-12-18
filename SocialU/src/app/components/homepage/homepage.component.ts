import { Component, OnInit } from '@angular/core';
import { ModelPublication } from 'src/app/models/ModelPublication';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  publicationList: Array<ModelPublication>;

  constructor(){
    this.publicationList = new Array<ModelPublication>();
    for (let i = 1; i < 10; i++) {
      this.publicationList.push(new ModelPublication(`${i}`, `Este el el titulo de la p. # ${i}`,`Este es todo el contenido que posee la publicacion # ${i}`,`Yo soy el autor de la publicacion # ${i}`, new Date()));  
    }
    console.log(this.publicationList);
    
    
  }

  ngOnInit(): void {

  }

  /**
   * like
   */
  public like() {
    alert("Is liked");
  }

}
