import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnehatableComponent } from './snehatable.component';

describe('SnehatableComponent', () => {
  let component: SnehatableComponent;
  let fixture: ComponentFixture<SnehatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnehatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnehatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
