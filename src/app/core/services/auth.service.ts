import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /**
   * @param <token>
   * @description Store user token in local storage for authenticate logged in user
   */
  setTokenInLocalStorage(token: string): void {
    localStorage.setItem(AppConstants.AUTH_TOKEN_KEY, JSON.stringify(token));
  }

  /**
   * @returns token
   */
  getToken() {
    const token = JSON.parse(localStorage.getItem(AppConstants.AUTH_TOKEN_KEY));
    return token ? token : null;
  }

  login(data): Observable<any> {
    return this.http.post(AppConstants.API_URL + '/auth', data);
  }

  logout(): Observable<any> {
    return new Observable((observer) => {
      localStorage.removeItem(AppConstants.AUTH_TOKEN_KEY);
      observer.next(true);
    })
  }
}