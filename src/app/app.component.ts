import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ErrComponent } from './components/err/err.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { ProductsDeliveryService } from './services/products-delivery.service';



@Component({
  selector: 'app-root',
  standalone: true,
  providers:[LoginService,ProductsDeliveryService],
  imports: [CommonModule,HttpClientModule, RouterOutlet, NavComponent, FooterComponent, HomeComponent, CartComponent, ProductsComponent, BrandsComponent, CategoriesComponent, ErrComponent, SignupComponent, SigninComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerceApp';
}
