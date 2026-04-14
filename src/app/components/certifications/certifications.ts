import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Award, CheckCircle, ExternalLink, Linkedin } from 'lucide-angular';

interface Certification {
  title: string;
  issuer: string;
  color: string;
  credentialUrl?: string;
  linkedIn?: boolean;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class CertificationsComponent {
  readonly Award = Award;
  readonly CheckCircle = CheckCircle;
  readonly ExternalLink = ExternalLink;
  readonly Linkedin = Linkedin;

  certifications: Certification[] = [
    {
      title: 'AWS Generative AI — Cloud Technology & Services Concepts',
      issuer: 'Amazon Web Services (AWS)',
      color: '#FF9900',
      credentialUrl: '#',
    },
    {
      title: 'MongoDB Python Developer Path',
      issuer: 'MongoDB University',
      color: '#00ED64',
      credentialUrl: '#',
    },
    {
      title: 'API Fundamentals Student Expert',
      issuer: 'Postman',
      color: '#FF6C37',
      credentialUrl: '#',
    },
    {
      title: 'Supervised Learning with scikit-learn',
      issuer: 'DataCamp',
      color: '#03EF62',
      credentialUrl: '#',
    },
  ];

  linkedInCertifications = [
    {
      title: 'Your LinkedIn Certification 1',
      issuer: 'Issuing Organization',
      issueDate: 'Jan 2026',
      credentialUrl: 'https://linkedin.com/in/sharmaaman26',
    },
    // Add your LinkedIn certifications here manually
    // LinkedIn doesn't provide a public API, so you need to add them manually
  ];

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/sharmaaman012/details/certifications/', '_blank');
  }
}
