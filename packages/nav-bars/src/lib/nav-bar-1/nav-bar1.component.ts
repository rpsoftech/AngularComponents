import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface navbar1 {
  img: string;
  uid: string;
  color?: string;
  'mask-color'?: string;
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
  index = '1';
  @Input() svg: navbar1[] = [];
  @Input() img = '';
  @Output() ChangedIndex = new EventEmitter();
  change(id: string) {
    this.index = id;
    this.ChangedIndex.emit(id);
  }
}
