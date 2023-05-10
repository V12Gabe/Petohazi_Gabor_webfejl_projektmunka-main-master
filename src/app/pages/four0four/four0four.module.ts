import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Four0fourRoutingModule } from './four0four-routing.module';
import { Four0fourComponent } from './four0four.component';


@NgModule({
  declarations: [
    Four0fourComponent
  ],
  imports: [
    CommonModule,
    Four0fourRoutingModule
  ]
})
export class Four0fourModule { }
