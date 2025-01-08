import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { ProductsStateService } from '../../data-access/products-state.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styles: ``,
  providers: [ProductsStateService, ProductsService],
})
export default class ProductsListComponent {
  productsState = inject(ProductsStateService)
}
