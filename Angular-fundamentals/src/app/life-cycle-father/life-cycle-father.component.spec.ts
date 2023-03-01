import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleFatherComponent } from './life-cycle-father.component';

describe('LifeCycleFatherComponent', () => {
  let component: LifeCycleFatherComponent;
  let fixture: ComponentFixture<LifeCycleFatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleFatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
