import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    WhatsappComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    AboutComponent,
    WhatsappComponent
  ]
})
export class ComponentsModule {}