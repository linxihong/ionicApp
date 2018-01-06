import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogService } from '../../app/utility/service/log.service'
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import { NotFoundPage} from '../not-found/not-found'
import { CartPage } from '../cart/cart'
import { LoginPage } from '../login/login'
import { IndexPage } from '../index/index'
/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  //定义变量
  detailInfo:any;
  //定义三个变量，可以绑定 实现跳转
  pageNotFound:any;
  pageLogin:any;
  pageCart:any;
  pageIndex:any;
  constructor(
    //示例化
    public myToastCtrl:ToastController,
    public myLog:LogService,
    public myHttp:MyHttpService,
    public navCtrl: NavController,
     public navParams: NavParams) {
       //赋值
       this.pageNotFound=NotFoundPage;
       this.pageLogin=LoginPage;
       this.pageCart = CartPage;
       this.pageIndex = IndexPage;
  }

  ionViewDidLoad() {
    this.myLog.showLog('ionViewDidLoad DetailPage');
    //获取传递过来参数navParams
    let productId = this.navParams.get('id');
    this.myLog.showLog('productId is' +productId);
    this.initDetailInfo(productId);
  }
  
  //初始化详情数据
  //根据产品id 得到详情数据
  initDetailInfo(id:number){
    this.myHttp
    .sendRequest('http://localhost/framework/Web/App/template/code/data/index/details.php?lid='+id)
    .subscribe((result:any)=>{
        this.myLog.showLog(result);
        //保存在本地
        this.detailInfo = result.details;
    })
  
}
//定义一个方法，将当前的商品， 添加到购物车
   addToCart(){
     //发起网络请求
     this.myHttp
     .sendRequest('http://localhost/framework/Web/App/template/code/data/cart/add.php?buyCount=1&lid='+this.detailInfo.lid)
     .subscribe((result:any)=>{//返回服务器的结果
        this.myLog.showLog(result);
        let showMsg="";
        if(result.code == 200){
          //成功
          showMsg = "添加成功";
        }else if(result.code == 300){
          //未登录
          showMsg = "未登录，跳转到登录页面";
          this.navCtrl.push(LoginPage);
        }else if(result.code == 500){
         showMsg = "添加失败";
        }
       let myToast = this.myToastCtrl.create({
          position:"bottom",
          duration:1500,
          message:showMsg
        });
        //接收数据
        myToast.present();
     })
   }

}
