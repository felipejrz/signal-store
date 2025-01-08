import { ProductsService } from './products.service';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';

interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductsSateService {
  private productsService = inject(ProductsService);

  private initialState: State = {
    products: [],
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.productsService
      .getProducts()
      .pipe( map((products) => ({ products, status: 'success' as const }))
      ),
    ],
  });
}
