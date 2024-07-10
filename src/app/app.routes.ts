import { Routes } from '@angular/router';
import { PageNotFoundComponent, LandingPageComponent } from './components/';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: '**', component: PageNotFoundComponent }
];
