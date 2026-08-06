import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/resumeData';
import { FileText, ShieldCheck, Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
  onOpenAudit: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenResume,
  onOpenAudit,
  activeSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'Who I Am' },
    { id: 'interests', label: 'Interests' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E4DC] shadow-xs'
          : 'bg-[#FAF8F5]/60 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand & Status */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="group flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-[#1C1A17] text-[#FAF8F5] flex items-center justify-center font-bold text-sm tracking-wider shadow-xs group-hover:scale-105 transition-transform">
              MK
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-[#1C1A17] tracking-tight group-hover:text-[#2563EB] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-[#78716C] font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                CS Student @ SIT (9.58 CGPA)
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F2EEE7]/80 p-1.5 rounded-full border border-[#E2DDD3]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1C1A17] text-[#FAF8F5] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1C1A17] hover:bg-[#E8E4DC]/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Resume & Ground Truth Audit */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenAudit}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/20 hover:bg-[#2563EB]/15 transition-all cursor-pointer"
              title="View Resume Ground-Truth Verification Report"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Resume Verified</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#FAF8F5] bg-[#1C1A17] hover:bg-[#2E2B27] active:scale-98 shadow-xs transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-[#1C1A17] text-[#FAF8F5] text-xs font-medium"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#F2EEE7] text-[#1C1A17] border border-[#E2DDD3]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Reading Progress Line */}
      <div className="w-full h-[2px] bg-[#E8E4DC]">
        <div
          className="h-full bg-[#2563EB] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-[#FAF8F5] border-b border-[#E8E4DC] px-4 pt-3 pb-6 shadow-lg"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#1C1A17] text-[#FAF8F5]'
                      : 'text-[#44403C] hover:bg-[#F2EEE7]'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-[#E8E4DC] flex flex-col gap-2 mt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAudit();
                  }}
                  className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-xs font-medium text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Ground Truth Verification Report</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-around pt-2 text-[#78716C]">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-[#1C1A17]"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-[#1C1A17]"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2 hover:text-[#1C1A17]"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
