import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

    signUpForm: FormGroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      rePassword: new FormControl(''),
      username: new FormControl('')
    });
    

  constructor(private location: Location, private authService: AuthService) {

  }

  onSubmit() {
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
      console.log(cred);
    }).catch(error => {
      console.error(error);
    });
  }

  back() {
    this.location.back();
  }
}
