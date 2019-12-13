import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Header should contain field first name', () => {
    const inEl = fixture.debugElement.query(By.css('#firstName'));
    expect(inEl.nativeElement.innerHTML).toBe('First Name');
  });

  it('Header should contain field last name', () => {
    const inEl = fixture.debugElement.query(By.css('#lastName'));
    expect(inEl.nativeElement.innerHTML).toBe('Last Name');
  });

  it('Header should contain field email', () => {
    const inEl = fixture.debugElement.query(By.css('#email'));
    expect(inEl.nativeElement.innerHTML).toBe('Email');
  });

  it('Header should contain field email', () => {
    const inEl = fixture.debugElement.query(By.css('#email'));
    expect(inEl.nativeElement.innerHTML).toBe('Email');
  });

  it('Header should contain field status', () => {
    const inEl = fixture.debugElement.query(By.css('#status'));
    expect(inEl.nativeElement.innerHTML).toBe('Status');
  });

  it('Header should contain field phone', () => {
    const inEl = fixture.debugElement.query(By.css('#phone'));
    expect(inEl.nativeElement.innerHTML).toBe('Phone');
  });
});
