import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAndreviewComponent } from './result-andreview.component';

describe('ResultAndreviewComponent', () => {
  let component: ResultAndreviewComponent;
  let fixture: ComponentFixture<ResultAndreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultAndreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAndreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
