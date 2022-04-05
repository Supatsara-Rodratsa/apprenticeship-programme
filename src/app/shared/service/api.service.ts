import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor (private http: HttpClient) { }

    public getApiResponse(): Observable<any> {
        return this.http.get(API_URL).pipe(map((res) => res));
    }
}