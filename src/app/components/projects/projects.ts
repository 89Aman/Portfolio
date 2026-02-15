import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, ExternalLink, Film, Brain, BookOpen, Plug, Gamepad2, Code2, Rocket, ShieldCheck, Search, Database, BarChart3, Activity, Calculator, ListTodo, Coffee } from 'lucide-angular';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
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

  projects = [
    {
      title: 'Knowledge Vault',
      description: 'A Personal Semantic Search Engine that uses RAG technology to index and search through personal documents with AI-powered synthesis.',
      tech: ['Python', 'GCP', 'Cloud Run', 'ChromaDB', 'RAG'],
      github: 'https://github.com/89Aman/Personal-Search-Engine',
      featured: true,
    },
    {
      title: 'CampusFix',
      description: 'A Smart Campus Maintenance & Safety App designed to streamline reporting and resolution of campus issues.',
      tech: ['Flutter', 'FastAPI', 'GCP', 'Supabase'],
      github: 'https://campus-fix-website-345u.vercel.app',
      featured: true,
    },
    {
      title: 'SkillSnap',
      description: 'An AI-powered project for The Forge Hackathon, leveraging Gemini API and FastAPI for intelligent skill assessment.',
      tech: ['Angular', 'FastAPI', 'Gemini API', 'Piston API'],
      github: 'https://github.com/89Aman/SkillSnap',
      featured: true,
    },
    {
      title: 'RAG-DEMO',
      description: 'A demonstration of RAG technology transforming static PDF documents into interactive conversational interfaces.',
      tech: ['Python', 'Gemini-API', 'GenAI', 'RAG'],
      github: 'https://github.com/89Aman/RAG-DEMO',
      featured: true,
    },
    {
      title: 'Material Demand Forecasting',
      description: 'A predictive modeling project focused on forecasting material demand using historical data and ML algorithms.',
      tech: ['Python', 'TypeScript', 'Machine Learning'],
      github: 'https://github.com/89Aman/Material-Demand-Forecasting',
      featured: false,
    },
  ];

  hoveredIndex: number | null = null;
}
