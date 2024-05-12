import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgIf,RouterLinkActive, RouterLink],

  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  islogin: boolean = false;
  constructor(private _LoginService:LoginService ,private router:Router) {}

  ngOnInit(): void {

    if (localStorage.getItem('token') !== null) {
      this._LoginService.token.next(JSON.stringify(localStorage.getItem('token')))
    }
    this._LoginService.token.subscribe({
      next:() => {
        if (this._LoginService.token.value === 'null') {
          this.islogin = false;
          console.log(this._LoginService.token.getValue(),this._LoginService.gettoken(),this.islogin)

        } else {
          this.islogin = true;
          console.log(this.islogin);
        }
      }
    })


  }

  logOut() {
    localStorage.removeItem('token');
    this._LoginService.token.next('null')
    this.router.navigate(['/signin'])
    console.log(this._LoginService.token.value);

  }

}
