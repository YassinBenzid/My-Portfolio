import { Injectable, signal } from '@angular/core';
import type { PortfolioItem } from 'types';

@Injectable({ providedIn: 'root' })
export class PortfolioModalService {
    readonly selectedProject = signal<PortfolioItem | null>(null);

    open(project: PortfolioItem) {
        this.selectedProject.set(project);
    }

    close() {
        this.selectedProject.set(null);
    }
}
