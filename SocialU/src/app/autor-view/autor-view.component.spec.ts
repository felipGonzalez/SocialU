import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorViewComponent } from './autor-view.component';

describe('AutorViewComponent', () => {
  let component: AutorViewComponent;
  let fixture: ComponentFixture<AutorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
