import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SimpleMessage} from '../model/simpleMessage';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  getWelcomeMessage(): Observable<SimpleMessage>{
    return this.httpClient.get<SimpleMessage>('/simple-message');
  }


}
