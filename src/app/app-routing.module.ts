import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () =>
      import('./component/catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./component/product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: '**', redirectTo: 'catalog' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
