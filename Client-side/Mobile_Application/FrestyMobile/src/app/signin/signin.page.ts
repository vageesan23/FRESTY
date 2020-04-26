import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../authentication/auth.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  userDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.userDetailsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],     //user email is required 
      password: ['', [Validators.required, Validators.minLength(6)]]   //password is required with a minimum length of 6 characters
    });
  }

  onSubmit(){
    this.authService.signIn(this.userDetailsForm.value).subscribe(); 
  }

}
