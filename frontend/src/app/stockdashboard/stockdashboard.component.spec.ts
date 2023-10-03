import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockdashboardComponent } from './stockdashboard.component';

describe('StockdashboardComponent', () => {
  let component: StockdashboardComponent;
  let fixture: ComponentFixture<StockdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
