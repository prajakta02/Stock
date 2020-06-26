import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStocksCardComponent } from './display-stocks-card.component';

describe('DisplayStocksCardComponent', () => {
  let component: DisplayStocksCardComponent;
  let fixture: ComponentFixture<DisplayStocksCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayStocksCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStocksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
