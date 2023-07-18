import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialProductosComponent } from './inicial-productos.component';

describe('InicialProductosComponent', () => {
  let component: InicialProductosComponent;
  let fixture: ComponentFixture<InicialProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicialProductosComponent]
    });
    fixture = TestBed.createComponent(InicialProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
