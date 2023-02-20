import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
import { Product } from '../shared/product.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  // @Input() products!: Product[];
   public products!: Product[];

  constructor(
    private shoppingService: ShoppingService
  ) {}
  
  ngOnInit(): void {
    this.getShoppingProducts();
  }

  getShoppingProducts() {
    this.products = this.shoppingService.getShoppingProducts();
  }

}