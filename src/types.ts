export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Android' | 'AI & Dev Tools' | 'Web & Portals';
  problem: string;
  whyIBuiltIt: string;
  myContribution: string[];
  technologies: string[];
  challenges: string[];
  whatILearned: string[];
  futureScope: string[];
  githubUrl: string;
  demoUrl?: string;
  screenshotAspect: string;
  previewGradient: string;
  keyMetricHighlight?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'Internship' | 'Ambassadorship' | 'Student Organization';
  period: string;
  location: string;
  description: string[];
  skillsUsed: string[];
  isVerified: boolean;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    iconName?: string;
    levelTag?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

