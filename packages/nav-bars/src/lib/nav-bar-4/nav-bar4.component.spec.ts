import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBar4Component } from './nav-bar4.component';

describe('NavBar4Component', () => {
  let component: NavBar4Component;
  let fixture: ComponentFixture<NavBar4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBar4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
