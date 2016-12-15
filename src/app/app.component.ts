import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  template: `
  <div> {{ (af.auth | async) }} </div>
  <button (click)="login()">Login With Google</button>
  <button (click)="overrideLogin()">Login Anonymously</button>
  `,
})
export class AppComponent {
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
    
  }
  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }
  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });    
  }
}