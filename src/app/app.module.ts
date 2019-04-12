import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const config = {
  apiKey: 'AIzaSyAYTJRgT3SHWCG3_MAwbEmqNC89SKlpCQ8',
  authDomain: 'github-org-geographics.firebaseapp.com',
  databaseURL: 'https://github-org-geographics.firebaseio.com',
  projectId: 'github-org-geographics',
  storageBucket: 'github-org-geographics.appspot.com',
  messagingSenderId: '620373101959'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule // auth
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
