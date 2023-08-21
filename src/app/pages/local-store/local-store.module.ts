import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalStorePageRoutingModule } from './local-store-routing.module';

import { LocalStorePage } from './local-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalStorePageRoutingModule
  ],
  declarations: [LocalStorePage]
})
export class LocalStorePageModule {}
