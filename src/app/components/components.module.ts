import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CovenantsComponent } from './covenants/covenants.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    WhatsappComponent,
    ServicesComponent,
    TeamComponent,
    FooterComponent,
    GalleryComponent,
    CovenantsComponent,
    TestimoniesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    AboutComponent,
    WhatsappComponent,
    ServicesComponent,
    TeamComponent,
    FooterComponent,
    GalleryComponent,
    CovenantsComponent,
    TestimoniesComponent
  ]
})
export class ComponentsModule {}