import { Component } from '@angular/core';
import { BlogHeaderComponent } from "../components/blog-header/blog-header.component";
import { ContactComponent } from "../../../components/contact/contact.component";
import { BlogFilterComponent } from "../components/blog-filter/blog-filter.component";
import type { BlogType } from 'types';
import { NgFor } from '@angular/common';
import { BlogRightCardComponent } from "../components/blog-right-card/blog-right-card.component";
import { rightBlogs } from '../data';
import { PaginationComponent } from "../components/pagination/pagination.component";

@Component({
    selector: 'app-blog-right',
    imports: [BlogHeaderComponent, ContactComponent, BlogFilterComponent, NgFor, BlogRightCardComponent, PaginationComponent],
    templateUrl: './blog-right.component.html',
    styles: ``
})
export class BlogRightComponent {
    blogs=rightBlogs
}
