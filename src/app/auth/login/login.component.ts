import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder, private router:Router) {}

  loginForm = this.formBuilder.group({
    email : ['carlosferrermartinez11@gmail.com',[Validators.required,Validators.email]],
    password : ['',Validators.required]
  })

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login () {
    if (this.loginForm.valid) {
      console.log('Llamar al login');
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    }else {
      this.loginForm.markAllAsTouched();
      alert('Ingrese los datos correctamente')
    }
  }

}
