import { Component, OnInit, OnDestroy, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-angular';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface ParticleConfig {
  initialX: number;
  initialY: number;
  animateX: number;
  duration: number;
  delay: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  animations: [
    trigger('staggerFadeIn', [
      transition(':enter', [
        query('.fade-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly PORTFOLIO_OWNER = 'Aman Sharma';
  readonly RESUME_URL = 'https://drive.usercontent.google.com/uc?id=1JvenyodUaX2q-5WV-kXW1Xuu3jXt0ScN&export=download';

  readonly roles = [
    'Backend Engineer',
    'Python Developer',
    'Software Developer',
    'Open Source Contributor'
  ];

  readonly ArrowDown = ArrowDown;
  readonly Download = Download;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Sparkles = Sparkles;

  socialLinks = [
    { icon: Github, href: 'https://github.com/89Aman', label: 'GitHub', color: '#6e5494' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sharmaaman012', label: 'LinkedIn', color: '#0077b5' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&to=shasarita23@gmail.com', label: 'Email', color: '#ea4335' },
  ];

  displayText = '';
  private roleIndex = 0;
  private isTyping = true;
  private typingTimer: any;

  mousePosition = { x: 0, y: 0 };
  particleConfigs: ParticleConfig[] = [];

  constructor() {
    this.generateParticles();
  }

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimer);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mousePosition = {
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    };
  }

  private startTypingAnimation() {
    const currentRole = this.roles[this.roleIndex];

    if (this.isTyping) {
      if (this.displayText.length < currentRole.length) {
        this.displayText = currentRole.slice(0, this.displayText.length + 1);
        this.typingTimer = setTimeout(() => this.startTypingAnimation(), 100);
      } else {
        this.isTyping = false;
        this.typingTimer = setTimeout(() => this.startTypingAnimation(), 2000);
      }
    } else {
      if (this.displayText.length > 0) {
        this.displayText = this.displayText.slice(0, -1);
        this.typingTimer = setTimeout(() => this.startTypingAnimation(), 50);
      } else {
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.isTyping = true;
        this.typingTimer = setTimeout(() => this.startTypingAnimation(), 500);
      }
    }
  }

  private generateParticles() {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const height = typeof window !== 'undefined' ? window.innerHeight : 800;

    this.particleConfigs = Array(15).fill(0).map((_, i) => ({
      initialX: Math.random() * width,
      initialY: Math.random() * height,
      animateX: Math.random() * 50 - 25,
      duration: 4 + Math.random() * 2,
      delay: i * 0.3
    }));
  }

  scrollToSection(event: Event, targetId: string) {
    event.preventDefault();
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
