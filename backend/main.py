# from services.arxiv_service import search_papers
from services.summary_service import summarize_papers
from services.semantic_scholar_service import search_papers as ss_search_papers

def main():
    # Fetch papers
    papers = ss_search_papers("neural networks", max_results=3)
    # papers.append(ss_search_papers("transformers", max_results=3))
    print(f"Found {len(papers)} papers\n")
    print(papers)
    
    # Summarize them
    print("🤖 Generating summaries...\n")
    papers_with_summaries = summarize_papers(papers)
    
    # Display results
    for i, paper in enumerate(papers_with_summaries, 1):
        print(f"{i}. 📄 {paper['title']}")
        print(f"   👥 {', '.join(paper['authors'][:2])}")
        print(f"   📅 {paper['published'][:10]}")
        print(f"   💡 Summary: {paper['summary']}")
        print(f"   🔗 {paper['link']}\n")
        print("-" * 80 + "\n")

if __name__ == "__main__":
    main()
