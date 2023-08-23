import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicStoragePage } from './ionic-storage.page';

describe('IonicStoragePage', () => {
  let component: IonicStoragePage;
  let fixture: ComponentFixture<IonicStoragePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IonicStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
