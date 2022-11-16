import { Component } from '@angular/core';
import { NavBar1Component } from '@rps/angular-nav-bars/nav-1';
import { NavBar2Component } from '@rps/angular-nav-bars/nav-2';
import { NavBar3Component, navbar3 } from '@rps/angular-nav-bars/nav-bar-3';

@Component({
  standalone: true,
  imports: [NavBar1Component, NavBar2Component, NavBar3Component],
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
      },
      name: 'Home',
      uid: '1',
      indicator_color: '#29fd53',
    },
    {
      icon: {
        url: '../assets/svg/add-outline.svg',
        active_color: 'white',
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
}
