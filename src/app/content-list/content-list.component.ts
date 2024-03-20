import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { CyclingServiceService } from '../cycling-service.service';
import { MessageService } from '../message.service';
import { FilterContentPipe } from '../filter-content.pipe';
import { HoverAffectDirective } from '../hover-affect.directive';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, FilterContentPipe, HoverAffectDirective],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  contentList!: Content[];
  contentItem!: Content;

  constructor(private cyclingService: CyclingServiceService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getContent();
    this.getContentId();
  }

  getContent(): void {
    this.cyclingService.getContentList()
      .subscribe(contentList => this.contentList = contentList);
  }

  getContentId(): void {
    this.cyclingService.getContentById(2)
      .subscribe(contentItem => {
        if (contentItem !== undefined) {
          this.contentItem = contentItem;
        }
      });
  }

  // Title search functionality
  searchExists: boolean | null = null;
  searchMessage: string = '';
  searchIndex: number | null = null;

  titleFilter(title: string) {
    let exists = this.contentList.some(item => item.title.toLowerCase() === title.toLowerCase());
    this.searchExists = exists;
    this.searchIndex = this.searchExists ? this.contentList.findIndex(item => item.title.toLowerCase() === title.toLowerCase()) : null;
    this.searchMessage = exists ? 'Item with this title exists' : 'Item with this title does not exists';
  }

}