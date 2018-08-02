import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { BackgroundComponent } from './background/background.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
  ],
  declarations: [
    LandingComponent,
    LoginComponent,
    LogoComponent,
    BackgroundComponent,
    LoadingComponent
  ],
  exports: [
    LandingComponent,
    LoginComponent,
    LogoComponent,
    BackgroundComponent,
    MatButtonModule,
    MatInputModule,
  ]
})
export class CoreModule { }
