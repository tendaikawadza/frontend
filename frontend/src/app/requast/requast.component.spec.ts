import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequastComponent } from './requast.component';

describe('RequastComponent', () => {
  let component: RequastComponent;
  let fixture: ComponentFixture<RequastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
