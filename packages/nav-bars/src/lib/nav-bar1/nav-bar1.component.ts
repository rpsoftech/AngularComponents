import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
export class NavBar1Component implements OnInit {
  index = '1';
  @Input() svg: navbar1[] = [];
  @Input() img = '';

  ngOnInit(): void {
    //
    console.log();
  }

  change(id: any) {
    // console.log(id);
    this.index = id;
    console.log(this.index);
  }
}
