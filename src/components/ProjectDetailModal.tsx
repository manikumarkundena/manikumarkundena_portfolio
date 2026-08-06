import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCaseStudy } from '../types';
import {
  X,
  Github,
  ExternalLink,
  Target,
  Lightbulb,
  UserCheck,
  Code2,
  AlertTriangle,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-[#1C1A17]/60 backdrop-blur-xs">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-2xl border border-[#E8E4DC] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-8"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#F2EEE7]/80 border-b border-[#E2DDD3] flex items-start justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#2563EB]/10 text-[#2563EB]">
                  {project.category}
                </span>

                {project.keyMetricHighlight && (
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#16A34A]/10 text-[#15803D]">
                    {project.keyMetricHighlight}
                  </span>
                )}

                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] text-[#78716C] bg-[#FAF8F5]">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Grounded in Resume
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1A17] tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-[#57534E] mt-1 font-medium">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#FAF8F5] text-[#78716C] hover:text-[#1C1A17] hover:bg-[#E8E4DC] border border-[#E2DDD3] transition-colors cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Visual Header Representation */}
            <div className={`p-6 sm:p-8 rounded-xl bg-gradient-to-br ${project.previewGradient} border border-[#E2DDD3] flex flex-col justify-between min-h-[160px]`}>
              <div className="text-xs font-mono-code text-[#78716C]">
                CASE_STUDY // {project.id.toUpperCase()}
              </div>

              <div>
                <p className="text-lg font-semibold text-[#1C1A17] leading-snug">
                  "{project.tagline}"
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#2E2B27] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#2563EB] text-[#FAF8F5] hover:bg-[#1D4ED8] transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Grid of Case Study Subsections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. Problem */}
              <div className="bg-[#F2EEE7]/60 rounded-xl p-5 border border-[#E2DDD3]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EA580C] mb-2">
                  <Target className="w-4 h-4" />
                  <span>Problem Statement</span>
                </div>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* 2. Why I Built It */}
              <div className="bg-[#F2EEE7]/60 rounded-xl p-5 border border-[#E2DDD3]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Why I Built It</span>
                </div>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {project.whyIBuiltIt}
                </p>
              </div>
            </div>

            {/* 3. My Contribution */}
            <div className="bg-[#FAF8F5] rounded-xl p-5 border border-[#E8E4DC] shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16A34A] mb-3">
                <UserCheck className="w-4 h-4" />
                <span>My Specific Contribution</span>
              </div>
              <ul className="space-y-2">
                {project.myContribution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#44403C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Technologies Actually Used */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#78716C] mb-3">
                <Code2 className="w-4 h-4 text-[#2563EB]" />
                <span>Technologies Actually Used</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono-code font-medium bg-[#F2EEE7] text-[#1C1A17] border border-[#E2DDD3]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. Challenges & 6. What I Learned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenges */}
              <div className="bg-[#FAF8F5] rounded-xl p-5 border border-[#E8E4DC]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Challenges Encountered</span>
                </div>
                <ul className="space-y-2">
                  {project.challenges.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#57534E] leading-relaxed">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What I Learned */}
              <div className="bg-[#FAF8F5] rounded-xl p-5 border border-[#E8E4DC]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>What I Learned</span>
                </div>
                <ul className="space-y-2">
                  {project.whatILearned.map((l, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#57534E] leading-relaxed">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 7. Future Scope */}
            <div className="bg-[#F2EEE7]/40 rounded-xl p-5 border border-[#E2DDD3]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#78716C] mb-3">
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                <span>Future Scope & Next Steps</span>
              </div>
              <ul className="space-y-2">
                {project.futureScope.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#57534E]">
                    <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 bg-[#F2EEE7]/80 border-t border-[#E2DDD3] flex items-center justify-between gap-4">
            <span className="text-xs text-[#78716C]">
              Ground Truth Checked against Resume
            </span>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#2E2B27] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Code</span>
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#2563EB] text-[#FAF8F5] hover:bg-[#1D4ED8] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch App</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
