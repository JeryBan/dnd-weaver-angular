import {CanActivateFn, Router} from '@angular/router';
import {LoginService} from "../services/login.service";
import {inject} from "@angular/core";

export const authenticationGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.activeUser()) {
    return true;
  }

  return router.navigate(['my-campaigns']);
};
