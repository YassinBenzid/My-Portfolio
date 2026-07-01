import type { Route } from "@angular/router";
import { Index1RtlComponent } from "./index-1-rtl/index-1-rtl.component";
import { Index1Component } from "./index-1/index-1.component";
import { Index2RtlComponent } from "./index-2-rtl/index-2-rtl.component";
import { Index2Component } from "./index-2/index-2.component";
import { IndexComponent } from "./index/index.component";

export const VIEWS_ROUTE: Route[] = [
    {
        path: '',
        component: Index2Component
    },
    {
        path: 'index',
        component: IndexComponent,

    },
    {
        path: 'index-1',
        component: Index1Component
    },
    {
        path: 'index-1-rtl',
        component: Index1RtlComponent
    },
    {
        path: 'index-2',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'index-2-rtl',
        component: Index2RtlComponent
    },
    {
        path: '',
        loadChildren: () =>
            import('./blog/blogs.route').then((mod) => mod.BLOG_ROUTE),
    },
]
