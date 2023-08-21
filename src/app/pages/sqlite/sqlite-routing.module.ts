import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SqlitePage } from './sqlite.page';

const routes: Routes = [
  {
    path: '',
    component: SqlitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SqlitePageRoutingModule {}
