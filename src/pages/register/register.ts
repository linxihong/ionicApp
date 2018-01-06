import { Component } from '@angular/core';
//使用第一步导入组件
import { AlertController,ToastController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage }  from '../login/login'
//①要发送数据请求都要引入这个模块和日志
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import { LogService } from '../../app/utility/service/log.service'

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',

})
export class RegisterPage {
  pageLogin:any;
  upwd:string='';
  uname:string='';
  repwd:string='';

  constructor(
    //2声明组件
    public alertCtrl:AlertController,
    public myToastCtrl:ToastController,
    public myLog:LogService,
    public myhttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
    this.pageLogin = LoginPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  //跳转到登录页
  jumpToLogin(){
    this.navCtrl.push(LoginPage);
  }
  //获取数据
  btnReg(){
         this.myhttp
    .sendRequest('http://localhost/framework/Web/App/template/code/data/user/reg.php?uname='
    +this.uname+'&upwd='+this.upwd)
    .subscribe((result:any)=>{
        let showMsg = "";
//使用alert组件验证 
     if(result.code==200){
         showMsg= "注册成功"
         this.navCtrl.pop();
      }else if(result.code==500){
        showMsg = "注册失败"
      }else if(result.code==401 || result.code==402){
         showMsg = "您输入的格式不正确"
      }else if(this.upwd!= this.repwd){
       showMsg = "密码不一致"
      }
      let myToast = this.myToastCtrl.create({
        //显示的位置
        position:'bottom',
        message:showMsg,//??????
        duration:1500
      })
      myToast.present();

      
      
     

    })
  }

}
