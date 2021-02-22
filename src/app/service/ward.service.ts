import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ward} from "../model/ward";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class WardService {

  constructor(private http: HttpClient) { }

  getAllWard(): Observable<Ward[]>{
    return this.http.get<Ward[]>(`${API_URL}/wards`);
  }

  getAllWardByDistrictId(id: number): Observable<Ward[]>{
    return this.http.get<Ward[]>(`${API_URL}/wards/districts/${id}`);
  }
}
