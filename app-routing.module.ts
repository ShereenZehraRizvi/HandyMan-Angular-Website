import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberGetComponent } from './member-get/member-get.component';
import { MemberEditComponent } from './member-edit/member-edit.component';

const routes: Routes = [
  {
    path:'member/create',
    component:MemberAddComponent,
  },
  {
    path:'edit/:id',
    component:MemberEditComponent,
  },
  {
    path:'members',
    component:MemberGetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
