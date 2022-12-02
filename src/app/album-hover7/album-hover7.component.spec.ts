import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumHover7Component } from './album-hover7.component';

describe('AlbumHover7Component', () => {
  let component: AlbumHover7Component;
  let fixture: ComponentFixture<AlbumHover7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumHover7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumHover7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
