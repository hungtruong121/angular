import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UsersLogin } from '../models/usersLogin';
const API_URL = 'http://192.168.2.138';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UsersLogin>;
    public currentUser: Observable<UsersLogin>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<UsersLogin>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UsersLogin {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${API_URL}/login`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                console.log(user)
                if (user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log('test');
                    this.currentUserSubject.next(user);
                } else {
                  throw new Error('Vui Long Thu Lai');
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}