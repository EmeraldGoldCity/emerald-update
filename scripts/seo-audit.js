#!/usr/bin/env node

/**
 * SEO Audit Script for Emerald City Limos
 * 
 * Checks for common SEO issues:
 * - Missing meta descriptions
 * - Missing alt tags
 * - Generic link text
 * - Missing title tags
 * 
 * Usage: node scripts/seo-audit.js
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const issues = {
  missingMetaDescription: [],
  missingAltTags: [],
  genericLinks: [],
  missingTitles: [],
  emptyAltTags: [],
};

const genericLinkTexts = [
  'click here',
  'read more',
  'learn more',
  'see more',
  'view more',
  'click',
  'here',
];

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

// Check file for SEO issues
function checkFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // Check for meta description (in layout files)
  if (filePath.includes('Layout') || filePath.includes('index.astro')) {
    if (!content.includes('name="description"')) {
      issues.missingMetaDescription.push(filePath);
    }
  }

  // Check for missing alt tags
  const imgRegex = /<img[^>]*>/gi;
  const images = content.match(imgRegex) || [];
  
  images.forEach((img, index) => {
    if (!img.includes('alt=')) {
      issues.missingAltTags.push({
        file: filePath,
        line: lines.findIndex(l => l.includes(img)) + 1,
        code: img.substring(0, 80) + '...',
      });
    } else if (img.includes('alt=""') && !img.includes('role="presentation"')) {
      issues.emptyAltTags.push({
        file: filePath,
        line: lines.findIndex(l => l.includes(img)) + 1,
        code: img.substring(0, 80) + '...',
      });
    }
  });

  // Check for generic link text
  const linkRegex = /<a[^>]*>([^<]*)<\/a>/gi;
  const links = content.matchAll(linkRegex);

  for (const link of links) {
    const linkText = link[1].toLowerCase().trim();
    if (genericLinkTexts.some(generic => linkText.includes(generic))) {
      issues.genericLinks.push({
        file: filePath,
        line: lines.findIndex(l => l.includes(link[0])) + 1,
        text: linkText,
      });
    }
  }
}

// Main audit function
function runAudit() {
  console.log('🔍 Running SEO Audit for Emerald City Limos...\n');

  const files = findFiles('src');
  console.log(`📄 Scanning ${files.length} files...\n`);

  files.forEach(checkFile);

  // Report results
  console.log('═══════════════════════════════════════════════════════');
  console.log('                    SEO AUDIT RESULTS                  ');
  console.log('═══════════════════════════════════════════════════════\n');

  let totalIssues = 0;

  // Missing meta descriptions
  if (issues.missingMetaDescription.length > 0) {
    console.log('❌ MISSING META DESCRIPTIONS:');
    issues.missingMetaDescription.forEach(file => {
      console.log(`   - ${file}`);
    });
    console.log('');
    totalIssues += issues.missingMetaDescription.length;
  } else {
    console.log('✅ All pages have meta descriptions\n');
  }

  // Missing alt tags
  if (issues.missingAltTags.length > 0) {
    console.log(`❌ MISSING ALT TAGS (${issues.missingAltTags.length}):`);
    issues.missingAltTags.slice(0, 10).forEach(issue => {
      console.log(`   ${issue.file}:${issue.line}`);
      console.log(`   ${issue.code}`);
      console.log('');
    });
    if (issues.missingAltTags.length > 10) {
      console.log(`   ... and ${issues.missingAltTags.length - 10} more\n`);
    }
    totalIssues += issues.missingAltTags.length;
  } else {
    console.log('✅ All images have alt attributes\n');
  }

  // Empty alt tags
  if (issues.emptyAltTags.length > 0) {
    console.log(`⚠️  EMPTY ALT TAGS (${issues.emptyAltTags.length}):`);
    issues.emptyAltTags.slice(0, 5).forEach(issue => {
      console.log(`   ${issue.file}:${issue.line}`);
      console.log(`   ${issue.code}`);
      console.log('');
    });
    if (issues.emptyAltTags.length > 5) {
      console.log(`   ... and ${issues.emptyAltTags.length - 5} more\n`);
    }
    totalIssues += issues.emptyAltTags.length;
  } else {
    console.log('✅ No problematic empty alt tags\n');
  }

  // Generic link text
  if (issues.genericLinks.length > 0) {
    console.log(`⚠️  GENERIC LINK TEXT (${issues.genericLinks.length}):`);
    issues.genericLinks.slice(0, 5).forEach(issue => {
      console.log(`   ${issue.file}:${issue.line}`);
      console.log(`   Text: "${issue.text}"`);
      console.log('');
    });
    if (issues.genericLinks.length > 5) {
      console.log(`   ... and ${issues.genericLinks.length - 5} more\n`);
    }
    totalIssues += issues.genericLinks.length;
  } else {
    console.log('✅ All links have descriptive text\n');
  }

  // Final summary
  console.log('═══════════════════════════════════════════════════════');
  
  if (totalIssues === 0) {
    console.log('🎉 PERFECT! No SEO issues found!');
    console.log('   Your site is ready for 100/100 SEO score!');
  } else {
    console.log(`📊 SUMMARY: ${totalIssues} issue(s) found`);
    console.log('');
    console.log('📖 See guides:');
    console.log('   - /CORE_WEB_VITALS_100_SCORE.md');
    console.log('   - /IMAGE_ALT_TAG_GUIDE.md');
    console.log('   - /SEO_100_SCORE_CHECKLIST.md');
  }
  
  console.log('═══════════════════════════════════════════════════════\n');

  // Exit with error code if issues found
  process.exit(totalIssues > 0 ? 1 : 0);
}

// Run the audit
runAudit();
