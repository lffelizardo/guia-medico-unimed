import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGlosasComponent } from './tab-glosas.component';

describe('TabGlosasComponent', () => {
  let component: TabGlosasComponent;
  let fixture: ComponentFixture<TabGlosasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGlosasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGlosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
