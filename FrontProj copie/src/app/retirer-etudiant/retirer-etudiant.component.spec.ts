import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirerEtudiantComponent } from './retirer-etudiant.component';

describe('RetirerEtudiantComponent', () => {
  let component: RetirerEtudiantComponent;
  let fixture: ComponentFixture<RetirerEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirerEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirerEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
