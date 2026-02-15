import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Rocket, Users, Heart } from 'lucide-angular';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
  animations: [
    trigger('reveal', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerSkills', [
      transition(':enter', [
        query('.skill-tag', [
          style({ opacity: 0, transform: 'scale(0.8)' }),
          stagger(50, [
            animate('400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutComponent {
  readonly Rocket = Rocket;
  readonly Users = Users;
  readonly Heart = Heart;

  skills = [
    { category: 'Languages', items: ['Python', 'Java', 'C++', 'C'] },
    { category: 'ML/AI', items: ['Scikit-learn', 'Pandas', 'NumPy'] },
    { category: 'Web Frameworks', items: ['Django', 'Flask', 'FastAPI'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Terraform'] },
    { category: 'Tools', items: ['Git', 'Postman', 'Nginx'] },
  ];

  highlights = [
    { icon: Rocket, text: 'Working on Self-Development' },
    { icon: Users, text: 'Open to ML Collaborations' },
    { icon: Heart, text: 'Mozilla Common Voice Contributor' },
  ];

  hoveredSkill: string | null = null;
}
