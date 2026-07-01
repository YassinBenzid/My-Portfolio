import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { PortfolioModalService } from '@app/services/portfolio-modal.service';
import type { PortfolioItem } from 'types';

@Component({
  selector: 'app-portfolio-card-2',
  imports: [CommonModule],
  templateUrl: './portfolio-card-2.component.html',
  styles: ``
})
export class PortfolioCard2Component {
    @Input() portfolioItem!: PortfolioItem
    private readonly portfolioModalService = inject(PortfolioModalService);

    openModel() {
        this.portfolioModalService.open(this.portfolioItem);
        const divElement = document.querySelector('.custom-model-main');
        if (divElement) {
          divElement.classList.add('model-open');
        }
    }
}
