import requests
from typing import List, Dict

def search_papers(query: str, max_results: int = 5) -> List[Dict]:
    print("Searching Semantic Scholar for papers...")
    """
    Search Semantic Scholar for papers
    
    Args:
        query: Search term
        max_results: Maximum number of papers to return
        
    Returns:
        List of paper dictionaries
    """
    base_url = "https://api.semanticscholar.org/graph/v1/paper/search"
    
    params = {
        'query': query,
        'limit': max_results,
        'fields': 'title,abstract,authors,year,citationCount,url'
    }
    
    response = requests.get(base_url, params=params)
    
    if response.status_code != 200:
        raise Exception(f"Semantic Scholar API error: {response.status_code}")
    
    data = response.json()
    papers = []
    
    for item in data.get('data', []):
        if item.get('abstract'):  # Only include papers with abstracts
            paper = {
                'title': item['title'],
                'abstract': item['abstract'],
                'authors': [author['name'] for author in item.get('authors', [])],
                'year': item.get('year'),
                'citations': item.get('citationCount', 0),
                'link': item.get('url', ''),
                'source': 'Semantic Scholar'
            }
            papers.append(paper)
    
    return papers

# Test
if __name__ == "__main__":
    papers = search_papers("transformers neural networks", max_results=3)
    
    for paper in papers:
        print(f"📄 {paper['title']}")
        print(f"👥 {', '.join(paper['authors'][:3])}")
        print(f"📅 {paper['year']} | 📊 {paper['citations']} citations")
        print(f"📝 {paper['abstract'][:150]}...")
        print("-" * 80)