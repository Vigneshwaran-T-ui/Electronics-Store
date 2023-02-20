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
