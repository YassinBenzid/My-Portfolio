import { CommonModule } from '@angular/common';
import { Component, inject, type AfterViewInit, type OnInit } from '@angular/core';
import { testimonials } from 'assets/data';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule, type OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from '@app/services/language.service';
import { TextDecorationComponent } from "../../../../components/text-decoration/text-decoration.component";
@Component({
    selector: 'app-testimonial',
    imports: [NgbCarouselModule, CarouselModule, CommonModule, TextDecorationComponent],
    templateUrl: './testimonial.component.html',
    styles: ``
})
export class TestimonialComponent implements OnInit, AfterViewInit {
    testimonials = testimonials
    private readonly i18n = inject(LanguageService);
    readonly t = (key: string) => this.i18n.t(key);
    dir: string | null = ''
    carouselOptions: OwlOptions = {}


    ngOnInit() {
        setInterval(() => {
            this.dir = document.documentElement.getAttribute('dir');

        }, 100)
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
        }, 100)
    }
}
