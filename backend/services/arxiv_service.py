import requests
import xml.etree.ElementTree as ET
from typing import List, Dict

def search_papers(query: str, max_results: int = 5) -> List[Dict]:
    """
    Search ArXiv for papers matching the query
    
    Args:
        query: Search term (e.g., "transformer neural networks")
        max_results: Maximum number of papers to return
        
    Returns:
        List of paper dictionaries with title, abstract, authors, etc.
    """
    
    base_url = "http://export.arxiv.org/api/query"
    url = f"{base_url}?search_query=all:{query}&max_results={max_results}"
    
    response = requests.get(url)
    if response.status_code != 200:
        raise Exception(f"ArXiv API error: {response.status_code}")
    
    return _parse_response(response.content)


def _parse_response(xml_content: bytes) -> List[Dict]:
    """Parse XML response from ArXiv API"""
    root = ET.fromstring(xml_content)
    papers = []
    
    for entry in root.findall('{http://www.w3.org/2005/Atom}entry'):
        paper = {
            'title': entry.find('{http://www.w3.org/2005/Atom}title').text.strip(),
            'abstract': entry.find('{http://www.w3.org/2005/Atom}summary').text.strip(),
            'published': entry.find('{http://www.w3.org/2005/Atom}published').text,
            'authors': [
                author.find('{http://www.w3.org/2005/Atom}name').text 
                for author in entry.findall('{http://www.w3.org/2005/Atom}author')
            ],
            'link': entry.find('{http://www.w3.org/2005/Atom}id').text
        }
        papers.append(paper)
    
    return papers