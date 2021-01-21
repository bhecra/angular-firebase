import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [NavbarComponent, HorizontalBarComponent],
  exports: [NavbarComponent, HorizontalBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class ComponentsModule { }
