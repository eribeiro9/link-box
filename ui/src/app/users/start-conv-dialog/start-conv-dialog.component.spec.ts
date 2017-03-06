import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartConvDialogComponent } from './start-conv-dialog.component';

describe('StartConvDialogComponent', () => {
  let component: StartConvDialogComponent;
  let fixture: ComponentFixture<StartConvDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartConvDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartConvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
