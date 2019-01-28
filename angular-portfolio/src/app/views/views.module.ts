import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroModule } from './hero/hero.module';

import { ViewsRoutingModule } from './views-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeroModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
