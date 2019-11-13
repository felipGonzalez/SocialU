import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialUComponent } from './social-u.component';

describe('SocialUComponent', () => {
  let component: SocialUComponent;
  let fixture: ComponentFixture<SocialUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
