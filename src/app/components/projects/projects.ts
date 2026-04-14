import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, ExternalLink, Code2, Cpu, Cloud, Laptop } from 'lucide-angular';

interface Project {
  title: string;
  description: string;
  fullDescription: string[];
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  category: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  readonly Github = Github;
  readonly ExternalLink = ExternalLink;
  readonly Code2 = Code2;
  readonly Cpu = Cpu;
  readonly Cloud = Cloud;
  readonly Laptop = Laptop;

  activeFilter = signal('All');

  filters = ['All', 'AI/ML', 'Full-Stack', 'Cloud', 'Hackathon'];

  projects: Project[] = [
    {
      title: 'Knowledge Vault',
      description: 'Personal semantic search engine with RAG pipeline. Hybrid scoring with 40% relevance improvement.',
      fullDescription: [
        'Engineered production-grade semantic search system with RAG pipeline',
        'Hybrid scoring: vector similarity + keyword density + temporal recency → 40% relevance improvement',
        'JWT auth + OAuth 2.0 using Authlib',
        'Deployed on GCP Cloud Run with Docker; <200ms query response times',
      ],
      tech: ['FastAPI', 'React', 'ChromaDB', 'Google Gemini', 'sentence-transformers', 'GCP', 'Docker', 'JWT'],
      github: 'https://github.com/89Aman/Knowledge-vault',
      featured: true,
      category: ['AI/ML', 'Cloud', 'Full-Stack'],
    },
    {
      title: 'CampusFix',
      description: 'Smart campus facility management platform. Built for GDG Solution Challenge with 500+ concurrent requests.',
      fullDescription: [
        'FastAPI backend handling 500+ concurrent requests with real-time status workflows',
        'Flutter mobile app (Android/iOS): camera capture, GPS location tagging',
        'Angular 17 admin dashboard with role-based access control',
        'Supabase PostgreSQL + OAuth 2.0 + JWT, deployed on GCP Cloud Run',
      ],
      tech: ['FastAPI', 'Flutter', 'Angular 17', 'PostgreSQL', 'Supabase', 'GCP', 'Docker', 'JWT'],
      github: 'https://github.com/89Aman/CampusFix',
      featured: true,
      category: ['Full-Stack', 'Cloud', 'Hackathon'],
    },
    {
      title: 'RAG-DEMO',
      description: 'FDA drug assistant using Google RAG architecture. Transforms static PDFs into conversational interfaces.',
      fullDescription: [
        'Automated PDF indexing pipeline for multiple drug labels via Google File Search API',
        'Semantic chunking enables cross-document drug interaction queries',
        'Source attribution system with grounding metadata and citations',
        'Sub-second retrieval latency; transparent, verifiable AI responses',
      ],
      tech: ['Python', 'Google GenAI SDK', 'Gemini 2.5 Flash', 'File Search API', 'RAG'],
      github: 'https://github.com/89Aman/RAG-DEMO',
      featured: true,
      category: ['AI/ML'],
    },
    {
      title: 'SkillSnap',
      description: 'AI skill assessment platform with live code execution. Built in 24hrs for The Forge Hackathon.',
      fullDescription: [
        'Angular frontend + FastAPI backend architecture',
        'Gemini API for intelligent skill gap analysis',
        'Piston API for sandboxed code execution in multiple languages',
        'Gemini Cloud SQL for persistent user data',
      ],
      tech: ['Angular', 'FastAPI', 'Gemini API', 'Piston API', 'HTML'],
      github: 'https://github.com/89Aman/SkillSnap',
      featured: true,
      category: ['AI/ML', 'Hackathon', 'Full-Stack'],
    },
    {
      title: 'Movie Recommendation',
      description: 'Flutter frontend with TensorFlow-powered collaborative filtering model for movie recommendations.',
      fullDescription: [
        'TensorFlow/Keras collaborative filtering recommendation model',
        'Flutter frontend consuming the model via API',
        'Full pipeline: data preprocessing → model training → API serving → mobile UI',
      ],
      tech: ['Flutter', 'TensorFlow', 'Python', 'Jupyter Notebook', 'Dart'],
      github: 'https://github.com/89Aman/Fullstack-movie-recommendation-system',
      featured: false,
      category: ['AI/ML', 'Full-Stack', 'Mobile'],
    },
    {
      title: 'Material Demand Forecasting',
      description: 'Demand forecasting system using time series and ML techniques to predict material requirements.',
      fullDescription: [
        'Time series forecasting for material/inventory demand',
        'ML techniques for predictive analysis',
        'Data-driven decision support system',
      ],
      tech: ['TypeScript', 'Python', 'ML Forecasting'],
      github: 'https://github.com/89Aman/Material-Demand-Forecasting',
      featured: false,
      category: ['AI/ML', 'Data Science'],
    },
    {
      title: 'Text Classification',
      description: 'SVM-based text classifier predicting IAB content categories. Clean sklearn pipeline with TF-IDF.',
      fullDescription: [
        'Support Vector Machine classifier trained on IAB content taxonomy',
        'Feature engineering with TF-IDF vectorization',
        'Model serialization with joblib for API serving',
        'Metrics: precision, recall, F1 reported per category',
      ],
      tech: ['Python', 'scikit-learn', 'pandas', 'joblib', 'SVM', 'TF-IDF'],
      github: 'https://github.com/89Aman/text-classification-model',
      featured: false,
      category: ['AI/ML', 'ML Engineering'],
    },
    {
      title: 'SortViz',
      description: 'Interactive sorting algorithm visualizer in vanilla JS. Watch bubble, merge, quick sort animate in real time.',
      fullDescription: [
        'Visual demonstration of common sorting algorithms',
        'Bubble sort, merge sort, quick sort implementations',
        'Step-by-step animation for learning',
      ],
      tech: ['JavaScript', 'HTML', 'CSS', 'Algorithms'],
      github: 'https://github.com/89Aman/SortViz',
      featured: false,
      category: ['Algorithms', 'Tools'],
    },
    {
      title: 'Library Management',
      description: 'Full-stack web app for managing books, users, and borrowing records with Flask + MongoDB.',
      fullDescription: [
        'Flask web framework + MongoDB via pymongo',
        'User authentication with bcrypt password hashing',
        'CRUD operations for books and borrowing records',
        'Role-based access (admin vs. member)',
      ],
      tech: ['Python', 'Flask', 'MongoDB', 'pymongo', 'bcrypt'],
      github: 'https://github.com/89Aman/library-mangement-system',
      featured: false,
      category: ['Full-Stack', 'Backend'],
    },
  ];

  filteredProjects = signal<Project[]>(this.projects);

  filterProjects(filter: string) {
    this.activeFilter.set(filter);
    if (filter === 'All') {
      this.filteredProjects.set(this.projects);
    } else {
      this.filteredProjects.set(
        this.projects.filter(p => p.category.includes(filter))
      );
    }
  }
}
