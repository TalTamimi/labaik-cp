import { LoadingComponent } from './components/loading/loading.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import {NotificationCpComponent} from './components/notification-cp/notification-cp.component';

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'loading', pathMatch: 'full'},
      { path: 'loading', component: LoadingComponent},
      { path: 'login', component: LoginComponent},
      { path: 'notification-cp', component: NotificationCpComponent}
    ]
  },
  { path: '**',  component: AppComponent }
];
