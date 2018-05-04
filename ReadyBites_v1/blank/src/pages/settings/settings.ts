import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  user = {image:"", name:"di wang", calories:"100", points:"10", records:[{type:"1"},{type:"2"}]}
  records = new Array(2);

  constructor(public navCtrl: NavController) {
    //this.records[0]['type'] = "piazza";
    //this.records[1]['type'] = "sushi";

  }

  
}
