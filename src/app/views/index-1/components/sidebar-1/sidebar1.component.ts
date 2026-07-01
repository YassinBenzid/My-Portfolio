import { NgFor } from '@angular/common';
import { Component, inject, type OnDestroy, type OnInit } from '@angular/core';
import { LanguageService } from '@app/services/language.service';
import { ScrollService } from '@app/services/scroll.service';

@Component({
    selector: 'app-sidebar-1',
    imports: [NgFor],
    templateUrl: './sidebar1.component.html',
})
export class Sidebar1Component implements OnInit, OnDestroy {
    currentSection: string = 'home';
    readonly languageService = inject(LanguageService);
    readonly t = (key: string) => this.languageService.t(key);
    readonly lang = this.languageService.lang;

    get sections() {
        return [
            { id: 'home', name: this.t('nav.home'), icon: 'assets/img/icons/home.svg' },
            { id: 'about', name: this.t('nav.about'), icon: 'assets/img/icons/about.svg' },
            { id: 'service', name: this.t('nav.service'), icon: 'assets/img/icons/service.svg' },
            { id: 'skills', name: this.t('nav.skills'), icon: 'assets/img/icons/skills.svg' },
            { id: 'portfolio', name: this.t('nav.portfolio'), icon: 'assets/img/icons/portfolio.svg' },
            { id: 'feedback', name: this.t('nav.feedback'), icon: 'assets/img/icons/feedback.svg' },
            { id: 'blog', name: this.t('nav.blog'), icon: 'assets/img/icons/blog.svg' },
            { id: 'contact', name: this.t('nav.contact'), icon: 'assets/img/icons/contact.svg' },
        ];
    }

 private scrollService= inject(ScrollService)
 
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
