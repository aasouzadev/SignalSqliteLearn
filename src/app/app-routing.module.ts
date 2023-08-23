import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'local',
    loadChildren: () => import('./pages/local-store/local-store.module').then( m => m.LocalStorePageModule)
  },
  {
    path: 'sqlite',
    loadChildren: () => import('./pages/sqlite/sqlite.module').then( m => m.SqlitePageModule)
  },
  {
    path: 'ionic-storage',
    loadChildren: () => import('./pages/ionic-storage/ionic-storage.module').then( m => m.IonicStoragePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
