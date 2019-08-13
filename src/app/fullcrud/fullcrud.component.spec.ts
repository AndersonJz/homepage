import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcrudComponent } from './fullcrud.component';

describe('FullcrudComponent', () => {
  let component: FullcrudComponent;
  let fixture: ComponentFixture<FullcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
