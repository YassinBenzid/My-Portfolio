import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { portfolioData } from 'assets/data';
import { PortfolioCard2Component } from "../portfolio-card-2/portfolio-card-2.component";
import { TextDecoration2Component } from "../../../../components/text-decoration-2/text-decoration-2.component";

@Component({
    selector: 'app-portfolio-2',
    imports: [CommonModule, PortfolioCard2Component, TextDecoration2Component],
    templateUrl: './portfolio-2.component.html',
    styles: ``
})
export class Portfolio2Component {
    portfolioList = portfolioData
}
