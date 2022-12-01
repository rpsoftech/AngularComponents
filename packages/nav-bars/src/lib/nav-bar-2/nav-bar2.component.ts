import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';

export interface navbar2 {
  icon: {
    url: string;
    inactive_color?: string;
    active_color?: string;
  };
  indicator_color?: string;
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
  index!:string;
  bgcolor = '';
  @Input() svg: navbar2[] = [];
  active = false;
  @Input() menuImg = '';
  @Output() ChangedIndex = new EventEmitter();
  change(id: string, color = '') {
    this.ChangedIndex.emit(id);
    this.bgcolor = color;
    this.index = id;
  }
}
