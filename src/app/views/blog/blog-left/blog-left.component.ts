import { Component } from '@angular/core';
import { BlogHeaderComponent } from "../components/blog-header/blog-header.component";
import { BlogFilterComponent } from "../components/blog-filter/blog-filter.component";
import { blogs } from 'assets/data';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from "../components/blog-card/blog-card.component";
import { ContactComponent } from "../../../components/contact/contact.component";
import { PaginationComponent } from "../components/pagination/pagination.component";

@Component({
    selector: 'app-blog-left',
    imports: [BlogHeaderComponent, BlogFilterComponent, CommonModule, BlogCardComponent, ContactComponent, PaginationComponent],
    templateUrl: './blog-left.component.html',
    styles: ``
})
export class BlogLeftComponent {
    blogs = blogs
}
