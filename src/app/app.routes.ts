import { Routes } from '@angular/router';
import { Signup } from './SignUp/signup';
import { Login } from './Login/login';
import { Website } from './Website/website';
import { MyProfile } from './my-profile/my-profile';
export const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'web', component: Website },
  { path: 'profile', component: MyProfile}
];