import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageManagementRoutingModule } from './image-management-routing.module';

import { ImageManagementComponent } from './image-management/image-management.component';

@NgModule({
  declarations: [ImageManagementComponent],
  imports: [
    CommonModule,
    ImageManagementRoutingModule
  ]
})
export class ImageManagementModule { }
