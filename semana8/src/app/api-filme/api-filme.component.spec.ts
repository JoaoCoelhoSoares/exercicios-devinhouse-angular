import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFilmeComponent } from './api-filme.component';

describe('ApiFilmeComponent', () => {
  let component: ApiFilmeComponent;
  let fixture: ComponentFixture<ApiFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
