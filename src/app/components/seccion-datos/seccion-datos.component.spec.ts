import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionDatosComponent } from './seccion-datos.component';

describe('SeccionDatosComponent', () => {
  let component: SeccionDatosComponent;
  let fixture: ComponentFixture<SeccionDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
