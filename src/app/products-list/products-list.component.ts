import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductListService } from './services/product-list.service';
import { Router } from '@angular/router';
import { Routs } from '@core/models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  readonly products$ = this.productListService.getProducts();

  constructor(
    private readonly productListService: ProductListService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  openProduct(productId: number) {
    this.router.navigate([`${Routs.PRODUCT}/${productId}`]);
  }
}
