import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users} from '../models/users';


const API_URL = 'http://192.168.2.138';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  books: Users[] = [];
  constructor(
    public http: HttpClient
  ) { }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${API_URL}/users`);
  }

  getUsersById(id: number): Observable<Users> {
    return this.http.get<Users>(`${API_URL}/user/${id}`);
  }

  add(user: Users): Observable<Users> {
  return this.http.post<Users>(`${API_URL}/user/create`, {
    id: user.id,
    username: user.username,
    });
    }

    update(user: Users): Observable<Users> {
        return this.http.put<Users>(`${API_URL}/user/${user.id}`, {
        id: user.id,
        username: user.username,
        });
    }

    delete(id: number): Observable<Users> {
        return this.http.delete<Users>(`${API_URL}/user/${id}`);
    }
}
