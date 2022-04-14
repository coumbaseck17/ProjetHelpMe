import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminerThemeComponent } from './eliminer-theme.component';

describe('EliminerThemeComponent', () => {
  let component: EliminerThemeComponent;
  let fixture: ComponentFixture<EliminerThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminerThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminerThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
