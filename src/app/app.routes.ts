import { Routes } from '@angular/router';
import { AllergenListComponent } from './features/allergen-list/allergen-list.component';
import { ProductScanComponent } from './features/product-scan/product-scan.component';

export const routes: Routes = [
  { path: 'allergens', component: AllergenListComponent },
  { path: 'scan', component: ProductScanComponent },
  { path: '', redirectTo: 'scan', pathMatch: 'full' }
];
