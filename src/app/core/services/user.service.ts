import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = AppConstants.API_URL + '/users';

  constructor(private http: HttpClient) { }

  getUsers(querParams): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl, {
      params: querParams
    });
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + id);
  }
}
