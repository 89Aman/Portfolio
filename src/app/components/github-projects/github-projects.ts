import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Star, GitFork, ExternalLink, TrendingUp } from 'lucide-angular';
import { GitHubService } from '../../services/github.service';

@Component({
  selector: 'app-github-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './github-projects.html',
  styleUrl: './github-projects.css',
})
export class GithubProjectsComponent {
  githubService = inject(GitHubService);

  readonly Github = Github;
  readonly Star = Star;
  readonly GitFork = GitFork;
  readonly ExternalLink = ExternalLink;
  readonly TrendingUp = TrendingUp;

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 30) return 'Updated recently';
    if (diffDays < 365) return `Updated ${Math.floor(diffDays / 30)} months ago`;
    return `Updated ${Math.floor(diffDays / 365)} year(s) ago`;
  }

  getLanguageColor(language: string | null): string {
    const colors: Record<string, string> = {
      'Python': '#3572A5',
      'TypeScript': '#2B7489',
      'JavaScript': '#F1E05A',
      'Dart': '#00B4AB',
      'Java': '#b07219',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
    };
    return colors[language || ''] || '#797876';
  }
}
