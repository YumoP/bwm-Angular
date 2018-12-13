import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalHeaderComponent } from './rental-header.component';

describe('RentalHeaderComponent', () => {
  let component: RentalHeaderComponent;
  let fixture: ComponentFixture<RentalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
