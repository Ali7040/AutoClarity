import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsArticlesComponent } from './blogs-articles.component';

describe('BlogsArticlesComponent', () => {
  let component: BlogsArticlesComponent;
  let fixture: ComponentFixture<BlogsArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
