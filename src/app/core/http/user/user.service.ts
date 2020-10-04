import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private firebase: FirebaseService
  ) { }

  getLoggedInUserInfo(): Observable<any> {
    return this.http
      .get('/users/2');
  }

  getAllFirebaseUsers(): Observable<any> {
    return this.firebase.getUsers();
  }
}
