import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
//①要发送数据请求都要引入这个模块和日志
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import { LogService } from '../../app/utility/service/log.service'
//①引入注册页
import { RegisterPage } from '../register/register'
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //定义变量 接收html ngModel 数据绑定 
  uname:string="";
  upwd:string = "";
  pageReg:any;
 
  
  constructor(
    //②构造函数示例化
    public myToastCtrl:ToastController,
    public myLog:LogService,
    public myhttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  
       this.pageReg = RegisterPage;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(){
    //将用户所输出的密码和账号 发送给服务器
    this.myhttp
    .sendRequest('http://localhost/framework/Web/App/template/code/data/user/login.php?uname='
    +this.uname+'&upwd='+this.upwd)
    .subscribe((result:any)=>{
      this.myLog.showLog(result);
      let showMsg = "";
      if(result.code ==200){
        //登录成功
        showMsg = "登录成功";
          //当用户登录之后，返回上一页
        this.navCtrl.pop();
      }else if(result.code==201){
        //用户名或者密码错误
        showMsg="用户名或密码错误";
       
      }else if(result.code == 500){
           //登录失败
        showMsg="登录失败"
      }
      //定义一个变量
      let myToast = this.myToastCtrl.create({
        //显示的位置
        position:'bottom',
        message:showMsg,//??????
        duration:2000
      })
      myToast.present();
    })
    
  }
 //跳转到注册页
  jumpToreg(){
    this.navCtrl.push(RegisterPage);
  }

}
