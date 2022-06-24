import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class MenuBadgeService {
  abstract getBadgeFor(label: string): Observable<string | null>;
}
