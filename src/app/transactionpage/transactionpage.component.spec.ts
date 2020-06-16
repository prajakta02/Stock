import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionpageComponent } from './transactionpage.component';

describe('TransactionpageComponent', () => {
  let component: TransactionpageComponent;
  let fixture: ComponentFixture<TransactionpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
