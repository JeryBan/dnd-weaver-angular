import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../shared/services/login.service";
import {UserRegister} from "../../shared/interfaces/user";
import {take} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router: Router = inject(Router)
  loginService: LoginService = inject(LoginService);
  activeUser = this.loginService.activeUser;


  register(username: string) {
    const body = {username: username, password: '123', is_dm: true};

    this.loginService.createUser(body).pipe(take(1)).subscribe({
      next: data => {
        this.activeUser.set(data);
        this.login(body);
      },
      error: error => {
        // if user already exists, log in
        if (error.status === 400) {
          this.login(body)
        } else {
          console.log('Error during register authentication', error)
        }
      }
    })
  }

  private login(user: UserRegister) {
    const body = {username: user.username, password: user.password};
    this.loginService.loginUser(body).pipe(take(1)).subscribe({
      next: data => {
        localStorage.setItem('access_token', data.token)
        if (!this.activeUser()) {
          this.activeUser.set(user);
        }
        this.router.navigate(['my-campaigns']);
      },
      error: error => {
        console.log('Error during login authentication', error)
      }
    })
  }

}
