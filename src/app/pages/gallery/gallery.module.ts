import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { BrowseComponent } from './browse/browse.component';
import { GalleryMenuComponent } from './gallery-menu/gallery-menu.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    GalleryComponent,
    BrowseComponent,
    GalleryMenuComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgImageSliderModule
  ]
})
export class GalleryModule { }
