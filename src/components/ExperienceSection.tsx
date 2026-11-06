import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/resumeData';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#78716C]">
            Practical Experience
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1A17]"
        >
          Internships & Roles of Responsibility
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-3 text-base text-[#57534E] max-w-2xl leading-relaxed"
        >
          Presented with 100% honesty. No title inflation, exaggerated leadership claims, or fabricated responsibilities.
        </motion.p>

        {/* Timeline Items */}
        <div className="mt-12 space-y-8">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#E8E4DC] hover:border-[#2563EB]/30 transition-all relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#E8E4DC]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#F2EEE7] text-[#57534E] border border-[#E2DDD3]">
                      {exp.type}
                    </span>

                    {exp.isVerified && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#16A34A]/10 text-[#15803D]">
                        <ShieldCheck className="w-3 h-3" />
                        Profile
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#1C1A17] tracking-tight">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB] mt-1">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.organization}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-1 text-xs text-[#78716C] font-medium">
                  <span className="inline-flex items-center gap-1 bg-[#F2EEE7] px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#78716C] mb-3">
                  Key Responsibilities & Contributions
                </p>
                <ul className="space-y-2.5">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-[#E8E4DC]/60">
                  <span className="text-xs text-[#78716C] font-semibold mr-1">
                    Skills Applied:
                  </span>
                  {exp.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono-code bg-[#F2EEE7] text-[#1C1A17] border border-[#E2DDD3]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
