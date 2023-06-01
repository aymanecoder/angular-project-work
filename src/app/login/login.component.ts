import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../_core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  image="assets/logo-footer.png";

  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  })
  ngOnInit(): void {

  }
  constructor(private loginService:LoginService,private router:Router){}

onLoginSubmit() {
  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;
  this.loginService.login(email!,password!).subscribe({
    next: (response) => {
      // console.log(response);
      // localStorage.setItem('token', response.access_token);
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('refresh_token', response.refresh_token);
      const token = response.access_token;
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      if(decodedToken.role === 'admin') {
        this.router.navigate(['/admin']);
      }else{
        if(decodedToken.role == 'manager') {
          this.router.navigate(['/manager']);
        }
      }
    },
    error: (err) => {
      console.log(err);
    }
  });
}

}


