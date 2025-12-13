import React from 'react';
import { Sparkles, GraduationCap } from 'lucide-react';

export const Header = () => {
  return (
    <header className="text-center space-y-6 py-8 md:py-12 animate-fade-in-up">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="relative">
          <div className="p-3 rounded-2xl bg-primary shadow-button">
            <GraduationCap className="h-8 w-8 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-1 -right-1 p-1 rounded-md bg-card border border-border shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          AI Research Paper Finder
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Find ML/NLP papers with AI-powered summarization using{' '}
          <span className="font-semibold text-primary">Oumi</span>
        </p>
      </div>
    </header>
  );
};
