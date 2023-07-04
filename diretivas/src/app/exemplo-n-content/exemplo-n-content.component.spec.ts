import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNContentComponent } from './exemplo-n-content.component';

describe('ExemploNContentComponent', () => {
  let component: ExemploNContentComponent;
  let fixture: ComponentFixture<ExemploNContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploNContentComponent]
    });
    fixture = TestBed.createComponent(ExemploNContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
