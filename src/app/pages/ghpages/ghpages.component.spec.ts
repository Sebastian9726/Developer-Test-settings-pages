import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhpagesComponent } from './ghpages.component';

describe('GhpagesComponent', () => {
  let component: GhpagesComponent;
  let fixture: ComponentFixture<GhpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
