import { ManagePartsAuthenticationService } from './../../shared/manage-parts-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cp-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss'],
})
export class AuthenticateComponent implements OnInit {
  password = '';
  constructor(
    private readonly managePartsAuthService: ManagePartsAuthenticationService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  authenticate(): void {
    const result = this.managePartsAuthService.authenticate(this.password);

    if (result) {
      this.router.navigate(['/parts/manage']);
    }
  }

  cancel(): void {
    this.router.navigate(['/parts/buy']);
  }
}
