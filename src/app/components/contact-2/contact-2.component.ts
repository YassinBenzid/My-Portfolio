import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextDecoration2Component } from "../text-decoration-2/text-decoration-2.component";

@Component({
  selector: 'app-contact-2',
  imports: [CommonModule, TextDecoration2Component],
  templateUrl: './contact-2.component.html',
  styles: ``
})
export class Contact2Component {
    @Input() class?: string;
    currentYear: number = new Date().getFullYear();

    socialLinks = [
        {
          name: 'LinkedIn',
          icon: 'assets/img/icons/linkedin.svg',
          href: 'https://www.linkedin.com/in/yassinbenzid/',
          aosDelay: 800
        },
        {
          name: 'Email',
          icon: 'assets/img/icons/email2.svg',
          href: 'mailto:yassinbenzid@gmail.com',
          aosDelay: 900
        },
        {
          name: 'WhatsApp',
          icon: 'assets/img/icons/phone2.svg',
          href: 'https://wa.me/21697411310?text=Hi%20Yassine%2C%20I%20came%20from%20your%20portfolio.',
          aosDelay: 1000,
        }
    ];
}
