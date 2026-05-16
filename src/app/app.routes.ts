import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { GoogleAuthenticationComponent } from './pages/google-authentication/google-authentication.component';
import { GoogleConsentComponent } from './pages/google-consent/google-consent.component';
import { UserTypeComponent } from './pages/user-type/user-type.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'google-authentication', component: GoogleAuthenticationComponent },
  { path: 'google-consent', component: GoogleConsentComponent },
  { path: 'user-type', component: UserTypeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];