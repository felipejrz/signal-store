import { Component, inject } from '@angular/core';
import { ProductsSateService } from '../../data-access/product.state.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styles: ``,
  providers: [ProductsSateService],
})
export default class ProductsListComponent {
  productsState: inject(ProductsSateService)
}
