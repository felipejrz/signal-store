import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styles: ``,
  providers: [ProductsService],
})
export default class ProductsListComponent {
  private productsService = inject(ProductsService);

  constructor() {
    this.productsService.getProducts().subscribe((products) => {
      console.log(products);
    });
  }
}
