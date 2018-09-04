import {Route} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {RegisterComponent} from "./register/register.component";
import {MealsComponent} from "./meals/meals.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {EmailLinksComponent} from "./email-links/email-links.component";
import {ComingSoonComponent} from "./coming-soon/coming-soon.component";

export const routerConfig : Route[] = [
    {
      path: '',
      component: ComingSoonComponent,
      pathMatch: 'full'
    },
    // {
    //     path: 'register',
    //     component: RegisterComponent
    // },
    {
      path: 'comingsoon',
      component: ComingSoonComponent
    },
    // {
    //     path:'home',
    //     component: HomeComponent
    // },
    // {
    //     'path': 'login',
    //     component: LoginComponent
    // },
    // {
    //     path: 'profile',
    //     component: ProfileComponent
    // },
    // {
    //     path: 'meals',
    //     component: MealsComponent
    // },
    // {
    //     path: 'forgotpassword',
    //     component: ForgotPasswordComponent
    // },
    // {
    //     path: 'emaillinks',
    //     component: EmailLinksComponent
    // },
    // {
    //     path: 'register',
    //     component: RegisterComponent,
    //     pathMatch: 'full'
    // // },
    // {
    //     path: '**',
    //     redirectTo: 'register'
    // }
        // },
        {
            path: '**',
            redirectTo: 'comingsoon'
        }
];
