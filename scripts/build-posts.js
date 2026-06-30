const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content/blog');
const outputFile = path.join(__dirname, '../lib/blog/posts-data.ts');

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function parseBody(bodyText) {
  const blocks = [];
  const lines = bodyText.split('\n');
  let currentBlockType = null;
  let currentBlockLines = [];

  const flushBlock = () => {
    if (currentBlockLines.length === 0) return;
    const blockContent = currentBlockLines.join('\n').trim();
    if (!blockContent) {
      currentBlockLines = [];
      return;
    }

    if (currentBlockType === 'h2') {
      blocks.push({ type: 'h2', content: blockContent.substring(3).trim() });
    } else if (currentBlockType === 'h3') {
      blocks.push({ type: 'h3', content: blockContent.substring(4).trim() });
    } else if (currentBlockType === 'tldr') {
      let clean = blockContent;
      if (clean.startsWith('>')) clean = clean.substring(1).trim();
      if (clean.startsWith('**TL;DR:**')) clean = clean.substring(10).trim();
      blocks.push({ type: 'tldr', content: clean });
    } else if (currentBlockType === 'list') {
      const items = currentBlockLines.map(line => {
        const clean = line.trim();
        if (clean.startsWith('- ')) return clean.substring(2).trim();
        if (clean.startsWith('* ')) return clean.substring(2).trim();
        return clean;
      });
      blocks.push({ type: 'list', content: items });
    } else if (currentBlockType === 'table') {
      const rows = currentBlockLines.map(line => {
        return line.split('|').map(s => s.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      });
      if (rows.length > 0) {
        const headers = rows[0];
        const dataRows = rows.slice(2); // Skip separator row
        blocks.push({ type: 'table', content: { headers, rows: dataRows } });
      }
    } else {
      blocks.push({ type: 'p', content: blockContent });
    }

    currentBlockLines = [];
    currentBlockType = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimLine = line.trim();

    if (trimLine === '') {
      flushBlock();
      continue;
    }

    let lineType = 'p';
    if (trimLine.startsWith('## ')) lineType = 'h2';
    else if (trimLine.startsWith('### ')) lineType = 'h3';
    else if (trimLine.startsWith('>') && trimLine.includes('TL;DR')) lineType = 'tldr';
    else if (trimLine.startsWith('- ') || trimLine.startsWith('* ')) lineType = 'list';
    else if (trimLine.startsWith('|')) lineType = 'table';

    if (lineType === 'h2' || lineType === 'h3') {
      flushBlock();
      currentBlockType = lineType;
      currentBlockLines.push(line);
      flushBlock();
    } else if (lineType === 'tldr') {
      flushBlock();
      currentBlockType = 'tldr';
      currentBlockLines.push(line);
      let j = i + 1;
      while (j < lines.length && lines[j].trim().startsWith('>')) {
        currentBlockLines.push(lines[j]);
        j++;
      }
      i = j - 1;
      flushBlock();
    } else {
      if (currentBlockType && currentBlockType !== lineType) {
        flushBlock();
      }
      currentBlockType = lineType;
      currentBlockLines.push(line);
    }
  }

  flushBlock();
  return blocks;
}

function parseFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Split on frontmatter boundaries
  const parts = content.split('---');
  if (parts.length < 3) {
    throw new Error(`Invalid frontmatter in file: ${filePath}`);
  }
  
  const frontmatterText = parts[1];
  const bodyText = parts.slice(2).join('---').trim();
  
  const lines = frontmatterText.split('\n');
  const metadata = {};
  
  for (const line of lines) {
    const cleanLine = line.trim();
    if (!cleanLine || cleanLine.startsWith('#')) continue;
    
    const separatorIndex = cleanLine.indexOf(':');
    if (separatorIndex === -1) continue;
    
    const key = cleanLine.substring(0, separatorIndex).trim();
    let val = cleanLine.substring(separatorIndex + 1).trim();
    
    // Clean string values
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.substring(1, val.length - 1);
    }
    
    if (key === 'faqs') {
      try {
        metadata[key] = JSON.parse(val);
      } catch (e) {
        console.error(`Error parsing FAQs JSON in ${filePath}:`, e);
        metadata[key] = [];
      }
    } else {
      metadata[key] = val;
    }
  }
  
  const blocks = parseBody(bodyText);
  
  return {
    ...metadata,
    blocks,
    body: bodyText
  };
}

function build() {
  console.log('Compiling MDX blog posts...');
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }
  
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
  const posts = [];
  
  for (const file of files) {
    try {
      const parsed = parseFile(path.join(contentDir, file));
      posts.push(parsed);
    } catch (e) {
      console.error(`Failed to parse file ${file}:`, e);
    }
  }
  
  // Sort posts by publish date descending
  posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  
  const tsContent = `// This file is auto-generated by scripts/build-posts.js. Do not edit directly.

export interface PostBlock {
  type: 'h2' | 'h3' | 'p' | 'list' | 'table' | 'tldr';
  content: any;
}

export interface Post {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  authorUrl: string;
  category: 'Local SEO' | 'Salon Growth' | 'Web & Conversion' | 'Automation';
  intent: 'BOFU' | 'MOFU';
  targetKeyword: string;
  primaryMoneyPage: string;
  secondaryMoneyPage: string;
  ogImage: string;
  faqs: { q: string; a: string; }[];
  blocks: PostBlock[];
  body: string;
}

export const posts: Post[] = ${JSON.stringify(posts, null, 2)};
`;

  ensureDirectoryExistence(outputFile);
  fs.writeFileSync(outputFile, tsContent, 'utf-8');
  console.log(`Successfully compiled ${posts.length} posts to ${outputFile}`);
}

build();
