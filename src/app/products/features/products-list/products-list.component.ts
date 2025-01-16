import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styles: ``,
  providers: [ProductsStateService, ProductsService],
})
export default class ProductsListComponent {
  productsState = inject(ProductsStateService);
  cartState = inject(CartStateService).state;


  changePage(){
    const page = this.productsState.state.page() + 1;
    this.productsState.changePage$.next(page);
  }

  addToCart(product: Product){
    this.cartState.addProduct(productId);
  }
}
