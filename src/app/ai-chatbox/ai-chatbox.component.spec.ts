import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIChatboxComponent } from './ai-chatbox.component';

describe('AIChatboxComponent', () => {
  let component: AIChatboxComponent;
  let fixture: ComponentFixture<AIChatboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AIChatboxComponent]
    });
    fixture = TestBed.createComponent(AIChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
