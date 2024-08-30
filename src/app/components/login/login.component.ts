import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../shared/services/login.service";
import {take} from "rxjs";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserLogin} from "../../shared/interfaces/user";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  router: Router = inject(Router)
  loginService: LoginService = inject(LoginService);
  formBuilder: FormBuilder = inject(FormBuilder);

  activeUser = this.loginService.activeUser;
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['123'],
    })
  }

  login() {
    const userLogin = this.loginForm?.value as UserLogin;
    this.loginService.loginUser(userLogin).pipe(take(1)).subscribe({
      next: data => {
        localStorage.setItem('access_token', data.token)
        if (!this.activeUser()) {
            let username = this.loginForm!.get('username')!.value;
            this.activeUser.set({username: username, is_dm: true})
        }
        this.router.navigate(['my-campaigns']);
      },
      error: error => {
        console.log('Error during login authentication', error)
      },
    })
  }
}
