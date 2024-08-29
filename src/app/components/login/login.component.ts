import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../shared/services/login.service";
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

  login(username: string) {
    const body = {username: username, password: '123'}
    this.loginService.loginUser(body).pipe(take(1)).subscribe({
      next: data => {
        localStorage.setItem('access_token', data.token)
        if (!this.activeUser()) {
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
