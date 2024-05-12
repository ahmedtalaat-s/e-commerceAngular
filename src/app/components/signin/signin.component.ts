import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Signindata } from '../../interfaces/usersenddata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  errMsg: string='';
  err: boolean=false;

  constructor(private _LoginService:LoginService ,private router:Router){}

  isloading: boolean = false;
  islogin: boolean = false;

  signin = new FormGroup({
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[a-z0-9]{6,10}$/)]),
  })


  sendData(signupData:Signindata):void {
    this.isloading = true;


    this._LoginService.sendData(signupData).subscribe({
      next: response => {
        if (response.message == 'success') {
          this.isloading = false;
          this.router.navigate(['/home'])
          this.err = false;
          localStorage.setItem('token', response.token)
          let x=this._LoginService.gettoken()
          this._LoginService.token.next(JSON.stringify(x))
        }

      },
      error: (response) => {
        console.log(response);

        this.isloading = false;
        this.err = true;
        this.errMsg = response.error.message;
        setTimeout(() => { this.err = false }, 5000)
      }

    });
  }


}
