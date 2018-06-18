import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Extra2Page} from "../extra2/extra2";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ExtraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html',
})
export class ExtraPage {

  public points: number;
  public pointsToAdd: number = 5;
  public nav: NavController;

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

    storage.get('points').then((val) => {
      this.points = val;
    });

    this.points = 0;
    this.nav = navCtrl;
  }

  addOnePoint(){
    this.points++;
    this.storage.set('points', this.points);
  }

  minusOnePoint(){
    if (this.points > 0){

      this.points--;
    }
  }

  addPoints(){
    this.points += this.pointsToAdd;
  }

  goToExtra2(){
    this.nav.push(Extra2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtraPage');
  }


}
