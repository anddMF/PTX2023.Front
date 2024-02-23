import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsContainerComponent } from './positions-container.component';

describe('PositionsContainerComponent', () => {
  let component: PositionsContainerComponent;
  let fixture: ComponentFixture<PositionsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionsContainerComponent]
    });
    fixture = TestBed.createComponent(PositionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
