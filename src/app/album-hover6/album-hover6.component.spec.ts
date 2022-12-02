import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumHover6Component } from './album-hover6.component';

describe('AlbumHover6Component', () => {
  let component: AlbumHover6Component;
  let fixture: ComponentFixture<AlbumHover6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumHover6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumHover6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
