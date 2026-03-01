#!/usr/bin/env node

/**
 * Heading Hierarchy Audit Script
 * 
 * Checks for proper heading order (h1 → h2 → h3, etc.)
 * Lighthouse fails when headings skip levels (h1 → h3 without h2)
 * 
 * Usage: node scripts/heading-audit.js
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const issues = [];
let filesChecked = 0;

// Recursively find all Astro and TSX files
function findFiles(dir, fileList = []) {
  const files = readdirSync(dir);

  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.astro') && !file.includes('dist')) {
        findFiles(filePath, fileList);
      }
    } else {
      const ext = extname(file);
      if (ext === '.astro' || ext === '.tsx' || ext === '.jsx') {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

// Check heading hierarchy in file
function checkFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  // Find all headings with line numbers
  const headings = [];
  const headingRegex = /<h([1-6])[^>]*>/gi;
  
  lines.forEach((line, index) => {
    let match;
    while ((match = headingRegex.exec(line)) !== null) {
      const level = parseInt(match[1]);
      headings.push({
        level,
        line: index + 1,
        content: line.trim().substring(0, 100),
      });
    }
  });

  if (headings.length === 0) return;

  filesChecked++;

  // Check for multiple h1 tags
  const h1Count = headings.filter(h => h.level === 1).length;
  if (h1Count > 1) {
    issues.push({
      file: filePath,
      type: 'multiple-h1',
      message: `Found ${h1Count} <h1> tags (should be only 1 per page)`,
      headings: headings.filter(h => h.level === 1),
    });
  }

  // Check for skipped levels
  for (let i = 1; i < headings.length; i++) {
    const prev = headings[i - 1].level;
    const curr = headings[i].level;
    
    // Heading can go down by 1 or stay same or go back up any amount
    // But can't skip levels going down (e.g., h2 → h4 is bad)
    if (curr > prev + 1) {
      issues.push({
        file: filePath,
        type: 'skipped-level',
        message: `Skipped from <h${prev}> to <h${curr}> (missing <h${prev + 1}>)`,
        location: `Line ${headings[i].line}`,
        context: headings[i].content,
      });
    }
  }

  // Check if h1 comes first
  if (headings.length > 0 && headings[0].level !== 1) {
    issues.push({
      file: filePath,
      type: 'no-h1-first',
      message: `First heading is <h${headings[0].level}> (should start with <h1>)`,
      location: `Line ${headings[0].line}`,
    });
  }
}

// Main audit function
function runAudit() {
  console.log('🔍 Running Heading Hierarchy Audit...\n');

  const files = findFiles('src');
  console.log(`📄 Scanning ${files.length} files...\n`);

  files.forEach(checkFile);

  // Report results
  console.log('═══════════════════════════════════════════════════════');
  console.log('            HEADING HIERARCHY AUDIT RESULTS            ');
  console.log('═══════════════════════════════════════════════════════\n');

  if (issues.length === 0) {
    console.log(`✅ PERFECT! All ${filesChecked} files with headings are properly structured!`);
    console.log('   Your heading hierarchy is SEO-optimized.\n');
  } else {
    console.log(`❌ Found ${issues.length} heading issue(s) in ${filesChecked} files:\n`);

    // Group by type
    const multipleH1 = issues.filter(i => i.type === 'multiple-h1');
    const skipped = issues.filter(i => i.type === 'skipped-level');
    const noH1First = issues.filter(i => i.type === 'no-h1-first');

    if (multipleH1.length > 0) {
      console.log(`❌ MULTIPLE <h1> TAGS (${multipleH1.length}):`);
      console.log('   Only ONE <h1> per page is allowed for SEO!\n');
      multipleH1.forEach(issue => {
        console.log(`   ${issue.file}`);
        console.log(`   ${issue.message}`);
        issue.headings.forEach(h => {
          console.log(`     Line ${h.line}: ${h.content}`);
        });
        console.log('');
      });
    }

    if (skipped.length > 0) {
      console.log(`⚠️  SKIPPED HEADING LEVELS (${skipped.length}):`);
      console.log('   Headings must go h1 → h2 → h3 (no skipping!)\n');
      skipped.slice(0, 10).forEach(issue => {
        console.log(`   ${issue.file}`);
        console.log(`   ${issue.message}`);
        console.log(`   ${issue.location}`);
        console.log(`   ${issue.context}`);
        console.log('');
      });
      if (skipped.length > 10) {
        console.log(`   ... and ${skipped.length - 10} more\n`);
      }
    }

    if (noH1First.length > 0) {
      console.log(`⚠️  MISSING <h1> FIRST (${noH1First.length}):`);
      console.log('   Page should start with <h1>, not lower heading\n');
      noH1First.forEach(issue => {
        console.log(`   ${issue.file}`);
        console.log(`   ${issue.message}`);
        console.log(`   ${issue.location}`);
        console.log('');
      });
    }

    console.log('═══════════════════════════════════════════════════════');
    console.log('\n📖 HOW TO FIX:\n');
    console.log('1. Multiple <h1>: Choose main page title, change others to <h2>');
    console.log('2. Skipped levels: Insert missing heading level (e.g., add <h2> before <h3>)');
    console.log('3. No <h1> first: Change first heading to <h1>');
    console.log('\n✅ PROPER HIERARCHY EXAMPLE:\n');
    console.log('<h1>Main Page Title</h1>         ← Only ONE per page');
    console.log('  <h2>Major Section</h2>');
    console.log('    <h3>Subsection</h3>');
    console.log('      <h4>Minor Detail</h4>');
    console.log('  <h2>Another Major Section</h2>');
    console.log('    <h3>Another Subsection</h3>');
    console.log('\n❌ BAD HIERARCHY EXAMPLE:\n');
    console.log('<h1>Page Title</h1>');
    console.log('<h1>Another Title</h1>            ← Two h1 tags!');
    console.log('  <h3>Subsection</h3>             ← Skipped h2!');
    console.log('    <h5>Detail</h5>               ← Skipped h4!');
    console.log('\n═══════════════════════════════════════════════════════\n');
  }

  // Exit with error code if issues found
  process.exit(issues.length > 0 ? 1 : 0);
}

// Run the audit
runAudit();
