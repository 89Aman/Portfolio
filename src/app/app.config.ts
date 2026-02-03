import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import {
  LucideAngularModule,
  Menu, X, Sparkles, ArrowDown, Download, Github, Linkedin, Mail,
  Search, ShieldCheck, Rocket, Brain, BarChart3, Film, Activity,
  BookOpen, Plug, Calculator, Database, Gamepad2, ListTodo, Coffee,
  MessageCircle, Send, ExternalLink, Heart, Code2, Users
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Menu, X, Sparkles, ArrowDown, Download, Github, Linkedin, Mail,
        Search, ShieldCheck, Rocket, Brain, BarChart3, Film, Activity,
        BookOpen, Plug, Calculator, Database, Gamepad2, ListTodo, Coffee,
        MessageCircle, Send, ExternalLink, Heart, Code2, Users
      })
    )
  ]
};
