import { Component } from '@angular/core';
import { FooterColumn } from '../../interfaces/footer/ifooter.interfaces';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  columns: FooterColumn[] = [
    {
      title: 'Services',
      links: [
        { label: 'General Cleaning', href: '#' },
        { label: 'Plumbing & Electrical', href: '#' },
        { label: 'Moving Services', href: '#' },
        { label: 'Home Security', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Partner With Us', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ];
 
  socialLinks = [
    { icon: 'fa-brands fa-facebook-f', href: '#' },
    { icon: 'fa-brands fa-instagram', href: '#' },
    { icon: 'fa-brands fa-linkedin-in', href: '#' },
  ];
}
