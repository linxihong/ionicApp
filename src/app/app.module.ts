import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage} from '../pages/home/home';
import { IndexPage} from '../pages/index/index';
import { DetailPage} from '../pages/detail/detail';
import { CartPage} from '../pages/cart/cart';
import { LoginPage}  from '../pages/login/login';
import { OrderConfirmPage} from '../pages/order-confirm/order-confirm';
import { PayPage} from '../pages/pay/pay';
import { UserCenterPage} from '../pages/user-center/user-center';
import { NotFoundPage} from '../pages/not-found/not-found';
import { RegisterPage } from '../pages/register/register'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyHttpService } from './utility/service/myhttp.service'
import {LogService} from './utility/service/log.service'
import {MyListPage} from '../pages/my-list/my-list'

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
     HomePage,
     IndexPage,
     DetailPage,
     LoginPage,
     OrderConfirmPage,
     PayPage,
     UserCenterPage,
     NotFoundPage,
     CartPage,
     RegisterPage,
     MyListPage
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
     IndexPage,
     DetailPage,
     LoginPage,
     OrderConfirmPage,
     PayPage,
     UserCenterPage,
     NotFoundPage,
     CartPage,
     RegisterPage,
     MyListPage
  ],
  providers: [
    LogService,
    StatusBar,
    SplashScreen,
    MyHttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
