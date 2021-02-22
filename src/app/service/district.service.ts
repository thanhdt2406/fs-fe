import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {District} from "../model/district";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private http: HttpClient) { }

  getAllDistrict(): Observable<District[]>{
    return this.http.get<District[]>(`${API_URL}/districts`);
  }

  getAllDistrictByProvinceId(id: number): Observable<District[]>{
    return this.http.get<District[]>(`${API_URL}/districts/provinces/${id}`);
  }
}
