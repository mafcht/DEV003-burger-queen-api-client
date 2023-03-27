import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',// detalle de una persona 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  get email() {
    return this.formUser.get('email') as FormControl;
  }

  formUser = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
  })
  
  faSpinner = faSpinner;

  constructor(private router: Router) {

  }

  isFormLoading = false

  async onSubmitForm() {
    this.isFormLoading = true
    const { value } = this.formUser
    console.log(value)
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.router.navigate(['home']))
        }, 3000)
      })
    } catch (error) {
      console.log(error)
    } finally {
      this.isFormLoading = false
    }
  }
}
