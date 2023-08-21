import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalStorePage } from './local-store.page';

const routes: Routes = [
  {
    path: '',
    component: LocalStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalStorePageRoutingModule {}
