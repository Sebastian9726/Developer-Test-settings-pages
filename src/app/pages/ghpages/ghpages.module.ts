import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GhpagesRoutingModule } from './ghpages-routing.module';
import { GhpagesComponent } from './ghpages.component';


@NgModule({
  declarations: [GhpagesComponent],
  imports: [
    CommonModule,
    GhpagesRoutingModule
  ]
})
export class GhpagesModule { }
