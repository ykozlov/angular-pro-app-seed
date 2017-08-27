import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [{
    path: 'auth',
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'login' },
        { path: 'login', loadChildren: './login/login.module#LoginModule' },
        { path: 'register', loadChildren: './register/register.module#RegisterModule' }
    ]
}]; 

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyDV03eMIVcRAf4WXM-_3DQD4m3oMgrmXnw",
    authDomain: "fitnessapp-3b8b8.firebaseapp.com",
    databaseURL: "https://fitnessapp-3b8b8.firebaseio.com",
    projectId: "fitnessapp-3b8b8",
    storageBucket: "fitnessapp-3b8b8.appspot.com",
    messagingSenderId: "484150920614"
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ],
    declarations: []
})
export class AuthModule{}