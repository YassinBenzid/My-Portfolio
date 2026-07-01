import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BodyClassService {
    private renderer: Renderer2;

    constructor(private rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    add(className: string): void {
        this.renderer.addClass(document.body, className);
    }

    remove(className: string): void {
        this.renderer.removeClass(document.body, className);
    }

    toggle(className: string): void {
        if (document.body.classList.contains(className)) {
            this.remove(className);
        } else {
            this.add(className);
        }
    }
}
