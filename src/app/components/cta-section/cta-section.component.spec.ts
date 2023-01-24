import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTASectionComponent } from './cta-section.component';

describe('CTASectionComponent', () => {
  let component: CTASectionComponent;
  let fixture: ComponentFixture<CTASectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTASectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTASectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
