import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService} from '../../app/utility/service/myhttp.service'
import { DetailPage} from '../detail/detail'
import { LogService } from '../../app/utility/service/log.service'
//被跳转的页
import { MyListPage} from '../my-list/my-list'


/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
   carouselItems:Array<any>=[];
   //1定义一个新品上架变量
   newArrivalItems:Array<any> = [];
   topSaleItems:Array<any> = [];
   detailPage:any;
   //初始化myinput
   myInput:string="";

  constructor(
    public myLog : LogService,
    public myHttp: MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
    this.detailPage = DetailPage;
}

  ionViewDidLoad() {
   this.myLog.showLog('ionViewDidLoad IndexPage');
    //调用方法
    this.initData();
  }
  //清空搜索框的值
  ionViewWillEnter(){
    this.myInput = "";
  }
  //初始化视图需要用到的数据
  initData(){
    this.myHttp
    .sendRequest("http://localhost/framework/Web/App/template/code/data/index/index.php")
    .subscribe((result:any)=>{

      this.myLog.showLog('请求到的数据为:'+result);
      this.carouselItems = result.carouselItems;
    
      //2赋值
      this.newArrivalItems = result.newArrivalItems;
      this.topSaleItems = result.topSaleItems;
    })

  }
  //跳转到my-list并发送myInput
  jumpToMyliat(){
    //1.1跳转到my-list 1.2 再当前页引入被跳转的页
    //第一个参数是被跳转的页  第二个参数是被传的参数
    this.navCtrl.push( MyListPage,{kw:this.myInput});

  }

}
