import {Route} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ComingSoonComponent} from "./coming-soon/coming-soon.component";

export const routerConfig : Route[] = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'comingsoon',
      component: ComingSoonComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
