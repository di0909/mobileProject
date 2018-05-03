import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SuggestionsPage} from '../suggestions/suggestions';
import { SignInPage } from '../signIn/signIn';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  username: any;
  password: any;
  constructor(public navCtrl: NavController) {
  }
  
  login() {
    this.navCtrl.push(TabsControllerPage, {username: this.username});
    //this.navCtrl.setRoot(TabPage);
  }

  createAccount() {
    this.navCtrl.push(SignInPage);
  }

}
