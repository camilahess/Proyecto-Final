import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumHover1Component } from './album-hover1.component';

describe('AlbumHover1Component', () => {
  let component: AlbumHover1Component;
  let fixture: ComponentFixture<AlbumHover1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumHover1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumHover1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
