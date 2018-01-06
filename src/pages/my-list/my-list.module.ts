import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyListPage } from './my-list';

@NgModule({
  declarations: [
    MyListPage,
  ],
  imports: [
    IonicPageModule.forChild(MyListPage),
  ],
  exports: [
    MyListPage
  ]
})
export class MyListPageModule {}
