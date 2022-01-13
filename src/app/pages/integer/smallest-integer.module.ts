import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmallestIntegerRoutingModule } from './smallest-integer-routing.module';
import { SmallestIntegerComponent } from './smallest-integer.component';


@NgModule({
  declarations: [SmallestIntegerComponent],
  imports: [
    CommonModule,
    SmallestIntegerRoutingModule
  ]
})
export class SmallestIntegerModule { }
