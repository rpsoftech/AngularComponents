import { Component } from '@angular/core';
import { NavBar1Component } from '@rps/angular-nav-bars/nav-1';
import { NavBar2Component } from '@rps/angular-nav-bars/nav-2';

@Component({
  standalone: true,
  imports: [NavBar1Component, NavBar2Component],
  selector: 'rps-angular-components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'component-testing-bed';
  svgs = [
    {
      img: '../assets/svg/home-outline.svg',
      url: 'Github',
      uid: '',
    },
    {
      img: '../assets/svg/home-outline.svg',
      url: 'Github',
      uid: '',
    },
    {
      img: '../assets/svg/home-outline.svg',
      url: 'Github',
      uid: '',
    },
    {
      img: '../assets/svg/home-outline.svg',
      url: 'Github',
      uid: '',
    },
  ];
}
