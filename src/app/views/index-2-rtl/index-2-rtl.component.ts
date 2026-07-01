import { Component, inject, Renderer2, type OnDestroy, type OnInit } from '@angular/core';
import { Index2Component } from "../index-2/index-2.component";

@Component({
    selector: 'app-index-2-rtl',
    imports: [Index2Component],
    templateUrl: './index-2-rtl.component.html',
    styles: ``
})
export class Index2RtlComponent implements OnInit, OnDestroy {
    private renderer = inject(Renderer2)

    ngOnInit() {
        this.renderer.addClass(document.body, 'rtl2-body');
        document.documentElement.setAttribute('dir', 'rtl');

    }
    ngOnDestroy() {
        this.renderer.removeClass(document.body, 'rtl2-body');
        document.documentElement.removeAttribute('dir');

    }
}
