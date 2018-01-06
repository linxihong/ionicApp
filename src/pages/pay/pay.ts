import { Component } from '@angular/core';
import {LoadingController,ViewController, IonicPage, 
  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {
  //定义一个价格变量，初始化为0
  totalPrice = 0;
  constructor(
    public myViewCtrl:ViewController,
    public myLoadCtrl:LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
    // 接收参数  通过get方法保存
    this.totalPrice = this.navParams.get('price');
  }

  //关闭模态窗
  closeModal(shouldJump:boolean){
    this.myViewCtrl.dismiss({result:shouldJump});
  }

  showLoading(){

      let myLoading = this.myLoadCtrl.create({
        content:'支付中'
      })
      //显示一个加载中的窗口
      myLoading.present();
      //3s之后 关闭加载窗口，并关闭模态窗本身
      setTimeout(()=>{
        //关闭loading
        myLoading.dismiss();
        //关闭模态窗 ViewController
        // this.myViewCtrl.dismiss();
         this.closeModal(true)
      },3000);

  }

}
