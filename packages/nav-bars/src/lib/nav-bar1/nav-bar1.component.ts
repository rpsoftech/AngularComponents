import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface navbar1 {
  img: string;
  url: string;
  uid: string;
}

@Component({
  selector: 'nav-bars-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar1.component.html',
  styleUrls: ['./nav-bar1.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavBar1Component {
  @Input() svg: navbar1[] = [];
}
