import { Component, inject, Renderer2, type OnDestroy, type OnInit } from '@angular/core';
import { Index1Component } from "../index-1/index-1.component";

@Component({
    selector: 'app-index-1-rtl',
    imports: [Index1Component],
    templateUrl: './index-1-rtl.component.html',
    styles: ``
})
export class Index1RtlComponent implements OnInit, OnDestroy {
    private renderer = inject(Renderer2)

    ngOnInit() {
        this.renderer.addClass(document.body, 'rtl1-body');
        document.documentElement.setAttribute('dir', 'rtl');

    }
    ngOnDestroy() {
        this.renderer.removeClass(document.body, 'rtl1-body');
        document.documentElement.removeAttribute('dir');

    }

}
