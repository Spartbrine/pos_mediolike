import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TieredMenu } from 'primeng/tieredmenu';
import { MenuItems } from '../core/theme/menu-items';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    TieredMenu,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  menuItems: MenuItem[] = []

  ngOnInit() {
    this.menuItems = MenuItems;
  }
}
