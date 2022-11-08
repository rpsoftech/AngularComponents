import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nav-bars-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar2.component.html',
  styleUrls: ['./nav-bar2.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavBar2Component {
}
