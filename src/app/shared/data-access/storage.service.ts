import { Injectable } from "@angular/core";
import { ProductItemCart } from '../interfaces/product.interface';
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    loadProducts():Observable<ProductItemCart> {
        const rawProducts = localStorage.getItem('products');
        return of(rawProducts ? JSON.parse(rawProducts) : []);
    }
    
    seveProducts(products:ProductItemCart[]): void {       
        localStorage.setItem('products', JSON.stringify(products));
    }
}