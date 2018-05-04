import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Response} from '@angular/http';
import {global} from '../global';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from "@angular/core";
import { Details } from '../details/details';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  localhost = "128.237.169.188";
  base64Image: any;
  fileTransfer: FileTransferObject = this.transfer.create();
  // user:any;
  user = {image:"", name:"di wang", calories:"100", points:"10", records:[{image: ""}]}
  // records = new Array(2);

  constructor(public navCtrl: NavController, public http: Http, private changeDetectorRef: ChangeDetectorRef,private camera: Camera,private transfer: FileTransfer) {
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
          console.log(this.user);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  formatUser(res) {
    console.log('enter form user');
    // console.log(res);
    this.user.name = res.username;
    this.user.image = res.profile_image;
    //if (!this.user.image) {
      this.user.image = 'http://' + this.localhost + ':3000/userImage?id=' + this.user.name;
    //}
    this.user.calories = res.calories;
    this.user.points = res.points;
    this.user.records = this.formatFoodArray(res.favorates);
    //console.log(this.user);
    return res;
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
    
    this.navCtrl.push(Details, food);
  }


  openGallery() {
    console.log("enter openGallery");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.base64Image = 'data:image/jpeg;base64,' + imageData;
    console.log(this.base64Image);
    this.uploadImage(this.user.name);
    }, (err) => {
    // Handle error
    });
  }

  uploadImage(username) {   
    /*let options = {
      quality: 100
    };*/
    let options1: FileUploadOptions = {
      fileKey: 'file',
      fileName: username,
      headers: {}
    }
    this.fileTransfer.upload(this.base64Image, 'http://' + this.localhost + ':3000/userImage', options1)
      .then((data) => {
        // success
        alert("upload image success");
        this.user.image = 'http://' + this.localhost + ':3000/userImage?id=' + this.user.name;
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        // error
        alert("upload image error"+JSON.stringify(err));
      });
  }
}

