import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, Input, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MobileMenuComponent } from "../../../../components/mobile-menu/mobile-menu.component";

@Component({
    selector: 'app-blog-header',
    imports: [RouterLink, CommonModule, MobileMenuComponent],
    templateUrl: './blog-header.component.html',
    styles: ``
})
export class BlogHeaderComponent {
    private renderer = inject(Renderer2)
    isActive = false;
    isSticky: boolean = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scroll = window.scrollY || window.pageYOffset;
        this.isSticky = scroll > 1;
    }

    toggleSidebar() {
        this.isActive = !this.isActive;
        const body = document.body;
        const isClassPresent = body.classList.contains('on-side');

        if (isClassPresent) {
            this.renderer.removeClass(body, 'on-side');
        } else {
            this.renderer.addClass(body, 'on-side');
        }
    }

}
