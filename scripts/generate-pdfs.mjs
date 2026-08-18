/**
 * Generate 3 family tree PDFs from families.ts data
 * 1. Master (all 4 lines)
 * 2. Dad's side (O'Reilly + Coffey)
 * 3. Mom's side (Linnerud + Jakubicek)
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');

// We'll read the families data by importing the TS file via a workaround
// Since families.ts uses TypeScript, we'll parse it manually from the running site
// Instead, let's fetch from the live site or build a static version

// Better approach: use the dev server or the built data
// Let's just read the TS file and extract data with a simple approach

async function getFamiliesData() {
  const jsonData = fs.readFileSync('/tmp/families-data.json', 'utf-8');
  return JSON.parse(jsonData);
}

function generatePersonHTML(person) {
  const parts = [];
  
  parts.push(`<div class="person-card">`);
  parts.push(`<h4 class="person-name">${person.name}</h4>`);
  
  const details = [];
  if (person.born) details.push(`<strong>Born:</strong> ${person.born}${person.bornPlace ? `, ${person.bornPlace}` : ''}`);
  else if (person.bornPlace) details.push(`<strong>From:</strong> ${person.bornPlace}`);
  if (person.died) details.push(`<strong>Died:</strong> ${person.died}${person.diedPlace ? `, ${person.diedPlace}` : ''}`);
  if (person.spouse) details.push(`<strong>Spouse:</strong> ${person.spouse}`);
  if (person.occupation) details.push(`<strong>Occupation:</strong> ${person.occupation}`);
  if (person.immigrated) details.push(`<strong>Immigrated:</strong> ${person.immigrated}`);
  if (person.ship) details.push(`<strong>Ship:</strong> ${person.ship}`);
  if (person.burial) details.push(`<strong>Burial:</strong> ${person.burial}`);
  if (person.physical) details.push(`<strong>Physical:</strong> ${person.physical}`);
  
  if (details.length) {
    parts.push(`<div class="person-details">${details.map(d => `<p>${d}</p>`).join('')}</div>`);
  }
  
  if (person.notes && person.notes.length) {
    // Filter out source citations for cleaner PDF
    const displayNotes = person.notes.filter(n => !n.startsWith('Source: O\'Reilly family archive'));
    if (displayNotes.length) {
      parts.push(`<div class="person-notes">`);
      displayNotes.forEach(note => {
        const isWarning = note.startsWith('⚠️');
        parts.push(`<p class="${isWarning ? 'note-warning' : ''}">${note}</p>`);
      });
      parts.push(`</div>`);
    }
  }
  
  parts.push(`</div>`);
  return parts.join('\n');
}

function generateStoryHTML(story) {
  let html = `<div class="story">`;
  html += `<h4 class="story-title">${story.title}</h4>`;
  
  // Split content by newlines for proper paragraphs
  const paragraphs = story.content.split('\n\n').filter(Boolean);
  paragraphs.forEach(p => {
    html += `<p class="story-text">${p.replace(/\n/g, ' ')}</p>`;
  });
  
  if (story.pullQuote) {
    html += `<blockquote class="pull-quote">${story.pullQuote}</blockquote>`;
  }
  
  html += `</div>`;
  return html;
}

function generateFamilyLineHTML(line) {
  let html = '';
  
  // Family header
  html += `<div class="family-header">`;
  html += `<div class="family-flag">${line.flag}</div>`;
  html += `<h2 class="family-name">${line.name}</h2>`;
  html += `<p class="family-subtitle">${line.subtitle}</p>`;
  html += `</div>`;
  
  // Immigration stories if any
  if (line.immigration && line.immigration.length) {
    html += `<div class="immigration-section">`;
    html += `<h3 class="section-heading">Immigration</h3>`;
    line.immigration.forEach(imm => {
      html += `<div class="immigration-card">`;
      html += `<p class="imm-name"><strong>${imm.person}</strong></p>`;
      html += `<p class="imm-details">`;
      if (imm.year) html += `${imm.year} · `;
      if (imm.ship) html += `${imm.ship} · `;
      if (imm.departurePort) html += `From ${imm.departurePort} `;
      if (imm.arrivalPort) html += `to ${imm.arrivalPort}`;
      html += `</p>`;
      if (imm.details) html += `<p class="imm-story">${imm.details}</p>`;
      html += `</div>`;
    });
    html += `</div>`;
  }
  
  // Generations
  html += `<div class="generations-section">`;
  html += `<h3 class="section-heading">The Generations</h3>`;
  
  line.generations.forEach(gen => {
    html += `<div class="generation">`;
    html += `<h3 class="gen-label">${gen.label}</h3>`;
    
    if (gen.people && gen.people.length) {
      gen.people.forEach(person => {
        html += generatePersonHTML(person);
      });
    } else if (gen.notes && gen.notes.length) {
      // Empty generation (like Jakubicek Gen 0)
      gen.notes.forEach(note => {
        html += `<p class="gen-note">${note}</p>`;
      });
    }
    
    if (gen.notes && gen.notes.length && gen.people && gen.people.length) {
      html += `<div class="gen-notes">`;
      gen.notes.forEach(note => {
        html += `<p>${note}</p>`;
      });
      html += `</div>`;
    }
    
    html += `</div>`;
  });
  html += `</div>`;
  
  // Stories
  if (line.stories && line.stories.length) {
    html += `<div class="stories-section">`;
    html += `<h3 class="section-heading">Stories &amp; Historical Notes</h3>`;
    line.stories.forEach(story => {
      html += generateStoryHTML(story);
    });
    html += `</div>`;
  }
  
  return html;
}

function generateFullHTML(families, title, subtitle, emoji) {
  const familyContent = families.map(f => generateFamilyLineHTML(f)).join('<div class="page-break"></div>');
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
  
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  @page {
    size: letter;
    margin: 0.75in 0.85in;
  }
  
  body {
    font-family: 'Crimson Text', Georgia, serif;
    color: #2C2416;
    background: #fff;
    font-size: 11pt;
    line-height: 1.55;
  }
  
  /* Cover page */
  .cover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    page-break-after: always;
  }
  
  .cover-emoji { font-size: 64pt; margin-bottom: 24px; }
  .cover-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 28pt;
    font-weight: 700;
    color: #2C2416;
    margin-bottom: 12px;
    line-height: 1.2;
  }
  .cover-subtitle {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 11pt;
    color: #5C4F3D;
    max-width: 420px;
    margin: 0 auto 32px;
  }
  .cover-line {
    width: 80px;
    height: 2px;
    background: #B8860B;
    margin: 0 auto 24px;
  }
  .cover-date {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 9pt;
    color: #8B7E6B;
    letter-spacing: 0.05em;
  }
  
  /* Table of Contents */
  .toc {
    page-break-after: always;
    padding-top: 48px;
  }
  .toc h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 18pt;
    text-align: center;
    margin-bottom: 32px;
    color: #2C2416;
  }
  .toc-item {
    display: flex;
    align-items: baseline;
    margin-bottom: 12px;
    font-size: 11pt;
  }
  .toc-flag { margin-right: 8px; }
  .toc-name {
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 600;
  }
  .toc-dots { flex: 1; border-bottom: 1px dotted #D4C5A9; margin: 0 8px; }
  .toc-sub {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 9pt;
    color: #5C4F3D;
    margin-left: 28px;
    margin-bottom: 8px;
  }
  
  /* Page break */
  .page-break { page-break-before: always; }
  
  /* Family header */
  .family-header {
    text-align: center;
    margin-bottom: 32px;
    padding-top: 24px;
  }
  .family-flag { font-size: 36pt; margin-bottom: 8px; }
  .family-name {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22pt;
    font-weight: 700;
    color: #2C2416;
    margin-bottom: 6px;
  }
  .family-subtitle {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 10pt;
    color: #5C4F3D;
  }
  
  /* Section headings */
  .section-heading {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 15pt;
    font-weight: 600;
    color: #2C2416;
    margin: 28px 0 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid #B8860B;
  }
  
  /* Generation */
  .generation {
    margin-bottom: 24px;
    page-break-inside: avoid;
  }
  .gen-label {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 13pt;
    font-weight: 600;
    color: #B8860B;
    margin-bottom: 12px;
    padding: 6px 12px;
    background: #FAF6F0;
    border-left: 3px solid #B8860B;
  }
  .gen-note {
    font-style: italic;
    color: #5C4F3D;
    font-size: 10pt;
    margin: 8px 0 8px 12px;
  }
  .gen-notes {
    margin-top: 8px;
    padding: 8px 12px;
    background: #FFFDD0;
    border: 1px solid #E8DCC8;
    border-radius: 4px;
    font-size: 10pt;
    font-style: italic;
    color: #5C4F3D;
  }
  
  /* Person card */
  .person-card {
    margin: 0 0 16px 0;
    padding: 14px 16px;
    border: 1px solid #E8DCC8;
    border-radius: 6px;
    background: #FEFDFB;
    page-break-inside: avoid;
  }
  .person-name {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 12pt;
    font-weight: 700;
    color: #2C2416;
    margin-bottom: 6px;
  }
  .person-details p {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 9pt;
    color: #5C4F3D;
    margin-bottom: 2px;
    line-height: 1.4;
  }
  .person-notes {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #E8DCC8;
  }
  .person-notes p {
    font-size: 9.5pt;
    color: #5C4F3D;
    margin-bottom: 4px;
    line-height: 1.45;
    padding-left: 10px;
    text-indent: -10px;
  }
  .person-notes p::before {
    content: "· ";
    color: #B8860B;
    font-weight: bold;
  }
  .note-warning {
    color: #8B4513 !important;
    font-style: italic;
  }
  
  /* Immigration */
  .immigration-section { margin-bottom: 24px; }
  .immigration-card {
    margin-bottom: 14px;
    padding: 12px 14px;
    background: #F0EBE3;
    border-radius: 6px;
    page-break-inside: avoid;
  }
  .imm-name { font-size: 11pt; margin-bottom: 2px; }
  .imm-details {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 9pt;
    color: #5C4F3D;
    margin-bottom: 6px;
  }
  .imm-story { font-size: 10pt; color: #5C4F3D; }
  
  /* Stories */
  .stories-section { margin-top: 28px; }
  .story {
    margin-bottom: 20px;
    page-break-inside: avoid;
  }
  .story-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 12pt;
    font-weight: 600;
    color: #2C2416;
    margin-bottom: 8px;
  }
  .story-text {
    font-size: 10.5pt;
    color: #2C2416;
    margin-bottom: 8px;
    line-height: 1.6;
    text-align: justify;
  }
  .pull-quote {
    border-left: 3px solid #B8860B;
    padding: 8px 16px;
    margin: 12px 0;
    font-style: italic;
    color: #5C4F3D;
    font-size: 10.5pt;
    background: rgba(184, 134, 11, 0.04);
  }
  
  /* Footer */
  .pdf-footer {
    text-align: center;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 8pt;
    color: #8B7E6B;
    margin-top: 48px;
    padding-top: 16px;
    border-top: 1px solid #E8DCC8;
  }
</style>
</head>
<body>

<!-- Cover -->
<div class="cover">
  <div class="cover-emoji">${emoji}</div>
  <h1 class="cover-title">${title}</h1>
  <div class="cover-line"></div>
  <p class="cover-subtitle">${subtitle}</p>
  <p class="cover-date">Compiled August 2026</p>
</div>

<!-- Table of Contents -->
<div class="toc">
  <h2>Contents</h2>
  ${families.map(f => `
    <div class="toc-item">
      <span class="toc-flag">${f.flag}</span>
      <span class="toc-name">${f.name}</span>
      <span class="toc-dots"></span>
    </div>
    <div class="toc-sub">${f.subtitle}</div>
    ${f.immigration && f.immigration.length ? '<div class="toc-sub">Immigration Stories</div>' : ''}
    <div class="toc-sub">The Generations (${f.generations.length} generations)</div>
    ${f.stories && f.stories.length ? `<div class="toc-sub">Stories &amp; Historical Notes (${f.stories.length} stories)</div>` : ''}
  `).join('')}
</div>

<!-- Content -->
${familyContent}

<div class="pdf-footer">
  <p>O'Reilly Family Heritage · oreilly-family-tree.vercel.app · Compiled by Thomas O'Reilly (Gen. 4) · Assembled August 2026</p>
</div>

</body>
</html>`;
}

async function main() {
  console.log('Extracting family data...');
  const families = await getFamiliesData();
  console.log(`Found ${families.length} family lines`);
  
  const configs = [
    {
      filename: 'oreilly-family-tree-print.pdf',
      families: families,
      title: 'The O\'Reilly Family Heritage',
      subtitle: 'From Ireland, Norway, and Bohemia to Chicago\'s South Side — Four family lines across seven generations.',
      emoji: '🌳',
    },
    {
      filename: 'oreilly-family-tree-dad.pdf',
      families: families.filter(f => ['oreilly', 'coffey'].includes(f.id)),
      title: 'O\'Reilly, Coffey & Sheehan Heritage',
      subtitle: 'From County Kilkenny and County Kerry, Ireland, to Chicago\'s South Side.',
      emoji: '☘️',
    },
    {
      filename: 'oreilly-family-tree-mom.pdf',
      families: families.filter(f => ['linnerud', 'jakubicek'].includes(f.id)),
      title: 'Linnerud, Lee, Jakubicek & Melka Heritage',
      subtitle: 'From Norway and Bohemia, to Wisconsin and Illinois.',
      emoji: '🌾',
    },
  ];
  
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  
  for (const config of configs) {
    console.log(`Generating ${config.filename}...`);
    
    const html = generateFullHTML(config.families, config.title, config.subtitle, config.emoji);
    
    // Write HTML for debugging
    const htmlPath = path.join('/tmp', config.filename.replace('.pdf', '.html'));
    fs.writeFileSync(htmlPath, html);
    
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Wait for fonts to load
    await page.evaluate(() => document.fonts.ready);
    await new Promise(r => setTimeout(r, 1000));
    
    const pdfPath = path.join(PUBLIC_DIR, config.filename);
    await page.pdf({
      path: pdfPath,
      format: 'letter',
      printBackground: true,
      margin: { top: '0.75in', right: '0.85in', bottom: '0.75in', left: '0.85in' },
      displayHeaderFooter: false,
    });
    
    const stats = fs.statSync(pdfPath);
    console.log(`  ✅ ${config.filename} (${Math.round(stats.size / 1024)}KB)`);
    
    await page.close();
  }
  
  await browser.close();
  console.log('\nAll 3 PDFs generated successfully!');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
