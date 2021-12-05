import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchoringComponent } from './anchoring.component';

describe('AnchoringComponent', () => {
  let component: AnchoringComponent;
  let fixture: ComponentFixture<AnchoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
