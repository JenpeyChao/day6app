import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiUrl = "http://localhost:3000/users"

  constructor(private http:HttpClient) { }

  getUsers(): Observable<users>{
    return this.http.get<users>(this.apiUrl);
  }

  addUsers(user: users): Observable<users>{
    return this.http.post<users>(this.apiUrl,user);
  }

  deleteUsers(name:string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${name}`)
  }
}
