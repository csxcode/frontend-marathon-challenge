import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { firstValueFrom } from 'rxjs';
import { StorageUtils } from '../../../shared/utils/storage';
import { Authentication, User } from '../interfaces/auth.interface';
import { User as UserModel } from '../models/user.model';

@Injectable( {
    providedIn: 'root'
} )
export class AuthService extends StorageUtils {

  private url = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {
    super();
  }

  login(params: any): Promise<any> {
    return firstValueFrom(this.http.post(`${this.url}/login`, params));
  }

  store(auth: Authentication, user: User) {
    let data = {... auth, ...user};
    this.setLocalStorage('xuser', btoa(JSON.stringify(data)));
  }

  getUserData(): UserModel | null {
    let data = this.getLocalStorage('xuser');
    return data != ''
        ?  new UserModel(JSON.parse(atob(data)))
        : null;
  }

  isLogged() {
    return !!this.getUserData();
  }

  logout() {
    this.removeLocalStorage('xuser');
    location.reload();
  }
}
