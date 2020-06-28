import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventDetails} from './events.component';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  public getAssocIds(eventSkills:String[]){
    console.log('http://localhost:8001/qbthonInfo/getDistinctAssocIds?skills='+ eventSkills);
    return this.httpClient.get('http://localhost:8001/qbthonInfo/getDistinctAssocIds?skills='+ eventSkills);
}

  public createEvent(postData: EventDetails) {
    console.log("service", postData);
    return this.httpClient.post<EventDetails>("http://localhost:8001/qbthonInfo/createEventDetails", postData);
  }
}
