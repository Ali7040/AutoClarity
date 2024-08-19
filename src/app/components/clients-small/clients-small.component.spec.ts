import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSmallComponent } from './clients-small.component';

describe('ClientsSmallComponent', () => {
  let component: ClientsSmallComponent;
  let fixture: ComponentFixture<ClientsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
