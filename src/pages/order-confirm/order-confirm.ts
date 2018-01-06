import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from 
'../../app/utility/service/myhttp.service'
import {PayPage} from '../pay/pay';

/**
 * Generated class for the OrderConfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
  cartList:Array<any> = [];
  constructor(
    public myModalCtrl:ModalController,
    public myHttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
    //初始化购物车的列表数据
    this.initData();
  }

  //第一获取数据向服务器端发起请求
  initData(){
     this.myHttp
     .sendRequest('http://localhost/framework/Web/App/template/code/data/cart/list.php')
     .subscribe((result:any)=>{
       this.cartList =  result.data;
     })
  }

  //显示一个模态窗口的
  showPayModal(){
    //创建模态窗
    //将订单确认页面中的总价格 发送到模态窗口paypage
  let myModal= this.myModalCtrl.create(PayPage,{price:1000});
  //present（）呈现出来
  myModal.present();

  //指定当关闭模态窗时，要执行的方法
  //监听模态窗什么时候关闭
myModal.onDidDismiss((data)=>{
  //返回 
  //是否能返回
  if(data.result){
  if(this.navCtrl.canGoBack()){
       this.navCtrl.pop();
  }
  //跳转到首页
  this.navCtrl.parent.select(0);
   }
})

}
}