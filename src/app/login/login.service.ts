import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(@Inject('LOGIN_URL') private url: string, private http: Http) { }

  doLogin(username: string, password: string, warehouseId) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/login`, { username: username, password: password, warehouseId: warehouseId })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  searchWarehouse(username: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/login/warehouse/search?username=${username}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}
