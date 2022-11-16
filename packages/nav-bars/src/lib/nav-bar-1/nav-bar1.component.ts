import {
  AfterViewInit,
  Component,
  ElementRef,
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
export class NavBar1Component implements OnInit, AfterViewInit {
  index = '1';
  bgColor = '';
  @Input() parentData: navbar1[] = [];
  @Input() img = '';
  @Output() ChangedIndex = new EventEmitter();

  constructor(private el: ElementRef) {}

  private resize = () => {
    const Width = this.el.nativeElement.offsetWidth || 0;
    this.el.nativeElement.style.setProperty(
      '--num-of-img',
      this.parentData.length
    );
    this.el.nativeElement.style.setProperty(
      '--icon-width',
      `${(Width - 50) / this.parentData.length}px`
    );
  };

  ngOnInit(): void {
    this.parentData.forEach((a) => {
      if (a.icon.url.startsWith('url') === false) {
        a.icon.url = `url("${a.icon.url}")`;
      }
    });
  }

  ngAfterViewInit(): void {
    this.resize();
    window.addEventListener('resize', this.resize);
  }

  change(id: string, color = '') {
    this.index = id;
    this.bgColor = color;

    this.ChangedIndex.emit(id);
  }
}
