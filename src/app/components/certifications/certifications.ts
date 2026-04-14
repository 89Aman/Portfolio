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
      issuer: 'Amazon Web Services Training and Certification',
      color: '#FF9900',
      credentialUrl: 'https://www.credly.com/badges/3f9e44c3-e440-457d-afdd-a1919c400e2b/public_url',
    },
    {
      title: 'Machine learning Foundations',
      issuer: 'Amazon Web Services Training and Certification',
      color: '#acf5c9ff',
      credentialUrl: 'https://www.credly.com/badges/3f9e44c3-e440-457d-afdd-a1919c400e2b',
    },
    {
      title: 'API Fundamentals Student Expert',
      issuer: 'Postman',
      color: '#FF6C37',
      credentialUrl: 'https://www.linkedin.com/in/sharmaaman012/overlay/Certifications/1841701237/treasury/?profileId=ACoAAErYaFYBULxleoZBiBlk6sdeuO34h0vq8G0',
    },
    {
      title: 'Gemini Certified : University Student',
      issuer: 'Google',
      color: '#036defff',
      credentialUrl: 'https://www.linkedin.com/in/sharmaaman012/overlay/Certifications/715968225/treasury/?profileId=ACoAAErYaFYBULxleoZBiBlk6sdeuO34h0vq8G0',
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
