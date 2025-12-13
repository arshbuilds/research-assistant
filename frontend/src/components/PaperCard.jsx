import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { ExternalLink, Calendar, Users, Sparkles, FileText } from 'lucide-react';

export const PaperCard = ({ paper }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatAuthors = (authors) => {
    if (!authors || authors.length === 0) return 'Unknown authors';
    if (authors.length <= 3) return authors.join(', ');
    return `${authors.slice(0, 3).join(', ')} +${authors.length - 3} more`;
  };

  return (
    <Card className="flex flex-col h-full bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
      <CardHeader className="pb-3 space-y-3">
        <h3 className="font-semibold text-base leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {paper.title}
        </h3>
        
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Users className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="text-xs truncate">
            {formatAuthors(paper.authors)}
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pt-0 space-y-4">
        {/* AI Summary Section */}
        <div className="rounded-xl p-4 bg-ai-summary border border-ai-summary-border">
          <div className="flex items-center gap-2 mb-2.5">
            <Sparkles className="h-4 w-4 text-primary animate-sparkle" />
            <span className="text-xs font-semibold text-primary">AI Summary</span>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed line-clamp-3">
            {paper.ai_summary || 'AI summary is being generated...'}
          </p>
        </div>

        {/* Expandable Abstract */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="abstract" className="border-none">
            <AccordionTrigger className="py-2 text-xs font-medium text-muted-foreground hover:text-primary hover:no-underline gap-2 [&[data-state=open]]:text-primary">
              <div className="flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" />
                <span>Show original abstract</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-0">
              <div className="text-sm text-muted-foreground leading-relaxed bg-muted/50 rounded-lg p-3">
                {paper.abstract || 'No abstract available.'}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>

      <CardFooter className="pt-3 mt-auto flex items-center justify-between border-t border-border/50">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <span className="text-xs">{formatDate(paper.published_date)}</span>
        </div>
        
        <Button
          variant="paper"
          size="sm"
          asChild
          className="gap-1.5"
        >
          <a
            href={paper.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Paper</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
