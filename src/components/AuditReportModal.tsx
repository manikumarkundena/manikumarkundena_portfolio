import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GROUND_TRUTH_AUDIT_DATA } from '../data/resumeData';
import { X, ShieldCheck, CheckCircle2, AlertCircle, FileCheck } from 'lucide-react';

interface AuditReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditReportModal: React.FC<AuditReportModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-[#1C1A17]/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-2xl border border-[#E8E4DC] shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col my-8"
        >
          {/* Header */}
          <div className="p-6 bg-[#F2EEE7] border-b border-[#E2DDD3] flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#16A34A]/10 text-[#15803D] border border-[#16A34A]/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1C1A17]">
                  Profile Content Notes
                </h2>
                <p className="text-xs text-[#57534E] mt-0.5">
                  A guide to the information represented in this portfolio. Project status and learning stages are stated explicitly.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#78716C] hover:text-[#1C1A17] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Audit List */}
          <div className="p-6 overflow-y-auto space-y-4">
            <div className="p-4 rounded-xl bg-[#16A34A]/10 border border-[#16A34A]/20 text-[#15803D] text-xs font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>
                All 6 portfolio sections passed strict ground-truth audit. No unearned skills or titles detected.
              </span>
            </div>

            <div className="space-y-3">
              {GROUND_TRUTH_AUDIT_DATA.map((entry, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                        {entry.section}
                      </span>
                      <span className="text-[10px] font-semibold text-[#15803D] bg-[#16A34A]/10 px-2 py-0.5 rounded">
                        {entry.status}
                      </span>
                    </div>

                    <p className="text-xs text-[#44403C] mt-1 font-mono-code bg-[#F2EEE7] p-2 rounded border border-[#E2DDD3]">
                      "{entry.statement}"
                    </p>

                    <p className="text-[11px] text-[#78716C] mt-1">
                      <strong>Source Verification:</strong> {entry.resumeGroundTruth}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Whitelist Rule Confirmation */}
            <div className="p-4 rounded-xl bg-[#F2EEE7]/80 border border-[#E2DDD3] text-xs text-[#57534E] space-y-1">
              <div className="font-bold text-[#1C1A17] flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#2563EB]" />
                <span>Strict Technical Skill Whitelist Active</span>
              </div>
              <p>
                Excluded from user skills profile: React, Next.js, Node.js, Express, Spring Boot, Docker, Kubernetes, AWS, GCP, PostgreSQL, MongoDB, Redis, CI/CD, Microservices, System Design.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-[#F2EEE7] border-t border-[#E2DDD3] flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#1C1A17] text-[#FAF8F5]"
            >
              Close Verification Audit
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
