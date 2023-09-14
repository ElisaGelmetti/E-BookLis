import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvventuraComponent } from './avventura.component';

describe('AvventuraComponent', () => {
  let component: AvventuraComponent;
  let fixture: ComponentFixture<AvventuraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvventuraComponent]
    });
    fixture = TestBed.createComponent(AvventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
