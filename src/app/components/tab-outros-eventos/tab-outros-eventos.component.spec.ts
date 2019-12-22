import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOutrosEventosComponent } from './tab-outros-eventos.component';

describe('TabOutrosEventosComponent', () => {
  let component: TabOutrosEventosComponent;
  let fixture: ComponentFixture<TabOutrosEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabOutrosEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOutrosEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
