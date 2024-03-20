import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {

  @Output() newBandEvent = new EventEmitter<Content>();

  addBand(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.errorMessage = '';

      if (!this.contentTitle || !this.contentDescription || !this.contentCreator) {
        this.errorMessage = "Required fields are empty";
        throw new Error("Create the content again with the required fields filled.");
      }

      const newBandItem: Content = {
        id: this.contentId,
        title: this.contentTitle,
        description: this.contentDescription,
        creator: this.contentCreator,
        imgURL: this.contentImgurl,
        type: this.contentType
      };
  
      try {
        this.newBandEvent.emit(newBandItem);
        resolve(console.log("Addition successful"));

        // Setting form values to empty when addition is successful
        this.contentId = 0;
        this.contentTitle = '';
        this.contentDescription = '';
        this.contentCreator = '';
        this.contentImgurl = '';
        this.contentType = '';
      } catch (error) {
        reject(error);
      }
    });
  }
  
  // add functionality
  contentId: number = 0;
  contentTitle: string = '';
  contentDescription: string = '';
  contentCreator: string = '';
  contentImgurl: string = '';
  contentType: string = '';
  errorMessage: string = '';
}