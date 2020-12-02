import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoicemailService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  public url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  /**
   * Get all the voicemails in the system
   */
  public getAllMails(): Observable<any> {
    return this.http.get(`${this.url}/getAllMails`, { headers: this.headers });
  }

  /**
   * Get voicemail by id
   * @param id : voicemail id
   */
  public getMailById(): Observable<any> {
    return this.http.get(`${this.url}getMailById/`, { headers: this.headers })
  }
}
