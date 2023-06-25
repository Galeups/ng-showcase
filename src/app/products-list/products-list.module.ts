import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { RouterOutlet } from '@angular/router';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListService } from './services/product-list.service';
import { ProductsListApiService } from './services/products-list-api.service';

@NgModule({
  declarations: [ProductsListComponent, ProductItemComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    ProductsListRoutingModule,
    NgOptimizedImage,
  ],
  providers: [ProductListService, ProductsListApiService],
})
export class ProductsListModule {}
