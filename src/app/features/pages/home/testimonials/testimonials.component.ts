import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Itestimonial } from '../../../interfaces/testmonials/itestemonial.interfaces';

@Component({
  selector: 'app-testimonials',
  imports: [CarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
   testimonials: Itestimonial[] = [
    {
      rating: 5,
      quote: "The cleaning crew was exceptionally thorough and professional. My house hasn't looked this good in years. Highly recommend their subscription!",
      name: 'Sarah Johnson',
      role: 'Verified Homeowner',
      initials: 'SJ',
      color: 'bg-rose-400',
    },
    {
      rating: 3,
      quote: 'Found an emergency plumber through ProHome at 2 AM. He arrived within 30 minutes and fixed our leak perfectly. Absolute lifesaver.',
      name: 'Michael Chen',
      role: 'Verified Homeowner',
      initials: 'MC',
      color: 'bg-indigo-400',
    },
    {
      rating: 1,
      quote: 'The outdoor maintenance team transformed my overgrown garden into a paradise. The attention to detail is just unmatched in this industry.',
      name: 'Elena Rodriguez',
      role: 'Verified Homeowner',
      initials: 'ER',
      color: 'bg-amber-400',
    },
  ];
 
  customOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    autoplay: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  };
}
