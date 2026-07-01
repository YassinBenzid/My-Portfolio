import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '@app/services/language.service';
import { portfolioData } from 'assets/data';
import { PortfolioCardComponent } from "../portfolio-card/portfolio-card.component";
import { TextDecorationComponent } from "../../../../components/text-decoration/text-decoration.component";

@Component({
    selector: 'app-portfolio',
    imports: [CommonModule, PortfolioCardComponent, TextDecorationComponent],
    templateUrl: './portfolio.component.html',
    styles: ``
})
export class PortfolioComponent {
    portfolioList = portfolioData;
    private readonly i18n = inject(LanguageService);
    readonly t = (key: string) => this.i18n.t(key);

}
