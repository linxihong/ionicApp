import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserCenterPage } from './user-center';

@NgModule({
  declarations: [
    UserCenterPage,
  ],
  imports: [
    IonicPageModule.forChild(UserCenterPage),
  ],
  exports: [
    UserCenterPage
  ]
})
export class UserCenterPageModule {}
