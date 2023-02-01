import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() navActiveEventEmitter = new EventEmitter<any>();

  @Input() navActivatedHome: any
  @Input() navActivatedShop: any 
  @Input() navActivatedBlog: any
  @Input() navActivatedContact: any

  constructor() { }

  ngOnInit(): void {
  }

  navActive(data: any){
    this.navActiveEventEmitter.emit(data);
  }
}
