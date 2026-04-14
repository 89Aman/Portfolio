import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Rocket, Users, Heart, Code2, Database, Cloud, Terminal, Wrench } from 'lucide-angular';

interface LanguageSkill {
  name: string;
  level: number;
}

interface Category {
  icon: any;
  name: string;
  color: string;
  languageSkills?: LanguageSkill[];
  toolSkills?: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  readonly Code2 = Code2;
  readonly Database = Database;
  readonly Cloud = Cloud;
  readonly Terminal = Terminal;
  readonly Wrench = Wrench;
  readonly Rocket = Rocket;
  readonly Users = Users;
  readonly Heart = Heart;

  stats = [
    { icon: Rocket, value: '3+', label: 'Major Projects' },
    { icon: Heart, value: '4', label: 'Certifications' },
    { icon: Code2, value: '24', label: 'GitHub Repos' },
    { icon: Cloud, value: '2', label: 'Cloud Platforms' },
  ];

  skillCategories: Category[] = [
    {
      icon: Terminal,
      name: 'Languages',
      color: '#4F98A3',
      languageSkills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 70 },
        { name: 'Dart', level: 40 },
        { name: 'TypeScript', level: 45 },
      ],
    },
    {
      icon: Code2,
      name: 'Frameworks',
      color: '#6DBF8F',
      toolSkills: ['FastAPI', 'Angular 17', 'Flutter', 'Flask', 'PyTorch', 'scikit-learn'],
    },
    {
      icon: Database,
      name: 'Data & AI/ML',
      color: '#8B7EC8',
      toolSkills: ['RAG Architectures', 'Semantic Search', 'Gemini AI', 'ChromaDB', 'Pandas', 'NumPy', 'LangChain'],
    },
    {
      icon: Cloud,
      name: 'Cloud & DevOps',
      color: '#F59E42',
      toolSkills: ['GCP (Cloud Run, Vertex AI)', 'AWS (EC2, S3, Lambda)', 'Docker', 'GitHub Actions', 'Linux'],
    },
    {
      icon: Wrench,
      name: 'Databases & Tools',
      color: '#E879F9',
      toolSkills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Git', 'Postman', 'JWT', 'Authlib'],
    },
  ];

  values = [
    'RAG / LLMs',
    'FastAPI',
    'GCP',
    'AWS',
    'Docker',
    'ML Engineering',
    'Open Source',
    'Hackathons',
  ];
}
