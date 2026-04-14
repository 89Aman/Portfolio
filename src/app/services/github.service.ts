import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  homepage: string | null;
}

@Injectable({ providedIn: 'root' })
export class GitHubService {
  private readonly GITHUB_API = 'https://api.github.com/users/89Aman/repos?sort=updated&per_page=20';

  repos = signal<GitHubRepo[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {
    this.fetchRepos();
  }

  fetchRepos() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<GitHubRepo[]>(this.GITHUB_API).subscribe({
      next: (data) => {
        const repos = data.filter(repo => !repo.fork && repo.name !== '89Aman');
        this.repos.set(repos);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to fetch repositories');
        this.loading.set(false);
        console.error('GitHub API error:', err);
      },
    });
  }

  getTopProjects(count: number = 6) {
    return computed(() => {
      const allRepos = this.repos();
      return allRepos
        .filter(repo => repo.description && repo.description.length > 0)
        .slice(0, count);
    });
  }
}
