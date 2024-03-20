import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentList } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CyclingServiceService {

  constructor(private messageService: MessageService) { }

  getContentList(): Observable<Content[]> {
    this.messageService.add('Content array loaded!');
    return of(contentList);
  }

  getContentById(id: number): Observable<Content | undefined> {
    const contentItem = contentList.find(item => item.id === id);
    this.messageService.add(`Content Item at id: ${id}`);
    return of(contentItem);
  }
}