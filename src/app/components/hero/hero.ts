import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowDown, Download, Github, Linkedin, Mail, Terminal } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly RESUME_URL = 'https://drive.usercontent.google.com/u/0/uc?id=1LO0fVyxn3xZ_yaNzM4fX9Y1Dhz4KtrAY&export=download';
  readonly roles = [
    'Software Engineer',
    'Backend Engineer',
    'Cloud-Native Developer',
    'GCP + AWS Practitioner',
  ];

  readonly ArrowDown = ArrowDown;
  readonly Download = Download;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Terminal = Terminal;
  readonly EMAIL_ADDRESS = "shasarita23@gmail.com";
  socialLinks = [
    { icon: Github, href: 'https://github.com/89Aman', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sharmaaman012/', label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${this.EMAIL_ADDRESS}`, label: 'Email' },
  ];

  displayRole = signal('');
  private roleIndex = 0;
  private isTyping = true;
  private typingTimer: ReturnType<typeof setTimeout> | null = null;

  terminalLines = [
    { prompt: '$', command: 'aman --status', output: null },
    { prompt: '>', command: 'Name:     Aman Sharma', output: null },
    { prompt: '>', command: 'Role:     Python Dev & Cloud Engineer', output: null },
    { prompt: '>', command: 'Location: Raipur, CG, India', output: null },
    { prompt: '>', command: 'Stack:    FastAPI · GCP · Angular · RAG systems', output: null },
    { prompt: '>', command: 'Status:   Open to internships & full-time roles', output: null },
    { prompt: '>', command: 'Org:      Noventra-labs', output: null },
  ];

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    if (this.typingTimer) clearTimeout(this.typingTimer);
  }

  private startTypingAnimation() {
    const currentRole = this.roles[this.roleIndex];
    if (this.isTyping) {
      if (this.displayRole().length < currentRole.length) {
        this.displayRole.set(currentRole.slice(0, this.displayRole().length + 1));
        this.typingTimer = setTimeout(() => this.startTypingAnimation(), 50);
      } else {
        this.isTyping = false;
        this.typingTimer = setTimeout(() => this.startTypingAnimation(), 2500);
      }
    } else {
      if (this.displayRole().length > 0) {
        this.displayRole.set(this.displayRole().slice(0, -1));
        this.typingTimer = setTimeout(() => this.startTypingAnimation(), 30);
      } else {
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.isTyping = true;
        this.typingTimer = setTimeout(() => this.startTypingAnimation(), 400);
      }
    }
  }

  scrollToSection(event: Event, targetId: string) {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }
}
