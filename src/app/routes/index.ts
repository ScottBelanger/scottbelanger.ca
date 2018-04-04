import { Routes } from '@angular/router';

import { AboutMeComponent } from '../about-me/about-me.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { InteractiveMapComponent } from '../interactive-map/interactive-map.component';
import { MyEducationComponent } from '../my-education/my-education.component';
import { MyHobbiesComponent } from '../my-hobbies/my-hobbies.component';
import { MyPhotosComponent } from '../my-photos/my-photos.component';
import { ProgrammingBackgroundComponent } from '../programming-background/programming-background.component';

export const routes: Routes = [
    {
        path: 'aboutme',
        component: AboutMeComponent,
    },
    {
        path: 'homepage',
        component: HomePageComponent,
    },
    {
        path: 'interactivemap',
        component: InteractiveMapComponent,
    },
    {
        path: 'education',
        component: MyEducationComponent,
    },
    {
        path: 'hobbies',
        component: MyHobbiesComponent,
    },
    {
        path: 'photos',
        component: MyPhotosComponent,
    },
    {
        path: 'programmingbackground',
        component: ProgrammingBackgroundComponent,
    },
    { 
        path: '', 
        redirectTo: '/homepage',
        pathMatch: 'full'
    }
];