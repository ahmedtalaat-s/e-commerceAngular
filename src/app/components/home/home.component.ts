import { Component, OnInit } from '@angular/core';
import { ProductsDeliveryService } from '../../services/products-delivery.service';
import { Product } from '../../interfaces/product';
import { JsonPipe,CurrencyPipe, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [JsonPipe,CurrencyPipe,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
constructor(private _ProductsDeliveryService:ProductsDeliveryService,private router:Router){}
ngOnInit(): void {
  if (this.products.length===0) {
    this._ProductsDeliveryService.getProductsData().subscribe((response) => {
    this.products = response.data
  })
  }
}


  redirectproduct(id: string) {
this.router.navigate([`/products/${id}`])
  }
}
