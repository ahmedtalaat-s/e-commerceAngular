import { GuardsCheckStart, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ErrComponent } from './components/err/err.component';
import { authgardGuard } from './authgard.guard';
import { sign } from './sign.guard';


export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[authgardGuard],component:HomeComponent},
  {path:'cart',canActivate:[authgardGuard],component:CartComponent},
  {path:'categories',canActivate:[authgardGuard],component:CategoriesComponent},
  {path:'brands',canActivate:[authgardGuard],component:BrandsComponent},
  {path:'products/:id',canActivate:[authgardGuard],component:ProductsComponent},
  {path:'signin',canActivate:[sign],component:SigninComponent},
  {path:'signup',canActivate:[sign],component:SignupComponent},
  {path:'**',component:ErrComponent}
];
