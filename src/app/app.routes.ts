import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/goods-list-form/goods-list-form.component').then(
        (component) => component.GoodsListFormComponent
      ),
  },
  {
    path: 'summary',
    loadComponent: () =>
      import('./pages/summary/summary.component').then(
        (component) => component.SummaryComponent
      ),
  },
];
