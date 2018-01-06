//快捷键 a-serivce-http
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {LoadingController} from 'ionic-angular'

@Injectable()
export class MyHttpService {
    constructor(
        private myLoadCtrl:LoadingController,
        private http: Http) { }
    

    sendRequest(url:string){
        let myLoading=this.myLoadCtrl.create({
            content:'正在通信'
            
        })
        //进入该方法，启动loading
        myLoading.present();
        //a-http-get
        return this.http
        .get(url,{withCredentials:true})
            .map((response: Response) => {
                //关闭加载中的窗口
                myLoading.dismiss();
                return response.json()
            }
            
            );
    }
}