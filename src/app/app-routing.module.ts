import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routs } from '@core/models';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./products-list/products-list.module').then(
        (m) => m.ProductsListModule
      ),
  },
  {
    path: Routs.PRODUCT,
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
