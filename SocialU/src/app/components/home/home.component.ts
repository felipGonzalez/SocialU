import { Component, OnInit } from '@angular/core';
import { ModelUser } from 'src/app/models/ModelUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: ModelUser;

  constructor(private router: Router) { 
    if (sessionStorage.getItem('user')) {
      this.user = JSON.parse(sessionStorage.getItem('user'));
    } else {
      this.router.navigateByUrl('/');
    }


  }

  ngOnInit() {
  }

   public closeSesion() {
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }

  public search() {
    alert("Boton de Buscar");
  }

}
