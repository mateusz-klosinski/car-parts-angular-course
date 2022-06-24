import { PartFormData } from './part-form-data.model';
import { Injectable } from '@angular/core';
import { Part } from './part.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PartsService {
  private readonly baseUrl = environment.baseUrl + 'part';

  constructor(private readonly http: HttpClient) {}

  getParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.baseUrl);
  }

  getPart(id: string): Observable<Part> {
    const url = this.baseUrl + `/${id}`;
    return this.http.get<Part>(url);
  }

  addPart(data: PartFormData): Observable<Part> {
    return this.http.post<Part>(this.baseUrl, data);
  }

  updatePart(id: string, data: PartFormData): Observable<Part> {
    const url = this.baseUrl + `/${id}`;
    return this.http.put<Part>(url, data);
  }

  deletePart(id: string): Observable<string> {
    const url = this.baseUrl + `/${id}`;
    return this.http.delete<string>(url);
  }
}
