import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../servizi/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  homeform: FormGroup | undefined;

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log(this.homeform);

    this.firebase
      .insertPersona(
        'https://e-booklis-9e8e7-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
        { nome: 'Elisa', email: 'elisagelmetti@yahoo.it' }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
