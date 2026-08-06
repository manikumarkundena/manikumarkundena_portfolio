import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, MY_INTERESTS, TECHNICAL_SKILLS_GROUPS, PROJECTS_DATA, EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../data/resumeData';
import { X, Download, Printer, ShieldCheck, Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { downloadResumePDF, handleDirectResumeDownload } from '../utils/pdfGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    downloadResumePDF();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-[#1C1A17]/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 no-print"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl bg-[#ffffff] rounded-2xl border border-[#E8E4DC] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-6 text-[#1C1A17]"
        >
          {/* Header Controls */}
          <div className="p-4 sm:p-6 bg-[#FAF8F5] border-b border-[#E8E4DC] flex items-center justify-between gap-4 no-print sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <div>
                <h3 className="text-sm font-bold text-[#1C1A17]">
                  Official Resume Document
                </h3>
                <span className="text-[11px] text-[#78716C]">
                  Ground-Truth Verified against Resume Source
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F2EEE7] hover:bg-[#E8E4DC] text-[#1C1A17] transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <a
                href="/Manikumar_Kundena_Resume.pdf"
                download="Manikumar_Kundena_Resume.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  handleDirectResumeDownload();
                }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#2563EB] text-[#FAF8F5] hover:bg-[#1D4ED8] transition-colors cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#F2EEE7] text-[#78716C] hover:text-[#1C1A17] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-[#1C1A17]">
            {/* Resume Top Header */}
            <div className="border-b-2 border-[#1C1A17] pb-6">
              <h1 className="text-3xl font-bold tracking-tight text-[#1C1A17]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base font-semibold text-[#2563EB] mt-1">
                {PERSONAL_INFO.degree}
              </p>
              <p className="text-xs text-[#57534E] mt-0.5">
                {PERSONAL_INFO.institution} • CGPA: {PERSONAL_INFO.cgpa} ({PERSONAL_INFO.batch})
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#57534E]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#78716C]" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#78716C]" />
                  {PERSONAL_INFO.email}
                </span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#2563EB]"
                >
                  <Github className="w-3.5 h-3.5" />
                  github.com/manikumarkundena
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#2563EB]"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  linkedin.com/in/manikumarkundena
                </a>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1C1A17] mb-2 border-b border-[#E8E4DC] pb-1">
                Summary
              </h2>
              <p className="text-xs text-[#44403C] leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1C1A17] mb-2 border-b border-[#E8E4DC] pb-1">
                Technical Skills (Whitelisted)
              </h2>
              <div className="space-y-1.5 text-xs text-[#44403C]">
                {TECHNICAL_SKILLS_GROUPS.map((g) => (
                  <p key={g.category}>
                    <strong className="text-[#1C1A17]">{g.category}:</strong>{' '}
                    {g.skills.map((s) => s.name).join(', ')}
                  </p>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1C1A17] mb-3 border-b border-[#E8E4DC] pb-1">
                Key Projects
              </h2>
              <div className="space-y-4">
                {PROJECTS_DATA.map((p) => (
                  <div key={p.id}>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xs font-bold text-[#1C1A17]">
                        {p.title} — <span className="font-medium text-[#57534E]">{p.subtitle}</span>
                      </h3>
                      <span className="text-[10px] font-mono-code text-[#78716C]">{p.category}</span>
                    </div>
                    <p className="text-xs text-[#44403C] mt-0.5">{p.problem}</p>
                    <p className="text-[11px] text-[#78716C] mt-0.5">
                      <strong>Tech:</strong> {p.technologies.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1C1A17] mb-3 border-b border-[#E8E4DC] pb-1">
                Experience & Roles
              </h2>
              <div className="space-y-4">
                {EXPERIENCE_DATA.map((e) => (
                  <div key={e.id}>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xs font-bold text-[#1C1A17]">
                        {e.role} — <span className="font-medium text-[#2563EB]">{e.organization}</span>
                      </h3>
                      <span className="text-[10px] text-[#78716C]">{e.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-[#44403C] mt-1 space-y-0.5">
                      {e.description.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1C1A17] mb-2 border-b border-[#E8E4DC] pb-1">
                Academic Honors & Certifications
              </h2>
              <ul className="list-disc list-inside text-xs text-[#44403C] space-y-1">
                {CERTIFICATIONS_DATA.map((c) => (
                  <li key={c.id}>
                    <strong>{c.title}</strong> — {c.issuer} {c.date ? `(${c.date})` : ''}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
