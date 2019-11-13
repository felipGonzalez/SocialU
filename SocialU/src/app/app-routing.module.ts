import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialUComponent } from './components/social-u/social-u.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'SocialU', pathMatch: 'full' },
  { path: 'SocialU', component: SocialUComponent},
  { path: 'home', component: HomeComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
