import React from 'react';
import { Search, BookOpen, Sparkles } from 'lucide-react';

export const EmptyState = ({ hasSearched }) => {
  if (hasSearched) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 animate-fade-in-up">
        <div className="p-4 rounded-2xl bg-muted/50 mb-4">
          <Search className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No papers found
        </h3>
        <p className="text-sm text-muted-foreground text-center max-w-md">
          Try adjusting your search terms or exploring different research topics.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 animate-fade-in-up">
      <div className="relative mb-6">
        <div className="p-5 rounded-2xl bg-ai-summary border border-ai-summary-border">
          <BookOpen className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute -top-1 -right-1 p-1.5 rounded-lg bg-primary">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-3">
        Start Your Research Journey
      </h3>
      <p className="text-sm text-muted-foreground text-center max-w-md leading-relaxed">
        Enter a topic above to discover relevant papers from ArXiv and Semantic Scholar, 
        enhanced with AI-powered summaries by Oumi.
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
        {['Transformers', 'Natural Language Processing', 'Computer Vision', 'Reinforcement Learning'].map((topic) => (
          <span
            key={topic}
            className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};
