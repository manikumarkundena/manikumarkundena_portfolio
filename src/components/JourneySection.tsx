import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, CERTIFICATIONS_DATA } from '../data/resumeData';
import { GraduationCap, Award, MapPin, CheckCircle2, Bookmark, FileCheck } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 border-t border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#78716C]">
            Academic Foundation
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
          Education & Recognized Achievements
        </motion.h2>

        {/* Content Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main SIT Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#E8E4DC] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-indigo-600/10 text-indigo-600 border border-indigo-600/20">
                  Current Undergraduate
                </span>
                <span className="text-xs font-semibold text-[#78716C]">
                  {PERSONAL_INFO.batch}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#F2EEE7] text-indigo-600 border border-[#E2DDD3] shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1C1A17]">
                    {PERSONAL_INFO.institution}
                  </h3>
                  <p className="text-sm font-semibold text-[#2563EB] mt-0.5">
                    {PERSONAL_INFO.degree}
                  </p>
                  <p className="text-xs text-[#78716C] mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Tumakuru, Karnataka, India
                  </p>
                </div>
              </div>

              {/* CGPA Box */}
              <div className="mt-6 p-4 rounded-xl bg-[#F2EEE7]/80 border border-[#E2DDD3] flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#78716C] font-semibold">Cumulative Grade Point Average</div>
                  <div className="text-2xl font-bold text-[#1C1A17] mt-0.5">
                    {PERSONAL_INFO.cgpa}
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[#16A34A]/10 text-[#15803D] text-xs font-bold flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>Academic Performance</span>
                </div>
              </div>

              {/* Coursework Focus */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#78716C] mb-2.5">
                  Core Foundations
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Object Oriented Programming (Java/C++)',
                    'Web and Backend Development',
                    'Database Management Systems',
                    'Software Engineering Fundamentals',
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F2EEE7] text-[#44403C] border border-[#E2DDD3]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Certifications / Recognitions List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-[#F2EEE7]/80 rounded-2xl p-6 sm:p-8 border border-[#E2DDD3] shadow-2xs"
          >
            <div className="flex items-center gap-2 mb-6">
              <FileCheck className="w-5 h-5 text-[#2563EB]" />
              <h3 className="text-lg font-bold text-[#1C1A17]">
                Learning, Programs & Recognition
              </h3>
            </div>

            <p className="text-xs text-[#78716C] mb-6 leading-relaxed">
              A mix of completed learning, program selection, and academic recognition.
            </p>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#FAF8F5] rounded-xl p-4 border border-[#E8E4DC] flex items-start gap-3 shadow-2xs"
                >
                  <div className="p-2 rounded-lg bg-[#2563EB]/10 text-[#2563EB] shrink-0 mt-0.5">
                    <Bookmark className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1C1A17]">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[#57534E] font-medium mt-0.5">
                      {cert.issuer}
                    </p>
                    {cert.date && (
                      <span className="text-[11px] text-[#78716C] mt-1 block">
                        {cert.date}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
