import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAnimationComponent } from './css-animation.component';

describe('CssAnimationComponent', () => {
  let component: CssAnimationComponent;
  let fixture: ComponentFixture<CssAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
