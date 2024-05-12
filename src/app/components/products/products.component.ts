import { Component, OnInit } from '@angular/core';
import { ProductsDeliveryService } from '../../services/products-delivery.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import {
  CommonModule,
  CurrencyPipe, NgFor, NgIf
} from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe, NgIf, CarouselModule, NgFor,CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  product!:Product
  constructor(private _ProductsDeliveryService: ProductsDeliveryService,private _ActivatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((param) => {console.log(param.get('id'));

      this._ProductsDeliveryService.getProductData(param.get('id')).subscribe((response) => { this.product = response.data;;
      })
    })


  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 10
      }
    },
    nav: true
  }
}

