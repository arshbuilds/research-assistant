import React, { useState, useCallback } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { AgentDecisionCard } from "./components/AgentDecisionCard";
import { PaperGrid } from "./components/PaperGrid";
import { EmptyState } from "./components/EmptyState";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { mockPapers, getAgentDecision, filterPapers } from "./data/mockPapers";

function App() {
  const [query, setQuery] = useState("");
  const [papers, setPapers] = useState([]);
  const [agentDecision, setAgentDecision] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = useCallback(async (searchQuery) => {
    if (!searchQuery.trim()) return;
    setIsLoading(true);
    setHasSearched(true);

    const kestraUrl =
      "http://localhost:8080/api/v1/executions/webhook/hackathon/test-ai-agent/search-papers";

    const response = await fetch(kestraUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inputs: { query },
      }),
    });
    const data = await response.json();
    console.log("Kestra Response:", data);

    setPapers(results);
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Hero Section */}
        <Header />

        {/* Search Section */}
        <section className="mb-8">
          <SearchBar
            query={query}
            setQuery={setQuery}
            onSearch={handleSearch}
            isLoading={isLoading}
          />
        </section>

        {/* AI Agent Decision */}
        {agentDecision && !isLoading && (
          <section className="mb-8">
            <AgentDecisionCard decision={agentDecision} />
          </section>
        )}

        {/* Results Section */}
        <section>
          {isLoading ? (
            <LoadingSkeleton />
          ) : papers.length > 0 ? (
            <PaperGrid papers={papers} />
          ) : (
            <EmptyState hasSearched={hasSearched} />
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
