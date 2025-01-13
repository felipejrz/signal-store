import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product.datail.state.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products-detail',
  imports: [CurrencyPipe],
  templateUrl: './products-detail.component.html',
  styles: ``,
  providers: [ProductDetailStateService],
})
export default class ProductsDetailComponent {
  id = input.required<string>();

  productDetailState = inject(ProductDetailStateService).state;

  constructor() {
    effect(() => {
      console.log(this.id());
      this.productDetailState.getById(this.id())
    });
  }
}
