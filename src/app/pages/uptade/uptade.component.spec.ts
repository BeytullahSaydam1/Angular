import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptadeComponent } from './uptade.component';

describe('UptadeComponent', () => {
  let component: UptadeComponent;
  let fixture: ComponentFixture<UptadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UptadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UptadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
