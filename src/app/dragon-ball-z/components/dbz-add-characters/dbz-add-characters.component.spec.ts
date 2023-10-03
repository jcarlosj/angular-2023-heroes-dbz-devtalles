import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzAddCharactersComponent } from './dbz-add-characters.component';

describe('DbzAddCharactersComponent', () => {
  let component: DbzAddCharactersComponent;
  let fixture: ComponentFixture<DbzAddCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbzAddCharactersComponent]
    });
    fixture = TestBed.createComponent(DbzAddCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
