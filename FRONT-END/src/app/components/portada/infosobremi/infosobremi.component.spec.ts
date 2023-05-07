import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosobremiComponent } from './infosobremi.component';

describe('InfosobremiComponent', () => {
  let component: InfosobremiComponent;
  let fixture: ComponentFixture<InfosobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
