import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleConsentComponent } from './google-consent.component';

describe('GoogleConsentComponent', () => {
  let component: GoogleConsentComponent;
  let fixture: ComponentFixture<GoogleConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleConsentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoogleConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
