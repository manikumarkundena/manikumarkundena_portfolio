import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/resumeData';
import { ProjectCaseStudy } from '../types';
import {
  Github,
  ExternalLink,
  ArrowRight,
  Search,
  Filter,
  Layers,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI & Dev Tools', 'Android', 'Web & Portals'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 border-t border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#78716C]">
            Heart of Portfolio
          </span>
        </motion.div>

        {/* Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1A17]"
            >
              Case Studies & Practical Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-2 text-base text-[#57534E] max-w-2xl"
            >
              Each project is presented as an honest case study detailing why it was built, my explicit contributions, challenges, and lessons learned.
            </motion.p>
          </div>

          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="relative min-w-[240px]"
          >
            <Search className="w-4 h-4 text-[#78716C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F2EEE7] border border-[#E2DDD3] text-xs text-[#1C1A17] placeholder-[#78716C] focus:outline-none focus:border-[#2563EB] transition-all"
            />
          </motion.div>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1C1A17] text-[#FAF8F5] shadow-xs'
                  : 'bg-[#F2EEE7] text-[#57534E] hover:text-[#1C1A17] hover:bg-[#E8E4DC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Cards Container */}
        {filteredProjects.length === 0 ? (
          <div className="py-12 text-center bg-[#F2EEE7]/50 rounded-2xl border border-[#E2DDD3]">
            <p className="text-sm text-[#78716C]">
              No projects found matching your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#1C1A17] text-[#FAF8F5]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF8F5] rounded-2xl border border-[#E8E4DC] hover:border-[#2563EB]/40 shadow-xs hover:shadow-md transition-all overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Mockup Graphic Preview */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className={`lg:col-span-5 p-8 bg-gradient-to-br ${project.previewGradient} border-b lg:border-b-0 lg:border-r border-[#E8E4DC] flex flex-col justify-between cursor-pointer group-hover:bg-opacity-90 transition-all min-h-[260px]`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#1C1A17] text-[#FAF8F5]">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono-code text-[#78716C] bg-[#FAF8F5]/80 px-2 py-0.5 rounded">
                        0{index + 1} / 0{PROJECTS_DATA.length}
                      </span>
                    </div>

                    <div className="my-6">
                      <div className="text-2xl font-bold text-[#1C1A17] tracking-tight group-hover:text-[#2563EB] transition-colors">
                        {project.title}
                      </div>
                      <p className="text-xs font-medium text-[#57534E] mt-1 line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB]">
                      <span>Open Case Study Breakdown</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Right Content Summary */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-[#1C1A17]">
                          {project.title}
                        </h3>
                        {project.keyMetricHighlight && (
                          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-[#15803D] bg-[#16A34A]/10 px-2.5 py-1 rounded-full">
                            <Sparkles className="w-3 h-3" />
                            {project.keyMetricHighlight}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#78716C] font-semibold uppercase tracking-wider mb-2">
                        Problem Addressed
                      </p>
                      <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed mb-4 line-clamp-3">
                        {project.problem}
                      </p>

                      <p className="text-xs text-[#78716C] font-semibold uppercase tracking-wider mb-2">
                        Technologies Actually Used
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono-code bg-[#F2EEE7] text-[#44403C] border border-[#E2DDD3]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer buttons */}
                    <div className="pt-4 border-t border-[#E8E4DC] flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#2E2B27] transition-all cursor-pointer"
                      >
                        <span>Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-[#F2EEE7] text-[#1C1A17] hover:bg-[#E8E4DC] transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>

                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-[#2563EB] bg-[#2563EB]/10 hover:bg-[#2563EB]/20 transition-all"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
