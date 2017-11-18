import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import Swagger from 'swagger-client'
import 'rxjs/add/operator/map';

const fetchUrl = 'https://ultrahack.hs.fi/articles/2000005345471/'
const secretKey = 'dGVhbTk6YlJ6NVFZSm13dlNUR0gyaA=='

@Injectable()
export class ApiService {
  
  constructor(private http: Http) {
  }
  
  async getNews(): Promise<Response> {
    try {
      const headers = new Headers();
      headers.append('Access-Control-Allow-Origin', 'localhost');
      headers.append('Authorization', 'Basic ' + secretKey);
      const response = await this.http.get(fetchUrl, { headers: headers }).toPromise();
      console.log(response);
      if (response.status === 200) {
        return response;
      }
    } catch (err) {
      console.log(err);
    }
    return null;
  }
  
}
