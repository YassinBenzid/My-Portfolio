import { Component, HostListener, inject, Renderer2 } from '@angular/core';
import { MobileMenu2Component } from "../../../../components/mobile-menu2/mobile-menu2.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-header-2',
  imports: [MobileMenu2Component,CommonModule,RouterLink],
  templateUrl: './blog-header-2.component.html',
  styles: ``
})
export class BlogHeader2Component  {
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
