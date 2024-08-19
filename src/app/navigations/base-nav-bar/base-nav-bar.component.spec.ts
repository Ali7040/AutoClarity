import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNavBarComponent } from './base-nav-bar.component';

describe('BaseNavBarComponent', () => {
  let component: BaseNavBarComponent;
  let fixture: ComponentFixture<BaseNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
