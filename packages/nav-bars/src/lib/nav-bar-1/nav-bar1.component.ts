import { NgFor, NgStyle } from '@angular/common';
import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  IterableDiffer,
  IterableDiffers,
  Output,
  ViewEncapsulation,
} from '@angular/core';

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
  imports: [NgStyle, NgFor],
  templateUrl: './nav-bar1.component.html',
  styleUrls: ['./nav-bar1.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavBar1Component implements AfterViewInit, DoCheck {
  index = '1';
  bgColor = '';
  iterableDiffer!: IterableDiffer<navbar1>;
  @Input() parentData: navbar1[] = [];
  @Input() img = '';
  @Output() ChangedIndex = new EventEmitter();

  constructor(private el: ElementRef, iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers
      .find(this.parentData)
      .create<navbar1>();
  }

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

  ngDoCheck(): void {
    this.recalibrateNavBar();
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

  private recalibrateNavBar() {
    if (this.iterableDiffer.diff(this.parentData) !== null) {
      this.parentData.forEach((a) => {
        if (a.icon.url.startsWith('url') === false) {
          a.icon.url = `url("${a.icon.url}")`;
        }
      });
      if (this.el.nativeElement) {
        this.resize();
      }
    }
  }
}
