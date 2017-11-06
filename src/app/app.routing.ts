import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { BarcodeComponent } from "./barcode/barcode.component";
import { BARCODE_ROUTE } from "./barcode/barcode.route";


const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/barcode/media',
    pathMatch: 'full'
  },
  {
    path: 'barcode',
    redirectTo: '/barcode/media',
    pathMatch: 'full'
  },
  {
    path: 'barcode',
    component: BarcodeComponent,
    children: BARCODE_ROUTE,
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }

];

export const routing = RouterModule.forRoot(APP_ROUTES);

