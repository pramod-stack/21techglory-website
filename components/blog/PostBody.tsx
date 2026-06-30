import React from 'react';
import { PostBlock } from '@/lib/blog/posts-data';

interface PostBodyProps {
  blocks: PostBlock[];
}

export default function PostBody({ blocks }: PostBodyProps) {
  // Helper to parse simple markdown bold and links into React elements
  const formatMarkdown = (text: string) => {
    if (!text) return '';
    
    // Regex matches either bold: **text** or link: [text](url)
    const boldLinkRegex = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = boldLinkRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      if (match[1].startsWith('**')) {
        // Bold match: match[2] contains the text
        parts.push(
          <strong key={key++} className="font-extrabold text-white">
            {match[2]}
          </strong>
        );
      } else {
        // Link match: match[3] is text, match[4] is url
        const linkText = match[3];
        const linkUrl = match[4];
        
        parts.push(
          <a
            key={key++}
            href={linkUrl}
            className="text-cyan-400 hover:text-cyan-300 font-semibold underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-colors"
          >
            {linkText}
          </a>
        );
      }
      lastIndex = boldLinkRegex.lastIndex;
    }

    // Add trailing text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  // Convert string to slug for anchor tags
  const slugify = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-'); // Replace multiple - with single -
  };

  return (
    <div className="prose prose-invert max-w-none space-y-6 md:space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'tldr':
            return (
              <div
                key={index}
                className="my-8 p-6 md:p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-transparent border-l-4 border-cyan-500 rounded-r-3xl backdrop-blur-sm"
              >
                <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 block mb-2">
                  Key Insight / TL;DR
                </span>
                <p className="text-gray-200 font-medium leading-relaxed italic m-0">
                  {formatMarkdown(block.content)}
                </p>
              </div>
            );

          case 'h2':
            const h2Id = slugify(block.content);
            // If it's a separator line, skip rendering as h2
            if (block.content === '---') {
              return <hr key={index} className="my-12 border-white/10" />;
            }
            return (
              <h2
                key={index}
                id={h2Id}
                className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 mt-12 mb-6 border-t border-white/5 first:border-none scroll-mt-24"
              >
                {block.content}
              </h2>
            );

          case 'h3':
            const h3Id = slugify(block.content);
            return (
              <h3
                key={index}
                id={h3Id}
                className="text-xl md:text-2xl font-semibold text-white tracking-tight pt-4 mt-8 mb-4 scroll-mt-24"
              >
                {block.content}
              </h3>
            );

          case 'p':
            if (block.content === '---') {
              return <hr key={index} className="my-12 border-white/10" />;
            }
            return (
              <p key={index} className="text-gray-300">
                {formatMarkdown(block.content)}
              </p>
            );

          case 'list':
            return (
              <ul key={index} className="space-y-3 list-disc pl-6 text-gray-300">
                {(block.content as string[]).map((item, idx) => (
                  <li key={idx} className="marker:text-cyan-500">
                    {formatMarkdown(item)}
                  </li>
                ))}
              </ul>
            );

          case 'table':
            const tableData = block.content as { headers: string[]; rows: string[][] };
            return (
              <div key={index} className="my-8 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.01]">
                <table className="w-full border-collapse text-left text-sm md:text-base">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.02]">
                      {tableData.headers.map((header, idx) => (
                        <th key={idx} className="p-4 font-bold text-white uppercase tracking-wider text-xs md:text-sm">
                          {formatMarkdown(header)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.rows.map((row, rowIdx) => (
                      <tr
                        key={rowIdx}
                        className="border-b border-white/5 last:border-none hover:bg-white/[0.01] transition-colors"
                      >
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="p-4 text-gray-300">
                            {formatMarkdown(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
