import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Response} from '@angular/http';
import {SuggestionsPage} from '../suggestions/suggestions';

@Component({
  selector: 'page-signIn',
  templateUrl: 'signIn.html'
})
export class SignInPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  localhost = "128.237.177.21";
  username: any;
  password: any;

  constructor(public navCtrl: NavController, public http: Http,) {
  }

  createAccount() {
    //save user info
    console.log('enter create account');
    console.log('good');
    console.log(this.username);
    console.log('bad');
    var user = {
                  'username':this.username,
                  'password':this.password,
              };

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = "http://" + this.localhost + ":3000/register";
    this.http.post(postUrl, this.toparams(user), options)
      .subscribe((res: Response) => {
        alert("success");
        this.navCtrl.push(SignInPage);
      }, (err) => {
        // error
        alert("error"+JSON.stringify(err));
      });

    this.navCtrl.push(SuggestionsPage, {username: this.username});
  }  
  toparams = function ObjecttoParams(obj) {
    var p = [];
    for (var key in obj) {
        p.push(key + '=' + encodeURIComponent(obj[key]));
    }
    return p.join('&');
};
}
