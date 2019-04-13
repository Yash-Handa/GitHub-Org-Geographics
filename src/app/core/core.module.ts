import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';

const config = {
  apiKey: 'AIzaSyAYTJRgT3SHWCG3_MAwbEmqNC89SKlpCQ8',
  authDomain: 'github-org-geographics.firebaseapp.com',
  databaseURL: 'https://github-org-geographics.firebaseio.com',
  projectId: 'github-org-geographics',
};

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule { }
