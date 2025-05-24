import { Component } from '@angular/core';
import { MenuItem, } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MenubarModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Scan Products',
        icon: 'pi pi-barcode',
        routerLink: ['/scan']
      },
      {
        label: 'My Allergens',
        icon: 'pi pi-list',
        routerLink: ['/allergens']
      }
    ];
  }
}
