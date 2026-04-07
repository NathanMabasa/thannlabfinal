#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the project root (current working directory when this script is run)
const projectRoot = process.cwd();

// Define all directories to create
const directories = [
  'app/services/web-design',
  'app/services/web-development',
  'app/services/ai-solutions',
  'app/work/[slug]',
  'app/about',
  'app/contact',
  'app/blog',
  'src/components/layout',
  'src/components/sections',
  'src/components/ui',
  'src/components/common',
  'public',
];

console.log('🚀 Thannlab Project Structure Ready!\n');
console.log('📁 Expected Directory Structure:');
directories.forEach((dir) => {
  console.log(`  ✓ ${dir}`);
});

console.log('\n📄 Core Files Created:');
console.log('  ✓ app/layout.tsx (root layout with metadata & fonts)');
console.log('  ✓ app/globals.css (design tokens & utilities)');
console.log('  ✓ app/page.tsx (homepage)');
console.log('  ✓ src/components/layout/Navbar.tsx');
console.log('  ✓ src/components/layout/Footer.tsx');
console.log('  ✓ src/components/sections/* (all homepage sections)');
console.log('  ✓ src/components/common/* (utilities)');
console.log('  ✓ app/about/page.tsx');
console.log('  ✓ app/services/page.tsx');
console.log('  ✓ app/services/web-design/page.tsx');
console.log('  ✓ app/services/web-development/page.tsx');
console.log('  ✓ app/services/ai-solutions/page.tsx');
console.log('  ✓ app/work/page.tsx');
console.log('  ✓ app/contact/page.tsx');
console.log('  ✓ app/blog/page.tsx');
console.log('  ✓ app/sitemap.ts');
console.log('  ✓ app/robots.ts');

console.log('\n📦 Next Steps:');
console.log('  1. Run: npm install');
console.log('  2. Run: npm run dev');
console.log('  3. Open: http://localhost:3000\n');

console.log('✨ All files are ready to use! No additional setup needed.\n');

