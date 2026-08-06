import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/resumeData';
import {
  MapPin,
  GraduationCap,
  Award,
  Github,
  Linkedin,
  Mail,
  FileText,
  Sparkles,
  ArrowDown,
  CheckCircle2,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAudit }) => {
  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status & Ground Truth pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
            CS Undergraduate @ Siddaganga Institute of Technology
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#16A34A]/10 text-[#15803D] border border-[#16A34A]/20">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>CGPA: {PERSONAL_INFO.cgpa}</span>
          </span>

          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#78716C] bg-[#F2EEE7] hover:bg-[#E8E4DC] hover:text-[#1C1A17] transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>100% Resume Grounded</span>
          </button>
        </motion.div>

        {/* Main Name & Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1A17] leading-[1.12]"
            >
              Hi, I'm <span className="text-[#2563EB]">{PERSONAL_INFO.name}</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-[#57534E] leading-relaxed max-w-2xl font-normal"
            >
              I am <strong className="text-[#1C1A17] font-semibold">not</strong> an expert or a senior engineer. I am a Computer Science undergraduate who genuinely enjoys <span className="text-[#1C1A17] font-medium underline decoration-[#2563EB]/40 underline-offset-4">learning by building practical software</span> to solve real-world problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 text-base text-[#78716C] leading-relaxed max-w-2xl"
            >
              My work focuses on practical Android mobile applications, intuitive web portals, AI prompt workflows, and developer utilities that help students and organizers work more effectively.
            </motion.p>

            {/* CTAs & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#2E2B27] active:scale-98 shadow-sm transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View & Download Resume</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-[#F2EEE7] text-[#1C1A17] hover:bg-[#E8E4DC] border border-[#E2DDD3] transition-all cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 text-[#78716C]" />
              </a>

              <div className="flex items-center gap-2 ml-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#44403C] hover:text-[#1C1A17] hover:bg-[#F2EEE7] transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#44403C] hover:text-[#2563EB] hover:bg-[#F2EEE7] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#44403C] hover:text-[#EA580C] hover:bg-[#F2EEE7] transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Info Sidebar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="lg:col-span-4 bg-[#F2EEE7]/80 rounded-2xl p-6 border border-[#E2DDD3] shadow-xs flex flex-col justify-between gap-6"
          >
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#78716C] mb-4 flex items-center justify-between">
                <span>Quick Profile</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF8F5] text-[#2563EB] border border-[#E8E4DC]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#78716C]">Education</div>
                    <div className="text-sm font-semibold text-[#1C1A17]">
                      B.E. Computer Science & Eng.
                    </div>
                    <div className="text-xs text-[#57534E]">
                      Siddaganga Institute of Technology (2024–2028)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF8F5] text-[#16A34A] border border-[#E8E4DC]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#78716C]">Academic Score</div>
                    <div className="text-sm font-semibold text-[#1C1A17]">
                      CGPA: {PERSONAL_INFO.cgpa}
                    </div>
                    <div className="text-xs text-[#57534E]">Top Tier Academic Performance</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF8F5] text-[#EA580C] border border-[#E8E4DC]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#78716C]">Location</div>
                    <div className="text-sm font-semibold text-[#1C1A17]">
                      {PERSONAL_INFO.location}
                    </div>
                    <div className="text-xs text-[#57534E]">India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Philosophies */}
            <div className="pt-4 border-t border-[#E2DDD3]">
              <div className="text-xs font-semibold text-[#1C1A17] mb-2.5">
                Engineering Mindset
              </div>
              <ul className="space-y-2 text-xs text-[#57534E]">
                {PERSONAL_INFO.philosophies.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#2563EB] font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-[#1C1A17] font-medium">{p.title}:</strong>{' '}
                      {p.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
