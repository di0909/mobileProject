import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { Http, RequestOptions, Headers, Response} from '@angular/http';

import {global} from '../global';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class Details {
  localhost = "128.237.128.218";
  food: any;
  reviewScore: Number;
  //stars: Array<any> = new Array(5);

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public inAppBrowser: InAppBrowser,
              public http: Http,) {
    this.food = this.navParams.data;
    alert(this.food);
  }
  doConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Pay for this?',
      message: 'This will jump to Paypal page',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },

        {
          text: 'Pay',
          handler: () => {
            console.log('Pay clicked');
            this.addCalory();
            //this.payItems();
          }
        }
      ]
    });
    confirm.present();
    
  }

  addCalory() {
    var data = {
      'username':global.currentUser,
      'calory':this.food.calories,
    };
    console.log(data);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = "http://" + this.localhost + ":3000/users/addCalories";

    console.log('before login');
    this.http.post(postUrl, this.toparams(data), options)
    .subscribe((res: Response) => {
      alert("success");
    }, (err) => {
    // error
      alert("error"+JSON.stringify(err));
    });
  }

  openMaps(){
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.inAppBrowser.create('https://www.google.com/maps', '_self', options);
    //browser.on('')
  }

  addFavorate(){
    console.log('enter add favorate');
    var data = {
      'username':global.currentUser,
      'foodId':this.food.foodId,
    };

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = "http://" + this.localhost + ":3000/users/favorate";

    console.log('post url');
    console.log(postUrl);
    this.http.post(postUrl, this.toparams(data), options)
    .subscribe((res: Response) => {
      alert("success");
    }, (err) => {
    // error
      alert("error"+JSON.stringify(err));
    });
  }

  toparams = function ObjecttoParams(obj) {
    var p = [];
    for (var key in obj) {
        p.push(key + '=' + encodeURIComponent(obj[key]));
    }
    console.log(p);
    return p.join('&');
  };

  onModelChange(event) {
    console.log(event);
    this.reviewScore = event;
  }
  clickRate() {
    var data = {
      'foodId':this.food._id,
      'rate':this.reviewScore,
    };
    console.log(data);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = "http://" + this.localhost + ":3000/updateRateScore";

    console.log('before login');
    this.http.post(postUrl, this.toparams(data), options)
    .subscribe((res: Response) => {
      alert("success");
    }, (err) => {
    // error
      alert("error"+JSON.stringify(err));
    });

  }

  /*isActive(index: number) {
    if (this.restaurant.rating >= index) {
      return true;
    }
    return false;
  }*/

}
