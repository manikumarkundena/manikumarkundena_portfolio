import { ProjectCaseStudy, ExperienceItem, SkillGroup, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'Manikumar Kundena',
  role: 'Computer Science Undergraduate',
  institution: 'Siddaganga Institute of Technology',
  degree: 'Bachelor of Engineering in Computer Science & Engineering',
  batch: '2024–2028',
  cgpa: '9.58 / 10',
  location: 'Bengaluru, Karnataka',
  email: 'manikumarkundena@gmail.com',
  github: 'https://github.com/manikumarkundena',
  linkedin: 'https://linkedin.com/in/manikumarkundena',
  summary:
    'I am a Computer Science undergraduate at Siddaganga Institute of Technology who genuinely enjoys building practical software. I learn by building, enjoy solving real-world problems, and focus on creating useful software rather than flashy projects.',
  philosophies: [
    {
      title: 'Practicality Over Flash',
      description: 'Building software that solves tangible daily problems for real human users.',
    },
    {
      title: 'Learning by Building',
      description: 'Mastering algorithms, mobile design, and developer tools through hands-on implementation.',
    },
    {
      title: 'Honest Engineering',
      description: 'Understanding fundamentals thoroughly without over-promising or inventing fake complexity.',
    },
  ],
};

export const MY_INTERESTS = [
  {
    title: 'Artificial Intelligence',
    description: 'Exploring practical generative AI models, prompt engineering, and real-world NLP applications.',
  },
  {
    title: 'Android Development',
    description: 'Crafting responsive mobile experiences with modern Kotlin and Jetpack Compose UI architecture.',
  },
  {
    title: 'Developer Tools',
    description: 'Designing workflows, utilities, and portals that save time and reduce friction for developers.',
  },
  {
    title: 'Intelligent Automation',
    description: 'Automating repetitive administrative tasks and workflows to improve everyday efficiency.',
  },
  {
    title: 'Educational Technology',
    description: 'Building tools that simplify learning, career preparation, and knowledge assessment.',
  },
  {
    title: 'Productivity Software',
    description: 'Creating minimalist, distraction-free software focused on utility, clear layout, and speed.',
  },
  {
    title: 'Technology for Social Impact',
    description: 'Leveraging technology to create solutions for safety, community empowerment, and civic utility.',
  },
];

export const TECHNICAL_SKILLS_GROUPS: SkillGroup[] = [
  {
    category: 'Programming Languages',
    description: 'Core foundational languages for algorithms, software engineering, and mobile development.',
    skills: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'C' },
      { name: 'C++' },
    ],
  },
  {
    category: 'Android Development',
    description: 'Mobile user interface design, native Android ecosystem, and declarative layout.',
    skills: [
      { name: 'Kotlin' },
      { name: 'Jetpack Compose' },
      { name: 'Android Studio' },
    ],
  },
  {
    category: 'Web Development',
    description: 'Structured web technologies and modern utility-first CSS styling.',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    category: 'Backend & Services',
    description: 'Cloud databases, backend services, and structured REST API integrations.',
    skills: [
      { name: 'Firebase' },
      { name: 'Supabase' },
      { name: 'REST APIs' },
    ],
  },
  {
    category: 'Artificial Intelligence',
    description: 'LLM prompting, natural language processing fundamentals, and Google AI Studio prototyping.',
    skills: [
      { name: 'Generative AI' },
      { name: 'Prompt Engineering' },
      { name: 'NLP Fundamentals' },
      { name: 'Google AI Studio' },
    ],
  },
  {
    category: 'Tools & Platforms',
    description: 'Version control, code editors, graphic design tools, and deployment environments.',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Figma' },
      { name: 'Canva' },
      { name: 'Vercel' },
      { name: 'Render' },
    ],
  },
];

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'boostme',
    title: 'BoostMe',
    subtitle: 'Career preparation & skill self-assessment application',
    tagline: 'Empowering students to track career preparation through focused skill gap analysis.',
    category: 'AI & Dev Tools',
    problem:
      'Students and job seekers often struggle to pinpoint exactly which technical skills they are missing for specific job roles, leading to unfocused preparation and anxiety during placement seasons.',
    whyIBuiltIt:
      'I wanted to create a straightforward, structured tool that helps fellow students assess their readiness for technical roles by providing targeted actionable feedback rather than generic advice.',
    myContribution: [
      'Designed the clean, accessible user interface focusing on minimal distraction and readable feedback typography.',
      'Constructed prompt engineering workflows with Google AI Studio to evaluate skills against role descriptions.',
      'Integrated lightweight backend storage and API request handling for real-time skill breakdown results.',
    ],
    technologies: ['Generative AI', 'Prompt Engineering', 'Google AI Studio', 'JavaScript', 'HTML', 'Tailwind CSS', 'REST APIs', 'Vercel'],
    challenges: [
      'Structuring prompts that reliably yield consistent, structured, and constructive evaluation output without hallucinating candidate qualifications.',
      'Creating an intuitive UI that presents dense evaluation criteria in a calm, readable format.',
    ],
    whatILearned: [
      'Deepened my understanding of prompt design strategies, structured AI outputs, and token constraints.',
      'Gained hands-on experience in building clean, single-purpose web tools focused entirely on user clarity.',
    ],
    futureScope: [
      'Add customized study milestone roadmaps based on identified skill gaps.',
      'Enhance downloadable offline summary reports for student placement archives.',
    ],
    githubUrl: 'https://github.com/manikumarkundena/BoostMe',
    demoUrl: 'https://boostme.vercel.app',
    screenshotAspect: 'aspect-[16/10]',
    previewGradient: 'from-blue-600/10 via-indigo-500/5 to-amber-500/10',
    keyMetricHighlight: 'Tailored career feedback & structured evaluation',
  },
  {
    id: 'resume-relevance-checker',
    title: 'Resume Relevance Checker',
    subtitle: 'Targeted resume & job description matching tool',
    tagline: 'Quantifying match relevance between candidate resumes and job postings with actionable feedback.',
    category: 'AI & Dev Tools',
    problem:
      'Job applicants spend hours customizing resumes without knowing if their key skills align with ATS criteria or job description requirements.',
    whyIBuiltIt:
      'To build a simple, direct application that analyzes resume content against a job description, highlighting missing keywords and relevance scores to improve application effectiveness.',
    myContribution: [
      'Formulated textual parsing logic and prompt templates in Google AI Studio to measure keyword overlap and contextual alignment.',
      'Built a clean user interface with HTML, CSS, and Tailwind CSS allowing side-by-side text inputs and score displays.',
      'Handled REST API communication to deliver instant feedback upon submission.',
    ],
    technologies: ['Generative AI', 'Google AI Studio', 'Prompt Engineering', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Render'],
    challenges: [
      'Balancing string comparison logic with semantic NLP analysis so formatting variations do not skew relevance scores.',
      'Ensuring low latency when transmitting resume texts and job descriptions to processing endpoints.',
    ],
    whatILearned: [
      'How to effectively combine classical text processing techniques with modern Generative AI capabilities.',
      'The importance of transparent scoring indicators and actionable improvement suggestions in career software.',
    ],
    futureScope: [
      'Introduce section-by-section alignment breakdowns (e.g., Skills match vs. Experience match).',
      'Provide exportable suggestion lists for rapid resume iteration.',
    ],
    githubUrl: 'https://github.com/manikumarkundena/Resume-Relevance-Checker',
    demoUrl: 'https://resume-relevance-checker.onrender.com',
    screenshotAspect: 'aspect-[16/10]',
    previewGradient: 'from-amber-600/10 via-orange-500/5 to-blue-500/10',
    keyMetricHighlight: 'Instant match analysis & missing skill detection',
  },
  {
    id: 'rakshini',
    title: 'Rakshini',
    subtitle: 'Women safety & emergency response Android application',
    tagline: 'A reliable mobile application designed for quick emergency alerts and location sharing.',
    category: 'Android',
    problem:
      'In critical safety situations, navigating multi-step smartphone interfaces to alert trusted contacts takes too long and requires unnecessary friction.',
    whyIBuiltIt:
      'Driven by a desire to build technology for social impact, I developed Rakshini as a fast, single-tap Android application that enables users to send immediate location details to emergency contacts.',
    myContribution: [
      'Developed native Android user interfaces using Kotlin and Jetpack Compose in Android Studio.',
      'Integrated location services and SMS notification triggers for rapid emergency contact outreach.',
      'Utilized Firebase for backend data synchronization and safe user preference persistence.',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Firebase', 'REST APIs'],
    challenges: [
      'Designing an intuitive UI with zero ambiguity, ensuring emergency actions can be triggered effortlessly under stress.',
      'Managing device permissions and location service callbacks accurately across different Android API levels.',
    ],
    whatILearned: [
      'Mastered declarative layout principles with Jetpack Compose in native Android development.',
      'Gained deep practical appreciation for fault-tolerant mobile UI design where reliability is paramount.',
    ],
    futureScope: [
      'Implement background gesture shortcuts (such as double power button presses) for discreet emergency alerts.',
      'Incorporate offline SMS fallbacks when mobile data connections are unavailable.',
    ],
    githubUrl: 'https://github.com/manikumarkundena/Rakshini',
    screenshotAspect: 'aspect-[9/16]',
    previewGradient: 'from-emerald-600/10 via-teal-500/5 to-blue-500/10',
    keyMetricHighlight: 'Single-tap emergency alert & location sharing',
  },
  {
    id: 'scriptink-registration-portals',
    title: 'ScriptInk Registration Portals',
    subtitle: 'Web registration & management portals for student literary events',
    tagline: 'Streamlining event registrations and participant tracking for WritoFest & RAGE flagship events.',
    category: 'Web & Portals',
    problem:
      'College events like WritoFest and RAGE faced chaotic manual registration processes, leading to entry bottlenecks and lost participant information.',
    whyIBuiltIt:
      'As a technical team member at ScriptInk, I built custom web registration portals to digitize participant entries, validate inputs, and simplify administrative management for the organizers.',
    myContribution: [
      'Designed clean, responsive web forms using HTML, CSS, JavaScript, and Tailwind CSS.',
      'Integrated Supabase / Firebase backend for real-time registration data storage and entry validation.',
      'Created administrative data views to assist ScriptInk team leads in tracking event turnout.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Firebase', 'Supabase', 'Vercel'],
    challenges: [
      'Ensuring the registration portal handled concurrent spikes in mobile traffic during peak publicity hours.',
      'Enforcing strict form validation rules to prevent duplicate or corrupted registration records.',
    ],
    whatILearned: [
      'Hands-on experience in building, deploying, and maintaining production-ready web portals for real campus users.',
      'The value of responsive design and clear user feedback during high-concurrency registration windows.',
    ],
    futureScope: [
      'Automate QR code ticket generation for instant check-ins at venue entry doors.',
      'Integrate automated confirmation emails upon successful registration.',
    ],
    githubUrl: 'https://github.com/manikumarkundena/scriptink-portals',
    demoUrl: 'https://scriptink.vercel.app',
    screenshotAspect: 'aspect-[16/10]',
    previewGradient: 'from-indigo-600/10 via-blue-500/5 to-emerald-500/10',
    keyMetricHighlight: 'Digitized event check-ins & real-time participant database',
  },
  {
    id: 'finvision',
    title: 'FinVision',
    subtitle: 'Personal finance awareness & visual tracking tool',
    tagline: 'Helping users visualize income, expenses, and savings habits with clean graphical insights.',
    category: 'AI & Dev Tools',
    problem:
      'Many young adults find financial tracking tools overly complex, laden with banking jargon, or locked behind expensive subscriptions.',
    whyIBuiltIt:
      'FinVision was built to offer a calm, straightforward visual dashboard where users can input daily expenses and gain immediate, simple clarity on their financial health.',
    myContribution: [
      'Engineered responsive web interface components using HTML, CSS, JavaScript, and Tailwind CSS.',
      'Developed mathematical breakdown logic for income/expense categorizations.',
      'Configured local and Supabase cloud persistence for user budgeting logs.',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Supabase', 'Vercel'],
    challenges: [
      'Designing intuitive charts and visual representations that simplify budgeting without confusing the user.',
      'Managing client-side state efficiently for real-time calculation updates across multiple category cards.',
    ],
    whatILearned: [
      'Structuring clean data transformations for client-side financial summary visualizations.',
      'Designing calm, uncluttered interfaces for monetary data where legibility and trust matter.',
    ],
    futureScope: [
      'Add monthly goal budget forecasting and customized saving recommendations.',
      'Support downloadable CSV reports for personal offline accounting.',
    ],
    githubUrl: 'https://github.com/manikumarkundena/FinVision',
    demoUrl: 'https://finvision-app.vercel.app',
    screenshotAspect: 'aspect-[16/10]',
    previewGradient: 'from-sky-600/10 via-blue-500/5 to-teal-500/10',
    keyMetricHighlight: 'Visual budget breakdown & simplified expense logging',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-internship-studio',
    role: 'UI/UX & Web Development Intern',
    organization: 'Internship Studio',
    type: 'Internship',
    period: 'Internship Duration',
    location: 'Remote',
    description: [
      'Designed user interfaces and wireframes prioritizing usability, visual hierarchy, and responsive layout across desktop and mobile views.',
      'Built clean web components using HTML, CSS, JavaScript, and modern styling frameworks based on design specifications.',
      'Collaborated on improving user experience flows and conducting usability checks on web interfaces.',
    ],
    skillsUsed: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Figma', 'Canva'],
    isVerified: true,
  },
  {
    id: 'exp-google-ambassador',
    role: 'Google Student Ambassador',
    organization: 'Google Student Ambassador Program',
    type: 'Ambassadorship',
    period: '2024 – Present',
    location: 'Siddaganga Institute of Technology',
    description: [
      'Represented Google developer initiatives and technology awareness on campus as a Student Ambassador.',
      'Promoted participation in student technical events, developer ecosystem updates, and AI learning pathways.',
      'Served as a campus liaison for Google tools, developer resources, and student technology engagement.',
    ],
    skillsUsed: ['Google AI Studio', 'Generative AI', 'Community Outreach'],
    isVerified: true,
  },
  {
    id: 'exp-scriptink',
    role: 'Technical Team Member',
    organization: 'ScriptInk (Literary & Creative Student Club)',
    type: 'Student Organization',
    period: '2024 – Present',
    location: 'Siddaganga Institute of Technology',
    description: [
      'Contributed to the technical development of registration web portals for flagship college events including WritoFest and RAGE.',
      'Assisted in graphic design and visual asset creation using Figma and Canva for club promotions and digital portals.',
      'Managed participant data workflows and entry validation during live event registration campaigns.',
    ],
    skillsUsed: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Figma', 'Canva', 'Firebase', 'Supabase'],
    isVerified: true,
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-1',
    issuer: 'Siddaganga Institute of Technology',
    title: 'Academic Excellence Award (CGPA 9.58/10)',
    date: 'Computer Science & Engineering',
  },
  {
    id: 'cert-2',
    issuer: 'Internship Studio',
    title: 'UI/UX & Web Development Certificate',
  },
  {
    id: 'cert-3',
    issuer: 'Google',
    title: 'Google Student Ambassador Appointment',
  },
];

