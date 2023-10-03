import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockItemComponent } from './stock-item.component';
import { Form } from '@angular/forms';
describe('StockItemComponent', () => {
  let component: StockItemComponent;
  let fixture: ComponentFixture<StockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
