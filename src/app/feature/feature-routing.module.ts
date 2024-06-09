import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DasboardComponent } from '../components/admin/dasboard/dasboard.component';
import { AdminComponent } from '../components/admin/admin.component';

const routes: Routes = [
  { path: 'dashboard', component: DasboardComponent},
  { path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
