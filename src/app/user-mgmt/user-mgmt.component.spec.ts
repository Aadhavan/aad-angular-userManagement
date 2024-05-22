import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMgmtComponent } from './user-mgmt.component';

describe('UserMgmtComponent', () => {
  let component: UserMgmtComponent;
  let fixture: ComponentFixture<UserMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
