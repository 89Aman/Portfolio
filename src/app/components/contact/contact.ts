import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Mail, ExternalLink, Send, MessageCircle } from 'lucide-angular';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
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
        query('.contact-card', [
          style({ opacity: 0, transform: 'scale(0.9) translateY(50px)' }),
          stagger(150, [
            animate('500ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ContactComponent {
  readonly MessageCircle = MessageCircle;
  readonly Send = Send;
  readonly ExternalLink = ExternalLink;

  contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shasarita23@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&to=shasarita23@gmail.com',
      color: '#ea4335',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sharmaaman012',
      href: 'https://linkedin.com/in/sharmaaman012',
      color: '#0077b5',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '89Aman',
      href: 'https://github.com/89Aman',
      color: '#6e5494',
    },
  ];

  hoveredIndex: number | null = null;
}
