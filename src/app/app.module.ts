import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

import { AuthModule } from './auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
 var config = {
 apiKey: "AIzaSyDV03eMIVcRAf4WXM-_3DQD4m3oMgrmXnw",
 authDomain: "fitnessapp-3b8b8.firebaseapp.com",
 databaseURL: "https://fitnessapp-3b8b8.firebaseio.com",
 projectId: "fitnessapp-3b8b8",
 storageBucket: "fitnessapp-3b8b8.appspot.com",
 messagingSenderId: "484150920614"
 };
 firebase.initializeApp(config);
 */
