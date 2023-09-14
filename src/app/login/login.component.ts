import { Component } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formData = {
    username: '',
    password: '',
    email: '',
  };
  // LoginComponent: FormData;

  // ngOnInit(): void {
  //   this.LoginComponent = new FormData({
  //     nome: new FormsModule('Elisa', Validators.required),
  //     email: new FormsModule(null, [Validators.required, Validators.email]),
  //     password: new FormsModule(),
  //   });
  // }

  onSubmit() {
    console.log('Dati inseriti nel form:', this.formData);
  }
}
