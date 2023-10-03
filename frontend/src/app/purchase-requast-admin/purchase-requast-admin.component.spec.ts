import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequastAdminComponent } from './purchase-requast-admin.component';

describe('PurchaseRequastAdminComponent', () => {
  let component: PurchaseRequastAdminComponent;
  let fixture: ComponentFixture<PurchaseRequastAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRequastAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseRequastAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
