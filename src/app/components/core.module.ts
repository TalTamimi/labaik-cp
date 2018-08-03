import { MatInputModule } from '@angular/material/input';
import {MatButtonModule, MatSelectModule} from '@angular/material';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { BackgroundComponent } from './background/background.component';
import { LoadingComponent } from './loading/loading.component';
import {NotificationCpComponent} from './notification-cp/notification-cp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndicesComponent } from './indices/indices.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  declarations: [
    LandingComponent,
    LoginComponent,
    LogoComponent,
    BackgroundComponent,
    LoadingComponent,
    NotificationCpComponent,
    DashboardComponent,
    IndicesComponent
  ],
  exports: [
    LandingComponent,
    LoginComponent,
    LogoComponent,
    BackgroundComponent,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class CoreModule { }
