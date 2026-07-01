import { Component } from '@angular/core';
import { BlogHeaderComponent } from "../components/blog-header/blog-header.component";
import { BlogHeroComponent } from "./components/blog-hero/blog-hero.component";
import { BlogInfoComponent } from "./components/blog-info/blog-info.component";
import { CommentsAndMessageComponent } from "./components/comments-and-message/comments-and-message.component";
import { LatestBlogsComponent } from "./components/latest-blogs/latest-blogs.component";
import { ContactComponent } from "../../../components/contact/contact.component";

@Component({
  selector: 'app-blog-details',
  imports: [BlogHeaderComponent, BlogHeroComponent, BlogInfoComponent, CommentsAndMessageComponent, LatestBlogsComponent, ContactComponent],
  templateUrl: './blog-details.component.html',
  styles: ``
})
export class BlogDetailsComponent {

}
