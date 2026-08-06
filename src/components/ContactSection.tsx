import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/resumeData';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  FileText,
  Send,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenResume,
}) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Open user's default email client prefilled
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-t border-[#E8E4DC]">
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
            Get In Touch
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
          Let's Connect & Build Practical Software
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-3 text-base text-[#57534E] max-w-2xl leading-relaxed"
        >
          Whether you are a recruiter, developer, or student, I welcome conversations regarding software engineering opportunities, open-source projects, and technical discussions.
        </motion.p>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Copy Email Box */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E8E4DC] shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold text-[#1C1A17] hover:text-[#2563EB] transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-[#78716C] mt-2">
                Location: {PERSONAL_INFO.location}
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E8E4DC] shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#78716C] block mb-2">
                Profiles & Repositories
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#F2EEE7] hover:bg-[#E8E4DC] transition-colors text-xs font-semibold text-[#1C1A17]"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#78716C]" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#F2EEE7] hover:bg-[#E8E4DC] transition-colors text-xs font-semibold text-[#1C1A17]"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#2563EB]" />
                  <span>LinkedIn Network</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#78716C]" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#2E2B27] transition-colors text-xs font-semibold cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>View Official Resume PDF</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#78716C]" />
              </button>
            </div>
          </motion.div>

          {/* Right Message Composer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-[#F2EEE7]/80 rounded-2xl p-6 sm:p-8 border border-[#E2DDD3] shadow-2xs"
          >
            <h3 className="text-lg font-bold text-[#1C1A17] mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-[#78716C] mb-6">
              Submitting opens your default email client prefilled with your query.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-[#16A34A]/10 border border-[#16A34A]/20 text-[#15803D] text-sm font-semibold flex items-center gap-3">
                <Check className="w-5 h-5 shrink-0" />
                <span>Thank you! Your email client has been launched.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1C1A17] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-xs text-[#1C1A17] placeholder-[#78716C] focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1A17] mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-xs text-[#1C1A17] placeholder-[#78716C] focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1A17] mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your inquiry or engineering opportunity..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-xs text-[#1C1A17] placeholder-[#78716C] focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#1C1A17] text-[#FAF8F5] text-xs font-semibold hover:bg-[#2E2B27] active:scale-98 transition-all cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4 text-blue-400" />
                  <span>Send Email to Manikumar</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
