import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockrequestComponent } from './stockrequest.component';

describe('StockrequestComponent', () => {
  let component: StockrequestComponent;
  let fixture: ComponentFixture<StockrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
