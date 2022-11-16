import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface navbar1 {
  icon: {
    url: string;
    inactive_color?: string;
    active_color?: string;
  };
  name: string;
  indicator_color?: string;
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
export class NavBar1Component implements OnInit {
  index = '1';
  bgColor = '';
  @Input() svg: navbar1[] = [];
  @Input() img = '';
  @Output() ChangedIndex = new EventEmitter();

  ngOnInit(): void {
    this.svg.forEach((a) => {
      if (a.icon.url.startsWith('url') === false) {
        a.icon.url = `url("${a.icon.url}")`;
      }
    });
  }

  change(id: string, color = '') {
    this.index = id;
    this.bgColor = color;

    this.ChangedIndex.emit(id);
  }
}
