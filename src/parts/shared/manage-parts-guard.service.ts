import { ConfirmationService } from 'primeng/api';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ManagePartsAuthenticationService } from './manage-parts-authentication.service';

@Injectable({ providedIn: 'root' })
export class ManagePartsGuard implements CanActivate {
  constructor(
    private readonly managePartsAuthService: ManagePartsAuthenticationService,
    private readonly router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.managePartsAuthService.isAuthenticated()) {
      return true;
    }

    return this.router.parseUrl('/parts/authenticate');
  }
}
