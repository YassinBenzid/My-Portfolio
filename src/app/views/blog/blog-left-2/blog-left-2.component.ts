import { Component, inject, type OnDestroy, type OnInit } from '@angular/core';
import { BlogHeader2Component } from "../components/blog-header-2/blog-header-2.component";
import { BodyClassService } from '@app/services/body-class.service';
import { BlogFilterComponent } from "../components/blog-filter/blog-filter.component";
import { BlogCardComponent } from "../components/blog-card/blog-card.component";
import { blogs } from 'assets/data';
import { CommonModule } from '@angular/common';
import { Contact2Component } from "../../../components/contact-2/contact-2.component";
import { PaginationComponent } from "../components/pagination/pagination.component";

@Component({
  selector: 'app-blog-left-2',
  imports: [BlogHeader2Component, BlogFilterComponent, BlogCardComponent, CommonModule, Contact2Component, PaginationComponent],
  templateUrl: './blog-left-2.component.html',
  styles: ``
})
export class BlogLeft2Component implements OnInit,OnDestroy{
    blogs=blogs
    private bodyClassService= inject(BodyClassService)

    ngOnInit() {
        this.bodyClassService.add('body-bg');
        this.bodyClassService.add('homepage2-body');

    }
    ngOnDestroy() {
        this.bodyClassService.remove('body-bg');
        this.bodyClassService.remove('homepage2-body');
    }
}
