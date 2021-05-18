import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorProjectsComponent } from './major-projects.component';

describe('MajorProjectsComponent', () => {
  let component: MajorProjectsComponent;
  let fixture: ComponentFixture<MajorProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
