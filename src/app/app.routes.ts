import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component'),
    children: []
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
