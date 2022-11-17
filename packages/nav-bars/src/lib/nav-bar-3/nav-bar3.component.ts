import { NgFor, NgIf, NgStyle } from '@angular/common';
import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  DoCheck,
  IterableDiffers,
  IterableDiffer,
} from '@angular/core';
import { Subscription } from 'rxjs';
export interface navbar3 {
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
  selector: 'nav-bars-3',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './nav-bar3.component.html',
  styleUrls: ['./nav-bar3.component.scss'],
})
export class NavBar3Component implements AfterViewInit, OnDestroy, DoCheck {
  bgColor = '#29fd53';
  @Input() parentData: navbar3[] = [];
  index = '1';
  subscription!: Subscription;
  iterableDiffer!: IterableDiffer<navbar3>;

  private resizeListner = () => {
    const w = this.el.nativeElement.offsetWidth || 0;
    this.el.nativeElement.style.setProperty(
      '--num-of-img',
      this.parentData.length
    );
    this.el.nativeElement.style.setProperty(
      '--icon-width',
      `${(w - 50) / this.parentData.length}px`
    );
  };

  constructor(private el: ElementRef, iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers
      .find(this.parentData)
      .create<navbar3>();
  }
  ngDoCheck(): void {
    this.recalibrateNavBar();
    // throw new Error('Method not implemented.');
  }
  private recalibrateNavBar() {
    if (this.iterableDiffer.diff(this.parentData) !== null) {
      this.parentData.forEach((a) => {
        if (a.icon.url.startsWith('url') === false) {
          a.icon.url = `url("${a.icon.url}")`;
        }
      });
      if (this.el.nativeElement) {
        this.resizeListner();
      }
    }
  }
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListner);
  }
  ngAfterViewInit(): void {
    this.resizeListner();
    window.addEventListener('resize', this.resizeListner);
  }
  change(id: string, color = '') {
    this.index = id;
    this.bgColor = color;
  }
}
