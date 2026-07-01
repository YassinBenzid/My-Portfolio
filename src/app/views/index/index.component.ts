import { Component, inject, Renderer2, type OnDestroy, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-index',
    imports: [RouterLink],
    templateUrl: './index.component.html',
    styles: ``
})
export class IndexComponent implements OnInit, OnDestroy {
    private renderer = inject(Renderer2)

    ngOnInit() {
        this.renderer.addClass(document.body, 'homepage1-body');

    }
    ngOnDestroy() {
        this.renderer.removeClass(document.body, 'homepage1-body');
    }
}
