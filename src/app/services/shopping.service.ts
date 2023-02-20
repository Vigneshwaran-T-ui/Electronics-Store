import { Injectable } from '@angular/core';
import { Product } from '../shared/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  public product: Product[] = [
    new Product('Apple iphone 11 Pro', 
                 6, 
                 'Apple iphone 11 Pro 256GB | 6GB RAM',
                 5,
                 'https://images.hindustantimes.com/tech/img/2022/08/20/original/Untitled_design_-_2022-08-20T143510.743_1660986921934.png',
                 1000000,
                 'Mobiles',
                 123),
    new Product('Apple iphone 11 Pro', 
                 6, 
                 'Apple iphone 11 Pro 256GB | 6GB RAM',
                 4.9,
                 'https://images.hindustantimes.com/tech/img/2022/08/20/original/Untitled_design_-_2022-08-20T143510.743_1660986921934.png',
                 1000000,
                 'Mobiles',
                 123),
    new Product('Apple iphone 11 Pro', 
                 6, 
                 'Apple iphone 11 Pro 256GB | 6GB RAM',
                 3.5,
                 'https://images.hindustantimes.com/tech/img/2022/08/20/original/Untitled_design_-_2022-08-20T143510.743_1660986921934.png',
                 1000000,
                 'Mobiles',
                 123),
    new Product('Apple iphone 11 Pro', 
                 6, 
                 'Apple iphone 11 Pro 256GB | 6GB RAM',
                 2.8,
                 'https://images.hindustantimes.com/tech/img/2022/08/20/original/Untitled_design_-_2022-08-20T143510.743_1660986921934.png',
                 1000000,
                 'Mobiles',
                 123)
  ]

  constructor() { }

  getShoppingProducts() {
    return this.product;
  }
}