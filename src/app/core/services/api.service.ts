import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class ApiService {
    constructor(private http: HttpClient) {}
    get<T>(path: string): Observable<T>{
        return this.http.get<T>(path);
    }

    post<T, K>(path: string, data: K): Observable<T>{
        return this.http.post<T>(path, data);
    }
}