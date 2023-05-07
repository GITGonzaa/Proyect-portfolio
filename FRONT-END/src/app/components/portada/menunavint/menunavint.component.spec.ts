import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenunavintComponent } from './menunavint.component';

describe('MenunavintComponent', () => {
  let component: MenunavintComponent;
  let fixture: ComponentFixture<MenunavintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenunavintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenunavintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
