import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { ServicesComponent } from "./services/services.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServicesComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
