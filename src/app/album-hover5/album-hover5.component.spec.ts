import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumHover5Component } from './album-hover5.component';

describe('AlbumHover5Component', () => {
  let component: AlbumHover5Component;
  let fixture: ComponentFixture<AlbumHover5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumHover5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumHover5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
