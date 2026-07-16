import { Component, ViewChild } from '@angular/core';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Iservice } from '../../../interfaces/services/iservice.interfaces';

@Component({
  selector: 'app-services',
  imports: [CarouselModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  
   services: Iservice[] = [
      {
      icon: 'fa-solid fa-broom',
      title: 'Cleaning',
      description: 'Home and apartment cleaning, carpets, upholstery, cabinets, sanitation, glass, and marble.',
    },
    {
      icon: 'fa-solid fa-trowel',
      title: 'Finishing & Repair',
      description: 'Gypsum board, ceramic, marble and tiling, metalwork and aluminum, door and window repair, painting.',
    },
    {
      icon: 'fa-solid fa-screwdriver-wrench',
      title: 'Maintenance',
      description: 'Plumbing, painting, electrical, carpentry, ironwork, AC technicians, and appliance repair.',
    },
    {
      icon: 'fa-solid fa-truck-moving',
      title: 'Moving & Installation',
      description: 'Furniture moving, disassembly and reassembly, packing, and crane services.',
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Security Systems',
      description: 'Camera installation, intercom systems, alarm systems, and full security solutions.',
    },
    {
      icon: 'fa-solid fa-hand-holding-heart',
      title: 'Daily Care Services',
      description: 'Elderly care and childcare, right at home.',
    },
    {
      icon: 'fa-solid fa-tree',
      title: 'Outdoor Services',
      description: 'Landscaping, tree trimming, irrigation system installation, and garden cleaning.',
    },
  ];
 
  customOptions: OwlOptions = {
    loop: false,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
    },
  };


}
