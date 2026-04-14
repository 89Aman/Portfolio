import { computed, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app';
import { GitHubRepo, GitHubService } from './services/github.service';

class MockGitHubService {
  repos = signal<GitHubRepo[]>([
    {
      name: 'demo-repo',
      description: 'Test repository for unit tests',
      html_url: 'https://github.com/89Aman/demo-repo',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      language: 'TypeScript',
      updated_at: new Date().toISOString(),
      topics: [],
      homepage: null,
    },
  ]);
  loading = signal(false);
  error = signal<string | null>(null);
  fetchRepos() {}
  getTopProjects(count: number = 6) {
    return computed(() => this.repos().slice(0, count));
  }
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: GitHubService, useClass: MockGitHubService }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the hero section', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-hero')).toBeTruthy();
  });
});
