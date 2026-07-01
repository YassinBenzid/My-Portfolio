import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-2',
  imports:[CommonModule, RouterLink],
  templateUrl: './sidebar2.component.html',
})
export class Sidebar2Component implements OnInit, OnDestroy {
  currentSection: string = 'home';

  private scrollService= inject(ScrollService)
  sections = [
    { id: 'home', name: 'Home', icon: 'assets/img/icons/home-h2.svg' },
    { id: 'about', name: 'About Me', icon: 'assets/img/icons/about-h2.svg' },
    { id: 'service', name: 'Service', icon: 'assets/img/icons/service-h2.svg' },
    { id: 'skills', name: 'Skills', icon: 'assets/img/icons/skills-h2.svg' },
    { id: 'portfolio', name: 'Portfolio', icon: 'assets/img/icons/portfolio-h2.svg' },
    { id: 'contact', name: 'Contact', icon: 'assets/img/icons/contact-h2.svg' },
  ];

  ngOnInit(): void {
    this.scrollService.initScrollDetection(this.sections);

    this.scrollService.currentSection.subscribe(section => {
      this.currentSection = section;
    });
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  ngOnDestroy(): void {
    this.scrollService.ngOnDestroy();
  }
}
