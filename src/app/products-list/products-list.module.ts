import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { RouterOutlet } from '@angular/router';
import { ProductsListRoutingModule } from './products-list-routing.module';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, RouterOutlet, ProductsListRoutingModule],
})
export class ProductsListModule {}
