import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotFoundPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {
  //定义一个用来计数的数字
  count:number = 3;
  //定义一个变量接收定时器的返回值
  timer:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotFoundPage');
    //启动一个定时器，每隔1s 修改计数的数字
    setInterval(()=>{
      this.count --;
      if(this.count == 0){
        //返回上一页
        this.navCtrl.pop();
        clearInterval(this.timer);
        //
        this.timer = null;
      }
    },1000)
  }
  //生命周期
  ionViewWillLeave(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
