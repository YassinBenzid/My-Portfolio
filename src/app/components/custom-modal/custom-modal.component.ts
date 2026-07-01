import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioModalService } from '@app/services/portfolio-modal.service';
@Component({
    selector: 'app-custom-modal',
    imports: [CommonModule],
    templateUrl: './custom-modal.component.html',
    styles: ``
})
export class CustomModalComponent {
    private readonly portfolioModalService = inject(PortfolioModalService);
    readonly selectedProject = this.portfolioModalService.selectedProject;
    private readonly technologyLogoMap: Record<string, string> = {
        angular: 'assets/img/tech/angular.svg',
        nestjs: 'assets/img/tech/nestjs-logo.png',
        ionic: 'assets/img/tech/ionic.svg',
        python: 'assets/img/tech/python.svg',
        firebase: 'assets/img/tech/firebase.svg',
        flutter: 'assets/img/tech/flutter.svg',
        github: 'assets/img/tech/github-logo.png',
        'github actions': 'assets/img/tech/github-logo.png',
        laravel: 'assets/img/tech/laravel.svg',
        'spring boot': 'assets/img/tech/spring-boot.svg',
        springboot: 'assets/img/tech/spring-boot.svg',
    };

    closeModel() {
        this.portfolioModalService.close();
        const divElement = document.querySelector('.custom-model-main');
        if (divElement) {
            divElement.classList.remove('model-open');
        }
    }

    getTechnologyLogo(technology: string): string | null {
        return this.technologyLogoMap[technology.trim().toLowerCase()] ?? null;
    }
}
