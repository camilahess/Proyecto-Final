import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumHover4Component } from './album-hover4.component';

describe('AlbumHover4Component', () => {
  let component: AlbumHover4Component;
  let fixture: ComponentFixture<AlbumHover4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumHover4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumHover4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
