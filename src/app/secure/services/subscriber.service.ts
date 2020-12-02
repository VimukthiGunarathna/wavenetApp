import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  public url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  /**
   * Add subscriber to database
   * @param subscriber : subscriber object
   */
  public addSubscriber(subscriber) {
    console.log('IAM ', subscriber);
    return this.http.post(`${this.url}/addSubscriber`, subscriber, { headers: this.headers });
  }
}
