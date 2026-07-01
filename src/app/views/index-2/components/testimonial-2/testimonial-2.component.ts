import { CommonModule } from '@angular/common';
import { Component, type AfterViewInit, type OnInit } from '@angular/core';
import { testimonials } from 'assets/data';
import { CarouselModule, type OwlOptions } from 'ngx-owl-carousel-o';
import { TextDecoration2Component } from "../../../../components/text-decoration-2/text-decoration-2.component";

@Component({
    selector: 'app-testimonial-2',
    imports: [CarouselModule, CommonModule, TextDecoration2Component],
    templateUrl: './testimonial-2.component.html',
    styles: ``
})
export class Testimonial2Component implements OnInit, AfterViewInit {
    testimonials = testimonials
    dir: string | null = ''
    carouselOptions: OwlOptions = {}

    ngOnInit() {
        setInterval(() => {
            this.dir = document.documentElement.getAttribute('dir');

        }, 1000)
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.carouselOptions = {
                loop: true,
                margin: 30,
                nav: true,
                dots: true,
                rtl: this.dir == 'rtl' ? true : false,
                autoplay: true,
                navText: ['<i class="fa-solid fa-arrow-left" />', '<i class="fa-solid fa-arrow-right"/>'],
                autoplayTimeout: 4000,
                smartSpeed: 600,
                responsive: {
                    0: { items: 1 },
                    768: { items: 1 },
                    1024: { items: 1 }
                }
            };
        }, 1000)
    }

}
