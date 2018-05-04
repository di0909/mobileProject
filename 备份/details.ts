import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class Details {

  food: any;
  //stars: Array<any> = new Array(5);

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public inAppBrowser: InAppBrowser) {
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
            //this.payItems();
          }
        }
      ]
    });
    confirm.present();
  }

  openMaps(){
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.inAppBrowser.create('https://www.google.com/maps', '_self', options);
    //browser.on('')
  }

  /*isActive(index: number) {
    if (this.restaurant.rating >= index) {
      return true;
    }
    return false;
  }*/

}
