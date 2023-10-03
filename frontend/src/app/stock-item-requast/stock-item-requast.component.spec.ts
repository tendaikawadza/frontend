import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemRequastComponent } from './stock-item-requast.component';

describe('StockItemRequastComponent', () => {
  let component: StockItemRequastComponent;
  let fixture: ComponentFixture<StockItemRequastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockItemRequastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemRequastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
