import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nav-bars-nav-bars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bars.component.html',
  styleUrls: ['./nav-bars.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavBar1Component {
}
