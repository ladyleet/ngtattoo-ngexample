import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { AppRoutes } from './app/app.routes';
import { provideRouter } from '@angular/router';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [provideRouter(AppRoutes)
]);
