import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

const API_URL= 'https://jsonplaceholder.typicode.com/'
const USERS_ENDPOINT = 'users';

@Injectable()
export class UserProvider {

  users: any;

  constructor(
    public http: Http,
  ) {

  }

  getUsers () {
    if (this.users) {
      return Observable.of(this.users);
    } else {
      return this.http.get(`${API_URL}${USERS_ENDPOINT}`, { })
      .map((response: any) => {
        this.users = JSON.parse(response._body);
        return this.users;
      })
      .catch((error) => {return Observable.throw(error);});
    }
  }

}
