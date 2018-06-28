import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCompetencesComponent } from './nav-competences.component';

describe('NavCompetencesComponent', () => {
  let component: NavCompetencesComponent;
  let fixture: ComponentFixture<NavCompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
