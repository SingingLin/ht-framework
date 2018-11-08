import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dash-board', loadChildren: './feature/dash-board/dash-board.module#DashBoardModule' },
  { path: 'image-management', loadChildren: './feature/image-management/image-management.module#ImageManagementModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
