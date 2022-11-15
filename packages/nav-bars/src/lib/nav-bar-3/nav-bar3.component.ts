import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

interface navbar3 {
  img: string;
  name: string;
  uid: string;
}

@Component({
  selector: 'nav-bars-3',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './nav-bar3.component.html',
  styleUrls: ['./nav-bar3.component.scss'],
})
export class NavBar3Component {
  @Input() parentData: navbar3[] = [];
  index = '1';
  change(id: string) {
    this.index = id;
    // this.ChangedIndex.emit(id);
  }
}
