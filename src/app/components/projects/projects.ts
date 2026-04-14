import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, ExternalLink, Code2 } from 'lucide-angular';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

type ProjectLink = {
  label: string;
  href: string;
  type: 'github' | 'live';
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  categories: string[];
  links: ProjectLink[];
  featured: boolean;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('reveal', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerCards', [
      transition(':enter', [
        query('.project-card', [
          style({ opacity: 0, transform: 'translateY(50px) rotateX(-15deg)' }),
          stagger(100, [
            animate('500ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'translateY(0) rotateX(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProjectsComponent {
  readonly Github = Github;
  readonly ExternalLink = ExternalLink;
  readonly Code2 = Code2;

  projects: Project[] = [
    {
      title: 'Knowledge Vault',
      description: 'A Personal Semantic Search Engine that uses RAG technology to index and search through personal documents with AI-powered synthesis.',
      tech: ['Python', 'GCP', 'Cloud Run', 'ChromaDB', 'RAG'],
      categories: ['AI/ML', 'Backend', 'Cloud'],
      links: [
        {
          label: 'View on GitHub',
          href: 'https://github.com/89Aman/Personal-Search-Engine',
          type: 'github'
        }
      ],
      featured: true,
    },
    {
      title: 'CampusFix',
      description: 'A Smart Campus Maintenance & Safety App designed to streamline reporting and resolution of campus issues.',
      tech: ['Flutter', 'FastAPI', 'GCP', 'Supabase'],
      categories: ['Fullstack', 'Mobile'],
      links: [
        {
          label: 'Live Demo',
          href: 'https://campus-fix-website-345u.vercel.app',
          type: 'live'
        }
      ],
      featured: true,
    },
    {
      title: 'SkillSnap',
      description: 'An AI-powered project for The Forge Hackathon, leveraging Gemini API and FastAPI for intelligent skill assessment.',
      tech: ['Angular', 'FastAPI', 'Gemini API', 'Piston API'],
      categories: ['Hackathon', 'AI/ML', 'Fullstack'],
      links: [
        {
          label: 'View on GitHub',
          href: 'https://github.com/89Aman/SkillSnap',
          type: 'github'
        }
      ],
      featured: true,
    },
    {
      title: 'RAG-DEMO',
      description: 'A demonstration of RAG technology transforming static PDF documents into interactive conversational interfaces.',
      tech: ['Python', 'Gemini-API', 'GenAI', 'RAG'],
      categories: ['AI/ML', 'Demo'],
      links: [
        {
          label: 'View on GitHub',
          href: 'https://github.com/89Aman/RAG-DEMO',
          type: 'github'
        }
      ],
      featured: true,
    },
    {
      title: 'Material Demand Forecasting',
      description: 'A predictive modeling project focused on forecasting material demand using historical data and ML algorithms.',
      tech: ['Python', 'TypeScript', 'Machine Learning'],
      categories: ['AI/ML', 'Data'],
      links: [
        {
          label: 'View on GitHub',
          href: 'https://github.com/89Aman/Material-Demand-Forecasting',
          type: 'github'
        }
      ],
      featured: false,
    },
  ];

  filters: string[] = ['All'];
  activeFilter = 'All';
  featuredCount = this.projects.filter(project => project.featured).length;
  totalCount = this.projects.length;

  constructor() {
    const categorySet = new Set<string>();
    this.projects.forEach(project => {
      project.categories.forEach(category => categorySet.add(category));
    });
    this.filters = ['All', ...Array.from(categorySet)];
  }

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return this.projects;
    }

    return this.projects.filter(project => project.categories.includes(this.activeFilter));
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
