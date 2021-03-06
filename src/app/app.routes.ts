import { LoadingComponent } from './components/loading/loading.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndicesComponent } from './components/indices/indices.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import {NotificationCpComponent} from './components/notification-cp/notification-cp.component';

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'loading', component: LoadingComponent},
      { path: 'login', component: LoginComponent},
      { path: 'notification-cp', component: NotificationCpComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'indices', component: IndicesComponent}
    ]
  },
  { path: '**',  component: AppComponent }
];
