import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavExperiencesComponent } from './nav-experiences.component';

describe('NavExperiencesComponent', () => {
  let component: NavExperiencesComponent;
  let fixture: ComponentFixture<NavExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
