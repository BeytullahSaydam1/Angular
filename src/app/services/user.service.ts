import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { user } from 'src/app/models/user';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private base: string = "https://jsonplaceholder.typicode.com/users/"

  constructor(private http: HttpClient,
    private router :Router ) { }

  //observable observer subscriber

  getAllUsers() {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users')
  }
  private url(id: number): string {
    return `${this.base}${id}`
  }
  updateUser(user: user): Observable<any> {
    return this.http.put(this.url(user.id), user, this.httpOptions).pipe()
  }

  getSelectedUser(id: number) {
    return this.http.get<user>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
      tap({
        next: (res) => { return res },
        error: (err) => console.error(err)
      })
    )
  }


  public getAllPosts(id: number){
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  }
}
