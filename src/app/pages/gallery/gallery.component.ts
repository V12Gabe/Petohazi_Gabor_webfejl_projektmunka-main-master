import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  imageObject: Array<object> = [
    {
      video: '/assets/video2.mp4',
      title: 'Burger assembly',
    },
    {
      video: '/assets/video3.mp4',
      title: 'Breakfast service',
    },
    {
      video: '/assets/video4.mp4',
      title: 'Cooking a steak at home',
    }
  ];
  imageObject2: Array<object> = [
    {
      video: '/assets/video5.mp4',
      title: 'Pasta bar and service',
    },
    {
      video: '/assets/video6.mp4',
      title: 'Shopping for ingredients in Madrid',
    },
    {
      video: '/assets/video7.mp4',
      title: 'Busy shift in the burrito bar',
    }
  ];
  urls: Array<String> = [];
  width = 500;
  height = 500;

}
