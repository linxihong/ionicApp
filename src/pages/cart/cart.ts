import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//第一步 引入服务
import {MyHttpService} from '../../app/utility/service/myhttp.service'
//要用那个页面就要移入进来
import { LoginPage } from '../login/login'
import { IndexPage} from '../index/index'
import { LogService } from '../../app/utility/service/log.service'
//第十二步 引入订单页
import { OrderConfirmPage} from '../order-confirm/order-confirm'

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  //第四步 定义变量 用户是否登录
  isUserLogin:boolean = false;
  //第八步 定义变量 保存购物车中数组
  cartList:Array<any>=[];
  constructor(
    //第二步 声明
    public myLog : LogService,
    public myhttp : MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    //??????调用方法
    // this.checkUserLogin();
  }
  
  //？？跳转到登录页面 js方法
  jumpToLogin(){
    this.navCtrl.push(LoginPage);
  }
  //跳转到首页
  jumpToIndex(){
     this.navCtrl.push(IndexPage);
    //tab页面可以通过parent属性得到tabs示例
    //tabs示例支持一个select方法，可以通过指定
    //tabs的序号index，告诉要选中的序号
    // this.navCtrl.parent.select(0);
  }
  //生命周期处理函数 每页面中都会执行该方法
  ionViewWillEnter(){
    console.log('cart will enter');
    //调用方法
    this.checkUserLogin();
    //调用方法
    this.getCartInfo()
  }
  //跳转到订单页
  jumpToOrderConfirm(){
   this.navCtrl.push(OrderConfirmPage);
  }

  //第十三步 复选框购物车的产品一共多少钱
   sumAll(){
     let totalPrice = 0;
     for(var i=0;i<this.cartList.length;i++){
       var product = this.cartList[i];

       totalPrice +=(product.count * product.price);
     }
     return totalPrice;
   }

  //获取购物车中的数据
  getCartInfo(){
    this.myhttp
    .sendRequest('http://localhost/framework/Web/App/template/code/data/cart/list.php')
    .subscribe((result:any)=>{
          //保存的变量 保存数据
          if(result.data){
               this.cartList = result.data;
          }
     
          console.log(result.data);
         

          
    })
  }
  

  //检查用户是否登录
  checkUserLogin(){
    this.myhttp.sendRequest('http://localhost/framework/Web/App/template/code/data/user/session_data.php')
    .subscribe((result:any)=>{
       if(result.uid){
         //已登录
         this.isUserLogin=true;
       }else{
         //未登录
         this.isUserLogin=false;
       }
    })
    
  }
  //第十四步 修改购物车中产品的数量
  //参数 inMinus true 就是减 false就是加
  //参数 ： index cartList中要操作第几个列表项
    modifyCartCount(isMinus:boolean,index:number){
  //定义一个变量，保存当前count
  let myCount = this.cartList[index].count;
    if(isMinus){
      myCount--;
      if(myCount<1){
        myCount==1;
        return;
      }
    }
    else{
      myCount++;
    }
    this.cartList[index].count = myCount;
  }
  

}
