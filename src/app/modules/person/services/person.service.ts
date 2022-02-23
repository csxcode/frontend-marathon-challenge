import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable( {
    providedIn: 'root'
} )
export class PersonService  {
  private url = `${environment.apiUrl}/persons`;

  constructor(private http: HttpClient) {
  }

  search(params: any): Promise<any>{
    return firstValueFrom(this.http.get(this.url, { params }));
  }

  create(data: any) {
    return firstValueFrom(this.http.post(this.url, data));
  }
}
