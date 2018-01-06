//a-service
import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
     //标识是否开发模式
     isDev:boolean = true;
    constructor() { }

    //在开发模式，才会在终端中输出日志信息
    showLog(msg:string){
        if(this.isDev){
            console.log(msg);
        }
    }
}