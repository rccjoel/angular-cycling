import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { CreateContentComponent } from '../create-content/create-content.component';
import { FilterContentPipe } from '../filter-content.pipe';
import { HoverAffectDirective } from '../hover-affect.directive';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, CreateContentComponent, FilterContentPipe, HoverAffectDirective],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentList: Content[] = [
    {
      id: 1,
      title: 'Shimano',
      description: 'Japanese builder',
      creator: 'Creator 1',
      imgURL: 'https://cdn-icons-png.flaticon.com/256/14/14886.png',
      type: 'placeholder',
      tags: ['first', 'second']
    },
    {
      id: 2,
      title: 'Sram',
      description: 'American builder',
      creator: 'Creator 2',
      type: 'placeholder',
      tags: ['first', 'second']
    },
    {
      id: 3,
      title: 'Campagnolo',
      description: 'Italian builder',
      creator: 'Creator 3',
      imgURL: 'https://cdn-icons-png.flaticon.com/256/14/14886.png',
      type: 'placeholder',
      tags: ['first', 'second']
    },
    {
      id: 4,
      title: 'Pinarello',
      description: 'Italian bike builder',
      creator: 'Creator 4',
      imgURL: 'https://cdn-icons-png.flaticon.com/256/14/14886.png',
      type: 'different',
      tags: ['first', 'second']
    },
    {
      id: 5,
      title: 'De Rosa',
      description: 'Italian bike builder',
      creator: 'Creator 5',
      imgURL: 'https://cdn-icons-png.flaticon.com/256/14/14886.png',
      type: 'different',
      tags: ['first', 'second']
    },
    {
      id: 6,
      title: 'Canyon',
      description: 'German bike builder',
      creator: 'Creator 6',
      imgURL: 'https://cdn-icons-png.flaticon.com/256/14/14886.png',
      tags: ['first', 'second']
    },
    {
      id: 7,
      title: 'Standert',
      description: 'German bike builder',
      creator: 'Creator 7',
      imgURL: 'https://cdn-icons-png.flaticon.com/256/14/14886.png',
      tags: ['first', 'second']
    }
  ]

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

  addBandToList(newBandFromChild: Content) {
    this.contentList.push(newBandFromChild);
    this.contentList = [...this.contentList];
  }

}