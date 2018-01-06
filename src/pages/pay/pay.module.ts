import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayPage } from './pay';

@NgModule({
  declarations: [
    PayPage,
  ],
  imports: [
    IonicPageModule.forChild(PayPage),
  ],
  exports: [
    PayPage
  ]
})
export class PayPageModule {}
