import { Component } from '@angular/core';
import { Product } from './shared/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public navActivatedHome = 'active'
  public navActivatedShop = '' 
  public navActivatedBlog = '' 
  public navActivatedContact = '' 

  public switchComponent = 'Home';

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

  constructor(){}

  navActive(data: any){
    this.switchComponent = data
    if (data == 'Home') {
      this.navActivatedHome = 'active'
      this.navActivatedShop = ''
      this.navActivatedBlog = ''
      this.navActivatedContact = ''
    } else if (data == 'Shop') {
      this.navActivatedHome = ''
      this.navActivatedShop = 'active'
      this.navActivatedBlog = ''
      this.navActivatedContact = ''
    } else if (data == 'Blog') {
      this.navActivatedHome = ''
      this.navActivatedShop = ''
      this.navActivatedBlog = 'active'
      this.navActivatedContact = ''
    } else {
      this.navActivatedHome = ''
      this.navActivatedShop = ''
      this.navActivatedBlog = ''
      this.navActivatedContact = 'active'
    }
  }
}
