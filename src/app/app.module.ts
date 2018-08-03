import { CoreModule } from './components/core.module';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ROUTES } from './app.routes';
import {PushNotificationService} from './services/push-notification.service';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [
    AuthService,
    PushNotificationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
