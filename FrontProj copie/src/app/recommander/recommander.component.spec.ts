import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommanderComponent } from './recommander.component';

describe('RecommanderComponent', () => {
  let component: RecommanderComponent;
  let fixture: ComponentFixture<RecommanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
