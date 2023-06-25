import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product, ProductForm } from '@core/models';
import { Router } from '@angular/router';
import { ProductService } from './services/product.service';
import { ProductApiService } from './services/product-api.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProductService, ProductApiService],
})
export class ProductComponent implements OnInit {
  readonly product$ = this.productService.getProduct().pipe(
    tap((resource) => {
      if (resource.data) {
        this.fillForm(resource.data);
      }
    })
  );

  readonly form = this.fb.group<Partial<ProductForm>>({
    title: '',
    description: '',
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly productService: ProductService
  ) {}

  ngOnInit(): void {}

  onCancel() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.productService.submit(this.form.value);
  }

  private fillForm(product: Product) {
    this.form.controls.title?.setValue(product.title, { emitEvent: false });
    this.form.controls.description?.setValue(product.description, {
      emitEvent: false,
    });
  }
}
