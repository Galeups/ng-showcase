import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product, ProductForm } from '../core/models';
import { Router } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  @Input() set product(product: Product) {
    this.form.setValue(product);
  }

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
}
