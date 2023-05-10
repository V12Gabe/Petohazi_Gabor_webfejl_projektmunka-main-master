import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'four0four',
    loadChildren: () => import('./pages/four0four/four0four.module').then(m => m.Four0fourModule)
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'registration', loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule) },
  {
    path: '**',
    redirectTo: '/four0four'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
