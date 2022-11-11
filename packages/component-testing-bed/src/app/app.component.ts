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

  menuImg = '../assets/svg/add-outline.svg';

  svgs = [
    {
      img: '../assets/svg/add-outline.svg',
      uid: '1',
    },
    {
      img: '../assets/svg/add-outline.svg',
      uid: '2',
    },
    // {
    //   img: '../assets/svg/add-outline.svg',
    //   uid: '3',
    // },
    {
      img: '../assets/svg/add-outline.svg',
      uid: '4',
    },
    {
      img: '../assets/svg/add-outline.svg',
      uid: '5',
    },
    {
      img: '../assets/svg/add-outline.svg',
      uid: '3',
    },
    {
      img: '../assets/svg/add-outline.svg',
      uid: '4',
    },
    {
      img: '../assets/svg/add-outline.svg',
      uid: '5',
    },
  ];
}
