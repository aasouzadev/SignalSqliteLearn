import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalStorePage } from './local-store.page';

describe('LocalStorePage', () => {
  let component: LocalStorePage;
  let fixture: ComponentFixture<LocalStorePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocalStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
