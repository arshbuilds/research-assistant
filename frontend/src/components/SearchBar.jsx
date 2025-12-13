import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, Loader2 } from 'lucide-react';

export const SearchBar = ({ query, setQuery, onSearch, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter research topic (e.g., transformers, NLP, computer vision)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-14 pl-12 pr-4 text-base rounded-2xl border-2 border-border bg-card shadow-card focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/70"
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          variant="ai"
          size="xl"
          disabled={isLoading || !query.trim()}
          className="rounded-2xl min-w-[140px]"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Searching...</span>
            </>
          ) : (
            <>
              <Search className="h-5 w-5" />
              <span>Search</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
