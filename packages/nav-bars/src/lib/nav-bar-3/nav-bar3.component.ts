import { NgFor, NgIf, NgStyle } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ElementRef,
  AfterViewInit,
  OnDestroy,
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
export class NavBar3Component implements OnInit, AfterViewInit, OnDestroy {
  bgColor = '#29fd53';
  @Input() parentData: navbar3[] = [];
  index = '1';
  subscription!: Subscription;
  private resizeListner = () => {
    const w = this.el.nativeElement.offsetWidth || 0;
    this.el.nativeElement.style.setProperty(
      '--icon-width',
      `${(w - 50) / this.parentData.length}px`
    );
  };
  constructor(private el: ElementRef) {}
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListner);
  }
  ngAfterViewInit(): void {
    this.resizeListner();
    window.addEventListener('resize', this.resizeListner);
  }
  ngOnInit(): void {
    this.parentData.forEach((a) => {
      a.icon.url = `url("${a.icon.url}")`;
    });
  }
  change(id: string, color = '') {
    this.index = id;
    this.bgColor = color;
    // this.ChangedIndex.emit(id);
  }
}
