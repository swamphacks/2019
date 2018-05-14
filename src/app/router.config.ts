

import {Route} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {RegisterComponent} from "./register/register.component";

export const routerConfig : Route[] = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        'path': 'login',
        component: LoginComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'register'
    }
];
