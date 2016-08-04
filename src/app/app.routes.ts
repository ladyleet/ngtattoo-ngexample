import { TattooCardComponent } from './tattoo-card';
import { AboutPageComponent } from './about-page';
import { GetTattooedComponent } from './get-tattooed';

export const AppRoutes = [

{ path: '', component: TattooCardComponent },
{ path: 'tattooed', component: TattooCardComponent },
{ path: 'about', component: AboutPageComponent },
{ path: 'get-tattooed', component: GetTattooedComponent}
];
