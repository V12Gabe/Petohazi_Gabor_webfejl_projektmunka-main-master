import { Component } from '@angular/core';
import { Form, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: FormControl= new FormControl('');
  password: FormControl = new FormControl('');

  constructor(private router: Router, private authService: AuthService) { }

  async login() {
    this.authService.login(this.email.value, this.password.value).then(cred =>{
      console.log(cred);
      this.router.navigateByUrl('/main');
    }).catch(error =>{
      console.error(error);
    });
    
  }


}
