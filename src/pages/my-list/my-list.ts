import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//1.1引入网络请求服务
import { MyHttpService} from '../../app/utility/service/myhttp.service';
import { DetailPage } from '../detail/detail'
/**
 * Generated class for the MyListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-list',
  templateUrl: 'my-list.html',
})
export class MyListPage {
  //定义一个变量接收数据
  myKw:string = '';
  //定义初始化页数为第一页1
  nowPage:number = 1;
  myList:Array<any>=[];
  totalPages:number =1;
  constructor(
    //1.2在构造函数实例化
    public myHttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }
//当页面加载的时候触发
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyListPage');
    //接收传过来的参数
    //console.log(this.navParams.get('kw'));
    //保存index传递来的搜索框的
     this.myKw = this.navParams.get('kw');
    this.loadData();
  }

  //加载数据(方法)
  //向服务端list.php数据
  loadData(){
    //发送数据请求
    this.myHttp
    .sendRequest('http://localhost/framework/Web/App/template/code/data/index/list.php?kw='+this.myKw+"&pno="+this.nowPage)
    .subscribe((result:any)=>{
      //console.log(result);
      this.myList = result.data;
      this.totalPages = result.pageCount;
    });

  }

  //加载更多
  loadMore(infinite){
    this.nowPage++;
    //infinite.complete();
    //判断当前是否是最后一页
    //访问的页码不得超过最后一次
    if(this.nowPage>this.totalPages){
      //结束刷新动作
      infinite.complete();

      return;
    }
    this.myHttp
    .sendRequest('http://localhost/framework/Web/App/template/code/data/index/list.php?kw='+this.myKw+"&pno="+this.nowPage)
    .subscribe((result:any)=>{
      //console.log(result);
      this.myList = this.myList.concat(result.data);
      //结束刷新动作
      infinite.complete();
    });

  }
  //跳转到详情页 点击传参 
  jumpToDetail(index){
    this.navCtrl.push(DetailPage,{id:this.myList[index].lid});
  }


}
