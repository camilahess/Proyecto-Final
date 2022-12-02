import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumHover3Component } from './album-hover3.component';

describe('AlbumHover3Component', () => {
  let component: AlbumHover3Component;
  let fixture: ComponentFixture<AlbumHover3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumHover3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumHover3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
