import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideManagerComponent } from './aside-manager.component';

describe('AsideManagerComponent', () => {
  let component: AsideManagerComponent;
  let fixture: ComponentFixture<AsideManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
