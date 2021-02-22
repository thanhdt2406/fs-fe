import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {UserToken} from "../model/usertoken";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {SignupRequest} from "../model/signup-request";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;

  constructor(private http: HttpClient) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserToken {
    return this.currentUserSubject.value;
  }

  public login(username: string, password: string) {
    return this.http.post<any>(`${API_URL}/auth/login`, {username, password})
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  public logout(): Observable<any>{
    localStorage.removeItem('currentUser');
    // @ts-ignore
    this.currentUserSubject.next(null);
    return this.http.post<any>(`${API_URL}/auth/logout`,{});
  }

  public signup(signupRequest: SignupRequest) {
    return this.http.post<any>(`${API_URL}/auth/signup`,signupRequest);
  }
}
