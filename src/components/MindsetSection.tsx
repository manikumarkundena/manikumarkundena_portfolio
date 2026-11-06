import React from 'react';
import { motion } from 'motion/react';
import { MY_INTERESTS } from '../data/resumeData';
import {
  Bot,
  Smartphone,
  Wrench,
  Zap,
  BookOpen,
  Layout,
  HeartHandshake,
  Compass,
} from 'lucide-react';

export const MindsetSection: React.FC = () => {
  const getInterestIcon = (title: string) => {
    switch (title) {
      case 'Artificial Intelligence':
        return <Bot className="w-5 h-5 text-[#2563EB]" />;
      case 'Android Development':
        return <Smartphone className="w-5 h-5 text-[#16A34A]" />;
      case 'Developer Tools':
        return <Wrench className="w-5 h-5 text-[#EA580C]" />;
      case 'Intelligent Automation':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Educational Technology':
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 'Productivity Software':
        return <Layout className="w-5 h-5 text-teal-600" />;
      case 'Technology for Social Impact':
        return <HeartHandshake className="w-5 h-5 text-rose-600" />;
      default:
        return <Compass className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section id="interests" className="py-20 border-t border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#78716C]">
            Genuine Interests
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
          What I Love Building
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-3 text-base text-[#57534E] max-w-2xl leading-relaxed"
        >
          I’m most interested in practical software engineering: useful interfaces, reliable backend services, applied AI, and interactive learning tools.
        </motion.p>

        {/* Content: 7 Interests Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MY_INTERESTS.map((interest, idx) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
              className="bg-[#F2EEE7]/70 rounded-xl p-5 border border-[#E2DDD3] hover:border-[#2563EB]/40 hover:bg-[#FAF8F5] transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] group-hover:scale-105 transition-transform shadow-2xs">
                  {getInterestIcon(interest.title)}
                </div>
                <h3 className="text-base font-semibold text-[#1C1A17] group-hover:text-[#2563EB] transition-colors">
                  {interest.title}
                </h3>
              </div>

              <p className="text-xs text-[#57534E] leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Authentic Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-[#FAF8F5] border border-[#E8E4DC] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-2xs"
        >
          <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
            <span className="font-serif-accent text-3xl italic">“</span>
          </div>

          <div>
            <blockquote className="font-serif-accent text-xl sm:text-2xl text-[#1C1A17] italic leading-snug">
              “Useful software doesn't need to be flashy. It needs to be dependable, easy to understand, and built with genuine care for the person using it.”
            </blockquote>
            <cite className="mt-2 block text-xs font-semibold text-[#78716C] not-italic">
              — Manikumar Kundena, Computer Science Student
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
