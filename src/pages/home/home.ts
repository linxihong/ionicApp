import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndexPage} from '../index/index';
import { DetailPage } from '../detail/detail';
import { CartPage } from '../cart/cart';
import { UserCenterPage } from '../user-center/user-center';
import {NotFoundPage} from '../not-found/not-found';
import { RegisterPage } from '../register/register'
import { OrderConfirmPage} from '../order-confirm/order-confirm'
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  tabIndex:any;
  tabCart:any;
  tabUserCenter:any;
  tabSettings:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.tabIndex =  IndexPage;
     this.tabCart = CartPage;
     this.tabUserCenter = UserCenterPage;
     this.tabSettings = OrderConfirmPage; 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
