import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHubComponent } from './home-hub.component';

describe('HomeHubComponent', () => {
  let component: HomeHubComponent;
  let fixture: ComponentFixture<HomeHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHubComponent]
    });
    fixture = TestBed.createComponent(HomeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
