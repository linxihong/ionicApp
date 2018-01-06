import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotFoundPage } from './not-found';

@NgModule({
  declarations: [
    NotFoundPage,
  ],
  imports: [
    IonicPageModule.forChild(NotFoundPage),
  ],
  exports: [
    NotFoundPage
  ]
})
export class NotFoundPageModule {}
