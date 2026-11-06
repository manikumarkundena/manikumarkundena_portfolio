import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ArrowUp, FileText, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#F2EEE7]/80 border-t border-[#E2DDD3] py-12 text-[#57534E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E2DDD3]">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1C1A17] text-[#FAF8F5] flex items-center justify-center font-bold text-xs">
              MK
            </div>
            <div>
              <div className="font-bold text-sm text-[#1C1A17]">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-[#78716C]">
                Computer Science Undergraduate • Siddaganga Institute of Technology
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] text-[#44403C] hover:text-[#1C1A17] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] text-[#44403C] hover:text-[#2563EB] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] text-[#44403C] hover:text-[#EA580C] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Metadata & Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-[#78716C]">
            <span>© {new Date().getFullYear()} Manikumar Kundena.</span>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 text-[#1C1A17] hover:underline cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] text-xs font-medium text-[#1C1A17] hover:bg-[#E8E4DC] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
