import type { Route } from "@angular/router";

export const routes: Route[] = [
    {
        path: '',
        loadChildren: () =>
            import('./views/views.route').then((mod) => mod.VIEWS_ROUTE),
    },
]
