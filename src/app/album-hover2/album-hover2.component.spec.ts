import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumHover2Component } from './album-hover2.component';

describe('AlbumHover2Component', () => {
  let component: AlbumHover2Component;
  let fixture: ComponentFixture<AlbumHover2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumHover2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumHover2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
