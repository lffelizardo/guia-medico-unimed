import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDescontosComponent } from './tab-descontos.component';

describe('TabDescontosComponent', () => {
  let component: TabDescontosComponent;
  let fixture: ComponentFixture<TabDescontosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDescontosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDescontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
