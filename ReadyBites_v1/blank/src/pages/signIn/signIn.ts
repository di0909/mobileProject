import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SuggestionsPage} from '../suggestions/suggestions';

@Component({
  selector: 'page-signIn',
  templateUrl: 'signIn.html'
})
export class SignInPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  username: any;
  password: any;

  constructor(public navCtrl: NavController) {
  }

  createAccount() {
    //save user info
    console.log("enter createAccount");
    this.navCtrl.push(SuggestionsPage, {username: this.username});
  }  
}
