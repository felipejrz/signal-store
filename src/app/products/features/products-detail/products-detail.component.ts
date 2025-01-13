import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product.datail.state.service';

@Component({
  selector: 'app-products-detail',
  imports: [],
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
