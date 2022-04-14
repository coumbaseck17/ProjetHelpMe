import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerThemeComponent } from './lister-theme.component';

describe('ListerThemeComponent', () => {
  let component: ListerThemeComponent;
  let fixture: ComponentFixture<ListerThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
