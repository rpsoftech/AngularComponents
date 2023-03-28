import { Component, NgZone } from '@angular/core';
import { NavBar1Component } from '@rps/angular-nav-bars/nav-bar-1';
import { NavBar2Component } from '@rps/angular-nav-bars/nav-bar-2';
import { NavBar3Component } from '@rps/angular-nav-bars/nav-bar-3';
import { NavBar4Component } from '@rps/angular-nav-bars/nav-bar-4';

@Component({
  standalone: true,
  imports: [
    NavBar1Component,
    NavBar2Component,
    NavBar3Component,
    NavBar4Component,
  ],
  selector: 'rps-angular-components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'component-testing-bed';

  menuImg = '../assets/svg/add-outline.svg';

  svgs = [
    {
      icon: {
        url: '../assets/svg/add-outline.svg',
        active_color: 'white',
        inactive_color: 'red',
      },
      name: 'Home',
      uid: '1',
      indicator_color: '#29fd53',
    },
    {
      icon: {
        url: '../assets/svg/home-outline.svg',
        active_color: 'white',
        inactive_color: 'green',

      },
      name: 'Home',
      uid: '2',
      indicator_color: 'blue',
    },
    {
      icon: {
        url: '../assets/svg/add-outline.svg',
        inactive_color: 'green',
        active_color: 'white',
      },
      name: 'Home',
      uid: '3',
      indicator_color: 'red',
    },
    {
      icon: {
        url: '../assets/svg/add-outline.svg',
        active_color: 'white',
        inactive_color: 'green',

      },
      name: 'Home',
      uid: '4',
      indicator_color: '#29fd53',
    },
    {
      icon: {
        url: '../assets/svg/add-outline.svg',
        active_color: 'white',
        inactive_color: 'green',

      },
      name: 'Home',
      uid: '5',
      indicator_color: 'blue',
    },
    {
      icon: {
        url: '../assets/svg/add-outline.svg',
        inactive_color: 'green',
        active_color: 'white',
      },
      name: 'Home',
      uid: '6',
      indicator_color: 'red',
    },
    // {
    //   img: '../assets/svg/add-outline.svg',
    //   name: 'Home',
    //   uid: '3',
    // },
    // {
    //   img: '../assets/svg/add-outline.svg',
    //   name: 'Home',
    //   uid: '1',
    // },
    // {
    //   img: '../assets/svg/add-outline.svg',
    //   name: 'Home',
    //   uid: '5',
    // },
    // {
    //   img: '../assets/svg/add-outline.svg',
    //   name: 'Home',
    //   uid: '6',
    // },
    // {
    //   img: '../assets/svg/add-outline.svg',
    //   name: 'Home',
    //   uid: '7',
    // },
    // {
    //   img: '../assets/svg/add-outline.svg',
    //   name: 'Home',
    //   uid: '8',
    // },
  ];
  svgsv1 = [
    {
      img: '../assets/svg/add-outline.svg',
      name: 'Home',
      uid: '3',
    },
    {
      img: '../assets/svg/add-outline.svg',
      name: 'Home',
      uid: '1',
    },
    {
      img: '../assets/svg/add-outline.svg',
      name: 'Home',
      uid: '5',
    },
    {
      img: '../assets/svg/add-outline.svg',
      name: 'Home',
      uid: '6',
    },
    {
      img: '../assets/svg/add-outline.svg',
      name: 'Home',
      uid: '7',
    },
    {
      img: '../assets/svg/add-outline.svg',
      name: 'Home',
      uid: '8',
    },
  ];
  constructor(zone: NgZone) {
    setInterval(() => {
      zone.run(() => {
        // this.svgsv1.pop();
      });
    }, 5000);
  }
}
