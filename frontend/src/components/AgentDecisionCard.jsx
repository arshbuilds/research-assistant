import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, Database, Sparkles } from 'lucide-react';

export const AgentDecisionCard = ({ decision }) => {
  if (!decision) return null;

  const sourceIcons = {
    arxiv: <Database className="h-4 w-4" />,
    semantic_scholar: <Brain className="h-4 w-4" />,
  };

  const sourceLabels = {
    arxiv: 'ArXiv',
    semantic_scholar: 'Semantic Scholar',
  };

  return (
    <Card className="w-full max-w-3xl mx-auto border-2 border-primary/20 bg-card/80 backdrop-blur-sm shadow-card animate-fade-in-up">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-2.5 rounded-xl bg-ai-summary">
            <Sparkles className="h-5 w-5 text-primary animate-sparkle" />
          </div>
          <div className="flex-1 min-w-0 space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-foreground">AI Agent Decision</span>
              {decision.source && (
                <Badge variant="secondary" className="gap-1.5 bg-secondary text-secondary-foreground">
                  {sourceIcons[decision.source]}
                  {sourceLabels[decision.source] || decision.source}
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {decision.reasoning}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
