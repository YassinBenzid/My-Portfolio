import { Component, inject, type OnDestroy, type OnInit } from '@angular/core';
import { BodyClassService } from '@app/services/body-class.service';
import { Contact2Component } from "../../../components/contact-2/contact-2.component";
import { BlogHeroComponent } from "../blog-details/components/blog-hero/blog-hero.component";
import { BlogHeader2Component } from "../components/blog-header-2/blog-header-2.component";
import { BlogInfo2Component } from "./components/blog-info-2/blog-info-2.component";
import { CommentsAndMessage2Component } from "./components/comments-and-message-2/comments-and-message-2.component";
import { LatestBlog2Component } from "./components/latest-blog-2/latest-blog-2.component";

@Component({
    selector: 'app-blog-details-2',
    imports: [BlogInfo2Component, BlogHeroComponent, LatestBlog2Component, Contact2Component, BlogHeader2Component, CommentsAndMessage2Component],
    templateUrl: './blog-details-2.component.html',
    styles: ``
})
export class BlogDetails2Component implements OnInit, OnDestroy {
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
