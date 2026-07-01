import { Component, inject, type OnDestroy, type OnInit } from '@angular/core';
import { BlogHeader2Component } from "../components/blog-header-2/blog-header-2.component";
import { Contact2Component } from "../../../components/contact-2/contact-2.component";
import { BodyClassService } from '@app/services/body-class.service';
import { BlogFilterComponent } from "../components/blog-filter/blog-filter.component";
import { rightBlogs } from '../data';
import { BlogRightCardComponent } from "../components/blog-right-card/blog-right-card.component";
import { CommonModule } from '@angular/common';
import { PaginationComponent } from "../components/pagination/pagination.component";

@Component({
    selector: 'app-blog-right-2',
    imports: [BlogHeader2Component, Contact2Component, BlogFilterComponent, BlogRightCardComponent, CommonModule, PaginationComponent],
    templateUrl: './blog-right-2.component.html',
    styles: ``
})
export class BlogRight2Component implements OnInit, OnDestroy {
    blogs = rightBlogs
    private bodyClassService = inject(BodyClassService)

    ngOnInit() {
        this.bodyClassService.add('body-bg');
        this.bodyClassService.add('homepage2-body');
    }
    ngOnDestroy() {
        this.bodyClassService.remove('body-bg');
        this.bodyClassService.remove('homepage2-body');
    }
}
