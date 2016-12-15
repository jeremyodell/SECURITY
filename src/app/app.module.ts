import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDzirlTlGVVV4-haqL1WmtzGL9rbrEguG4',
  authDomain: 'security-8dd33.firebaseapp.com',
  databaseURL: 'https://security-8dd33.firebaseio.com',
  storageBucket: 'security-8dd33.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
