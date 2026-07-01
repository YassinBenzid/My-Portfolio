import { CommonModule } from '@angular/common';
import { Component, inject, type OnDestroy, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '@app/services/language.service';
import { ScrollService } from '@app/services/scroll.service';

@Component({
    selector: 'app-mobile-menu',
    imports: [RouterLink,CommonModule],
    templateUrl: './mobile-menu.component.html',
    styles: ``
})
export class MobileMenuComponent implements OnInit, OnDestroy {
    isMobileMenuActive: boolean = false;
    currentSection: string = 'home';
    readonly languageService = inject(LanguageService);
    readonly t = (key: string) => this.languageService.t(key);
    readonly lang = this.languageService.lang;

    get sections() {
        return [
            { id: 'home', name: this.t('nav.home'), },
            { id: 'about', name: this.t('nav.about'), },
            { id: 'service', name: this.t('nav.service'), },
            { id: 'skills', name: this.t('nav.skills'), },
            { id: 'portfolio', name: this.t('nav.portfolio'), },
            { id: 'feedback', name: this.t('nav.feedback'), },
            { id: 'contact', name: this.t('nav.contact'), },
        ];
    }

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
