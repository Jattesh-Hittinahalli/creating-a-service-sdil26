import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { LoggingService } from "./logging.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}
  getData() {
    let url = " https://reqres.in/api/users?page=2";
    return this.http.get(url);
  }
}
