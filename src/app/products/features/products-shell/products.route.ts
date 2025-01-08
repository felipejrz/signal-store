import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../products-list/products-list.component'),
  },
] as Routes;
