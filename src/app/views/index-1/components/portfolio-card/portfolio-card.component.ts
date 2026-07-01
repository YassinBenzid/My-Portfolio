import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { LanguageService } from '@app/services/language.service';
import type { PortfolioItem } from 'types';

@Component({
    selector: 'app-portfolio-card',
    imports: [CommonModule],
    templateUrl: './portfolio-card.component.html',
    styles: ``
})
export class PortfolioCardComponent  {
    @Input() portfolioItem!: PortfolioItem
    private readonly i18n = inject(LanguageService);
    readonly t = (key: string) => this.i18n.t(key);
    
    toggleModel() {
        const divElement = document.querySelector('.custom-model-main');
        if (divElement) {
          divElement.classList.toggle('model-open');
        }
      }


}
