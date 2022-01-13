import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallestIntegerComponent } from './smallest-integer.component';

describe('SmallestIntegerComponent', () => {
  let component: SmallestIntegerComponent;
  let fixture: ComponentFixture<SmallestIntegerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallestIntegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallestIntegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
