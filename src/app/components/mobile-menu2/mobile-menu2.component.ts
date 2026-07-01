import { CommonModule } from '@angular/common';
import { Component, inject, type OnDestroy, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '@app/services/scroll.service';

@Component({
  selector: 'app-mobile-menu2',
  imports: [RouterLink,CommonModule],
  templateUrl: './mobile-menu2.component.html',
  styles: ``
})
export class MobileMenu2Component implements OnInit,OnDestroy{
    isMobileMenuActive: boolean = false;

    currentSection: string = 'home';
    sections = [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About Me' },
        { id: 'service', name: 'Service' },
        { id: 'skills', name: 'Skills' },
        { id: 'portfolio', name: 'Portfolio' },
        { id: 'contact', name: 'Contact' },
    ];

    private scrollService = inject(ScrollService)

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

    toggleMobileMenu() {
      this.isMobileMenuActive = !this.isMobileMenuActive;
    }
  
    closeMobileMenu() {
      this.isMobileMenuActive = false;
    }
}
