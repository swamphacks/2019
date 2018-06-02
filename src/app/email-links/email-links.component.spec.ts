import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailLinksComponent } from './email-links.component';

describe('EmailLinksComponent', () => {
  let component: EmailLinksComponent;
  let fixture: ComponentFixture<EmailLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
