import React from 'react';
import { PaperCard } from './PaperCard';

export const PaperGrid = ({ papers }) => {
  if (!papers || papers.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">
          Search Results
        </h2>
        <span className="text-sm text-muted-foreground">
          {papers.length} paper{papers.length !== 1 ? 's' : ''} found
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
        {papers.map((paper, index) => (
          <PaperCard key={paper.id || index} paper={paper} />
        ))}
      </div>
    </div>
  );
};
