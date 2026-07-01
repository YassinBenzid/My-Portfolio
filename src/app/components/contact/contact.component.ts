import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { LanguageService } from '@app/services/language.service';
import { TextDecorationComponent } from "../text-decoration/text-decoration.component";
@Component({
    selector: 'app-contact',
    imports: [CommonModule, TextDecorationComponent],
    templateUrl: './contact.component.html',
    styles: ``
})


export class ContactComponent {

    @Input() class?: string;
    private readonly i18n = inject(LanguageService);
    readonly t = (key: string) => this.i18n.t(key);
    currentYear: number = new Date().getFullYear();


    socialLinks = [
        {
            name: 'facebook',
            icon: 'assets/img/icons/facebook.svg',
            aosDelay: 800
        },
        {
            name: 'Instagram',
            icon: 'assets/img/icons/instagram.svg',
            aosDelay: 900
        },
        {
            name: 'Pintarest',
            icon: 'assets/img/icons/twitter.svg',
            aosDelay: 1000,
            class: 'twitter'
        },
        {
            name: 'linkedin',
            icon: 'assets/img/icons/linkedin.svg',
            aosDelay: 1100
        },
        {
            name: 'Dribbble',
            icon: 'assets/img/icons/dribble.svg',
            aosDelay: 1200
        }
    ];

}
