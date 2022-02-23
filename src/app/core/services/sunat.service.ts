import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable( {
    providedIn: 'root'
} )
export class SunatService  {
  private url = `${environment.apiUrl}/sunat`;

  constructor(private http: HttpClient) {
  }

  findRuc(rucNumber: string): Promise<any>{
    return firstValueFrom(this.http.get(`${this.url}/ruc/${rucNumber}`));
  }
}
