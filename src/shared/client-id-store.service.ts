import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientIdStoreService {
  private readonly baseUrl = environment.baseUrl + 'client';
  private readonly clientIdStorageKey = 'CLIENT_ID';

  constructor(private readonly http: HttpClient) {}

  getClientId(): Observable<string> {
    const existingClientId = localStorage.getItem(this.clientIdStorageKey);

    if (existingClientId) {
      return of(existingClientId);
    }

    return this.http.post<{ id: string }>(this.baseUrl, undefined).pipe(
      map((response) => response.id),
      tap((id) => localStorage.setItem(this.clientIdStorageKey, id))
    );
  }
}
