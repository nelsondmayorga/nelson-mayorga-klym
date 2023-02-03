import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  exports: [NavBarComponent],
})
export class SharedModule {}
