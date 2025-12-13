import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Skeleton } from './ui/skeleton';

const PaperCardSkeleton = () => (
  <Card className="flex flex-col h-full bg-card border border-border shadow-card">
    <CardHeader className="pb-3 space-y-3">
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </CardHeader>

    <CardContent className="flex-1 pt-0 space-y-4">
      <div className="rounded-xl p-4 bg-ai-summary border border-ai-summary-border">
        <Skeleton className="h-4 w-24 mb-3" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </div>
      
      <Skeleton className="h-8 w-40" />
    </CardContent>

    <CardFooter className="pt-3 mt-auto flex items-center justify-between border-t border-border/50">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-8 w-28 rounded-md" />
    </CardFooter>
  </Card>
);

export const LoadingSkeleton = () => (
  <div className="w-full">
    <div className="flex items-center justify-between mb-6">
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-4 w-24" />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <PaperCardSkeleton key={index} />
      ))}
    </div>
  </div>
);
