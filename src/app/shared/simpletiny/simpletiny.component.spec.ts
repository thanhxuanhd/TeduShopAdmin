import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpletinyComponent } from './simpletiny.component';

describe('SimpletinyComponent', () => {
  let component: SimpletinyComponent;
  let fixture: ComponentFixture<SimpletinyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpletinyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpletinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
