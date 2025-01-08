import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/features/products-shell/products.route'),
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
