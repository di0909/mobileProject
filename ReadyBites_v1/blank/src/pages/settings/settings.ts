import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Response} from '@angular/http';
import {global} from '../global';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from "@angular/core";
import { Details } from '../details/details';
import * as echarts from 'echarts';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  localhost = "localhost";
  // user:any;
  user = {image:"", name:"di wang", calories:"100", points:"10", records:[{image: ""}]}
  records: any;

  constructor(public navCtrl: NavController, public http: Http, private changeDetectorRef: ChangeDetectorRef,) {
    // console.log('settings controll');
    // console.log(global.currentUser);
    // let getUrl = 'http://' + this.localhost + ':3000/users?username=' + global.currentUser;
    // console.log(getUrl);
    // this.http.get(getUrl).map(res => {
    //   console.log('get success');
    //   console.log(res.json());
    // }); 
    // return;
  }

  ionViewWillEnter() {
    this.render();
  }
  render() {
    console.log("enter render");
    this.getData();
    this.loadFigure();
  }

  apiRequest() : Observable<any> {
    let getUrl = 'http://' + this.localhost + ':3000/users?username=' + global.currentUser;

    return this.http.get(getUrl).map(res => {
      return res.json();
    });
  
  }

  getData() {
    new Observable
    (
      observer => this.apiRequest().subscribe(
        res => {
          observer.next(res);
          observer.complete();
        }
      )
    ).subscribe
      (
        res => {
          this.formatUser(res);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  formatUser(res) {
    console.log('enter form user');
    // console.log(res);
    this.user.name = res.username;
    this.user.image = res.profile_image;
    this.user.calories = res.calories;
    this.records = res.calories;
    // this.formNumberArray(res.calories);
    this.user.points = res.points;
    this.user.records = this.formatFoodArray(res.favorates);
    console.log(this.user);
    return res;
  }
  formNumberArray(data) {
    for (var i in data) {
      this.records.push(Number(data[i]));
    }
    console.log('record 111')
    console.log(this.records);
  }
  formatFoodArray(res) {
    console.log('---here is resuslt');
    console.log(res);
    for (var i in res) {

      var foodId = res[i].image;
      //console.log(res[i].image);
      res[i]['image'] = 'http://' + this.localhost + ':3000/image?id=' + foodId;

      // res[i]['reviewCount'] = res[1].; 
      res[i]['foodId'] = res[i]._id;
      console.log(res[i]);

    }
    return res;
  }
  showDetails(food) {
    console.log("before pushing");
    console.log(food);
    var param = {sLati:global.latitude,
                sLong:global.longitude,
                dLati:food.coordinates[1],
                dLong:food.coordinates[0],
                foodObj:food}
    this.navCtrl.push(Details, param);
  }

  // ionViewDidLoad() {
    loadFigure() {  
    console.log('view did load');
    console.log(this.records);
    const ec = echarts as any;
    const container = document.getElementById('chart');
    const chart = ec.init(container);
    let option = {
      title: {
          text: 'calorie week chart'
      },
      tooltip: {},
      // legend: {
      //     data:['calorie']
      // },
      xAxis: {
          data: ["Mon","Tue","Wed","Thu","Fir","Sat","Sun"]
      },
      yAxis: {},
      series: [{
          name: 'calorie',
          type: 'bar',
          data: this.records,
      }]
  };
    chart.setOption(option);
  }

}

