import { Component } from '@angular/core';
//引入显示的ToastController控制器
import { ToastController,IonicPage, NavController, NavParams } 
from 'ionic-angular';
//引入网络请求
import { MyHttpService} from 
'../../app/utility/service/myhttp.service'

/**
 * Generated class for the UserCenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {

  constructor(
    //实例化
    public myToastCtrl:ToastController,
    //定义网络请求
    public myHttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCenterPage');
  }

  //退出登录
  doLogout(){
    //请求Logout.php
    this.myHttp
    .sendRequest('http://localhost/framework/Web/App/template/code/data/user/logout.php')
    .subscribe((result:any)=>{
      let showMsg = "";
      if(result.code == 200){
        //退出成功，跳转到第0个tab（去首页）    
        this.navCtrl.parent.select(0);
        showMsg = "退出成功，将跳转到首页";
      }
      else{
        //退出失败
        showMsg = "退出失败，请重试！";
      }

      this.myToastCtrl.create({
        message:showMsg,
        duration:1500,
        position:'top'
      }).present();

    })
    
  }

}
