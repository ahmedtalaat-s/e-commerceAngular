import { Component} from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import{JsonPipe}from '@angular/common'
import { RegisterSerService } from '../../services/register-ser.service';
import { Signupdata } from '../../interfaces/usersenddata';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-signup',
  standalone: true,
  providers:[RegisterSerService],
  imports: [ReactiveFormsModule,NgIf,JsonPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  err: boolean = false;
  errMsg: string = '';
  isloading: boolean = false;

  constructor(
    private _RegisterSerService: RegisterSerService,
    private router: Router
  ) { }

  signup = new FormGroup({
  name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[a-z0-9]{6,10}$/)]),
  rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^[a-z0-9]{6,10}$/)]),
  phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })


  sendData(signupData:Signupdata):void {
    this.isloading = true;
    this._RegisterSerService.sendData(signupData).subscribe({
     next:response=> {
        if (response.message == 'success') {
          this.isloading = false;
          window.alert('registration success')
          this.router.navigate(['/signin'])
          this.err = false;
         }

      },
      error: (response) => {
        this.isloading = false;
        this.err = true;
        this.errMsg = response.error.message;
        setTimeout(()=>{this.err = false},5000)
      }

    })
  }
}
