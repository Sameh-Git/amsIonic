import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/Inbox',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
     canActivate: [AuthguardService] 
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
     canActivate: [AuthguardService] 
  },
  {
    path: 'provider',
    loadChildren: () => import('./provider/provider.module').then( m => m.ProviderPageModule),
    canActivate: [AuthguardService] 
  },
  {
    path: 'add-provider',
    loadChildren: () => import('./add-provider/add-provider.module').then( m => m.AddProviderPageModule),
    canActivate: [AuthguardService] 
  },
  {
    path: 'update-provider/:id',
    loadChildren: () => import('./update-provider/update-provider.module').then( m => m.UpdateProviderPageModule),
    canActivate: [AuthguardService] 
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule),
    canActivate: [AuthguardService] 
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then( m => m.ArticlePageModule),
    canActivate: [AuthguardService] 
  },
  {
    path: 'add-article',
    loadChildren: () => import('./add-article/add-article.module').then( m => m.AddArticlePageModule),
    canActivate: [AuthguardService] 
  },
  {
    path: 'update-article/:id',
    loadChildren: () => import('./update-article/update-article.module').then( m => m.UpdateArticlePageModule)
    , canActivate: [AuthguardService] 
 
 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
