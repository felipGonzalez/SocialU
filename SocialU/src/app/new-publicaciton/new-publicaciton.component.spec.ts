import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPublicacitonComponent } from './new-publicaciton.component';

describe('NewPublicacitonComponent', () => {
  let component: NewPublicacitonComponent;
  let fixture: ComponentFixture<NewPublicacitonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPublicacitonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPublicacitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
