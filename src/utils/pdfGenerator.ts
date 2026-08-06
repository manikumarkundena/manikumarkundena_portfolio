import jsPDF from 'jspdf';
import {
  PERSONAL_INFO,
  TECHNICAL_SKILLS_GROUPS,
  PROJECTS_DATA,
  EXPERIENCE_DATA,
  CERTIFICATIONS_DATA,
} from '../data/resumeData';

export function generateResumePDF(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;
  let y = 45;

  // Colors
  const primaryColor = [28, 26, 23]; // #1C1A17
  const accentColor = [37, 99, 235]; // #2563EB
  const grayColor = [87, 83, 78]; // #57534E
  const lightBg = [248, 246, 242]; // #FAF8F5

  const checkNewPage = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = 45;
    }
  };

  // Header Title
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(PERSONAL_INFO.name, margin, y);
  y += 20;

  // Subtitle
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text(PERSONAL_INFO.degree, margin, y);
  y += 14;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.text(
    `${PERSONAL_INFO.institution} | CGPA: ${PERSONAL_INFO.cgpa} (${PERSONAL_INFO.batch})`,
    margin,
    y
  );
  y += 14;

  // Contact Row
  const contactText = `Location: ${PERSONAL_INFO.location} | Email: ${PERSONAL_INFO.email} | GitHub: github.com/manikumarkundena | LinkedIn: linkedin.com/in/manikumarkundena`;
  doc.setFontSize(8.5);
  doc.text(contactText, margin, y);
  y += 12;

  // Divider Line
  doc.setDrawColor(200, 195, 185);
  doc.setLineWidth(1);
  doc.line(margin, y, pageWidth - margin, y);
  y += 18;

  // Helper Section Header
  const renderSectionHeader = (title: string) => {
    checkNewPage(30);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(1.5);
    doc.line(margin, y, margin + 120, y);
    y += 14;
  };

  // 1. SUMMARY
  renderSectionHeader('Summary');
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  const summaryLines = doc.splitTextToSize(PERSONAL_INFO.summary, contentWidth);
  checkNewPage(summaryLines.length * 12 + 10);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 12 + 14;

  // 2. TECHNICAL SKILLS
  renderSectionHeader('Technical Skills');
  doc.setFontSize(9);
  TECHNICAL_SKILLS_GROUPS.forEach((group) => {
    const skillList = group.skills.map((s) => s.name).join(', ');
    const lineText = `${group.category}: ${skillList}`;
    const lines = doc.splitTextToSize(lineText, contentWidth);
    checkNewPage(lines.length * 12 + 4);

    doc.setFont('Helvetica', 'bold');
    doc.text(`${group.category}: `, margin, y);
    const categoryWidth = doc.getTextWidth(`${group.category}: `);
    
    doc.setFont('Helvetica', 'normal');
    doc.text(skillList, margin + categoryWidth, y);
    y += 13;
  });
  y += 10;

  // 3. KEY PROJECTS
  renderSectionHeader('Key Projects');
  PROJECTS_DATA.forEach((proj) => {
    checkNewPage(65);

    // Title + Category
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`${proj.title} — ${proj.subtitle}`, margin, y);

    doc.setFontSize(8);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(`[${proj.category}]`, pageWidth - margin - doc.getTextWidth(`[${proj.category}]`), y);
    y += 12;

    // Problem / Description
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
    const probLines = doc.splitTextToSize(proj.problem, contentWidth);
    doc.text(probLines, margin, y);
    y += probLines.length * 11 + 2;

    // Technologies
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('Technologies: ', margin, y);
    const techWidth = doc.getTextWidth('Technologies: ');

    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
    doc.text(proj.technologies.join(', '), margin + techWidth, y);
    y += 14;
  });
  y += 6;

  // 4. EXPERIENCE & ROLES
  renderSectionHeader('Experience & Roles');
  EXPERIENCE_DATA.forEach((exp) => {
    checkNewPage(60);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(exp.role, margin, y);

    doc.setFontSize(8.5);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(` | ${exp.organization}`, margin + doc.getTextWidth(exp.role), y);

    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
    doc.text(exp.period, pageWidth - margin - doc.getTextWidth(exp.period), y);
    y += 13;

    // Bullets
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    exp.description.forEach((desc) => {
      const bulletLines = doc.splitTextToSize(`• ${desc}`, contentWidth - 10);
      checkNewPage(bulletLines.length * 11);
      doc.text(bulletLines, margin + 6, y);
      y += bulletLines.length * 11 + 2;
    });
    y += 8;
  });

  // 5. HONORS & CERTIFICATIONS
  renderSectionHeader('Honors & Certifications');
  CERTIFICATIONS_DATA.forEach((cert) => {
    checkNewPage(16);
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    const certText = `• ${cert.title} — ${cert.issuer}${cert.date ? ` (${cert.date})` : ''}`;
    doc.text(certText, margin, y);
    y += 12;
  });

  return doc;
}

export function handleDirectResumeDownload(filename: string = 'Manikumar_Kundena_Resume.pdf') {
  const pdfUrl = `/${filename}`;
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.setAttribute('download', filename);
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function downloadResumePDF() {
  try {
    handleDirectResumeDownload();
  } catch (err) {
    console.warn('Direct PDF download failed, fallback to jsPDF generation', err);
    const doc = generateResumePDF();
    doc.save('Manikumar_Kundena_Resume.pdf');
  }
}
