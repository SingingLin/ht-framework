import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageManagementComponent } from './image-management/image-management.component';

const routes: Routes = [
  { path: '', component: ImageManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageManagementRoutingModule { }
