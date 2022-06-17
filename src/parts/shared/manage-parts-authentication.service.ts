import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ManagePartsAuthenticationService {
  private readonly secret = 'admin';
  private authCorrect = false;

  authenticate(password: string): boolean {
    if (password === this.secret) {
      this.authCorrect = true;
    }

    return this.authCorrect;
  }

  isAuthenticated(): boolean {
    return this.authCorrect;
  }
}
