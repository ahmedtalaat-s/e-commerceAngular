import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

export const authgardGuard: CanActivateFn = (route:  ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree  => {

  if (localStorage.getItem('token') === null) {
    inject(Router).navigate(['/signin'])
    return false
  } else {
    return true
  }
};
