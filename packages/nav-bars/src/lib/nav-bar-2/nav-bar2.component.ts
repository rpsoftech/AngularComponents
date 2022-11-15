import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';

interface navbar1 {
  img: string;
  uid: string;
}

@Component({
  selector: 'nav-bars-2',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle],
  templateUrl: './nav-bar2.component.html',
  styleUrls: ['./nav-bar2.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavBar2Component {
  @Input() svg: navbar1[] = [];
  active = false;
  @Input() menuImg = '';
  @Output() ChangedIndex = new EventEmitter();
  change(id: string) {
    this.ChangedIndex.emit(id);
  }
}
