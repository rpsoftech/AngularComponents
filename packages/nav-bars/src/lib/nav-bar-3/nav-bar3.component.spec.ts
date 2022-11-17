import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBar3Component } from './nav-bar3.component';

describe('NavBar3Component', () => {
  let component: NavBar3Component;
  let fixture: ComponentFixture<NavBar3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBar3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
