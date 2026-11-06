import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MindsetSection } from './components/MindsetSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ExperienceSection } from './components/ExperienceSection';
import { JourneySection } from './components/JourneySection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { ProjectCaseStudy } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'interests', 'projects', 'journey', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1A17] flex flex-col font-sans selection:bg-[#2563EB]/15 selection:text-[#1D4ED8]">
      {/* Sticky Header */}
      <Header
        onOpenResume={() => setResumeModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Who I Am / Landing */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* 2. What I Love Building / Genuine Interests */}
        <MindsetSection />

        {/* 3. Projects as Case Studies */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 4. Academic Journey & Education at SIT */}
        <JourneySection />

        {/* 5. Experience (Internship Studio, Ambassador, ScriptInk) */}
        <ExperienceSection />

        {/* 6. Technical Skills (Strict Whitelist) */}
        <SkillsSection />

        {/* 7. Contact */}
        <ContactSection onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Audit Report Modal */}
    </div>
  );
}
