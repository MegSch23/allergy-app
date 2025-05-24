import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductScanComponent } from './product-scan.component';

describe('ProductScanComponent', () => {
  let component: ProductScanComponent;
  let fixture: ComponentFixture<ProductScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductScanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
