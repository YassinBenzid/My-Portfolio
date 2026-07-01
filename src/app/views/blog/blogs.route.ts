import type { Route } from "@angular/router";
import { BlogDetailsComponent } from "./blog-details/blog-details.component";
import { BlogDetails2Component } from "./blog-details-2/blog-details-2.component";
import { BlogLeftComponent } from "./blog-left/blog-left.component";
import { BlogRightComponent } from "./blog-right/blog-right.component";
import { BlogLeft2Component } from "./blog-left-2/blog-left-2.component";
import { BlogRight2Component } from "./blog-right-2/blog-right-2.component";


export const BLOG_ROUTE: Route[] = [
    {
        path: 'blog-details',
        component: BlogDetailsComponent
    },
    {
        path: 'blog-details-2',
        component: BlogDetails2Component
    },
    {
        path: 'blog-left',
        component: BlogLeftComponent
    },
    {
        path: 'blog-right',
        component: BlogRightComponent
    },
    {
        path: 'blog-left-2',
        component: BlogLeft2Component
    },
    {
        path: 'blog-right-2',
        component: BlogRight2Component
    },
]