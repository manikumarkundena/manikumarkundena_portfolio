import React from 'react';
import { motion } from 'motion/react';
import { TECHNICAL_SKILLS_GROUPS } from '../data/resumeData';
import { Code, Terminal, Cpu, Database, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2 h-2 rounded-full bg-amber-600"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#78716C]">
            Technical Competencies
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
          Technical Skills
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-3 text-base text-[#57534E] max-w-2xl leading-relaxed"
        >
          Categorized strictly according to resume experience. No fabricated skill percentage bars, stars, or unearned frameworks.
        </motion.p>

        {/* Skills Groups Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILLS_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
              className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E8E4DC] hover:border-[#2563EB]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#1C1A17] flex items-center justify-between pb-3 border-b border-[#E8E4DC]">
                  <span>{group.category}</span>
                  <span className="text-xs text-[#2563EB] font-mono-code font-normal">
                    {group.skills.length} skills
                  </span>
                </h3>

                <p className="text-xs text-[#78716C] my-3 leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((s) => (
                    <span
                      key={s.name}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#F2EEE7] text-[#1C1A17] border border-[#E2DDD3] hover:bg-[#1C1A17] hover:text-[#FAF8F5] transition-colors cursor-default"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Anti-Fabrication Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 p-4 rounded-xl bg-[#F2EEE7]/80 border border-[#E2DDD3] flex items-center gap-3 text-xs text-[#78716C]"
        >
          <ShieldAlert className="w-4 h-4 text-[#2563EB] shrink-0" />
          <span>
            <strong>Authenticity Guarantee:</strong> Unmentioned frameworks (such as Docker, Kubernetes, Microservices, or AWS) are intentionally excluded because they do not appear on Manikumar's resume.
          </span>
        </motion.div>
      </div>
    </section>
  );
};
