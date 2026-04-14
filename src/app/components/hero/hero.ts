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
  readonly RESUME_URL = 'https://drive.usercontent.google.com/u/0/uc?id=13iSWjWB922ps7UeKbW4vCeQDFJFSgm4B&export=download';

  readonly roles = [
    'RAG Systems Builder',
    'FastAPI Backend Engineer',
    'Cloud-Native Developer',
    'GCP + AWS Practitioner',
  ];

  readonly ArrowDown = ArrowDown;
  readonly Download = Download;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Terminal = Terminal;

  socialLinks = [
    { icon: Github, href: 'https://github.com/89Aman', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sharmaaman26', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shasarita23@gmail.com', label: 'Email' },
  ];

  displayRole = signal('');
  private roleIndex = 0;
  private isTyping = true;
  private typingTimer: ReturnType<typeof setTimeout> | null = null;

  terminalLines = [
    { prompt: '$', command: 'aman --status', output: null },
    { prompt: '>', command: 'Name:     Aman Sharma', output: null },
    { prompt: '>', command: 'Role:     Python Dev & ML Engineer', output: null },
    { prompt: '>', command: 'Location: Raipur, CG, India', output: null },
    { prompt: '>', command: 'Stack:    FastAPI · GCP · Gemini AI · RAG', output: null },
    { prompt: '>', command: 'Status:   Open to internships & collabs', output: null },
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
