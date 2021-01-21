import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, HorizontalBarComponent],
  exports: [NavbarComponent, HorizontalBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
