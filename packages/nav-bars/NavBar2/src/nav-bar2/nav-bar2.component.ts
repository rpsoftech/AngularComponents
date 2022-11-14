import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface navbar1 {
  img: string;
  url: string;
  uid: string;
}

@Component({
  selector: 'nav-bars-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar2.component.html',
  styleUrls: ['./nav-bar2.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavBar2Component {
  @Input() svg: navbar1[] = [];
}
