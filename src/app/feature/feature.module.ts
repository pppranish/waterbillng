import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DasboardComponent } from '../components/admin/dasboard/dasboard.component';
import { AdminComponent } from '../components/admin/admin.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
