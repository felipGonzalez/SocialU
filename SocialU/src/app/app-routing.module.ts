import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialUComponent } from './components/social-u/social-u.component';
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ThemesComponent } from './components/themes/themes.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'SocialU', pathMatch: 'full' },
  { path: 'SocialU', component: SocialUComponent },
  {
    path: 'home', component: HomeComponent, children: [{ path: 'homePage', component: HomepageComponent },
    { path: 'themes', component: ThemesComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'profile', component: ProfileComponent },]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
