import requests
import xml.etree.ElementTree as ET

# Search ArXiv for papers
query = "transformer neural networks"
url = "http://export.arxiv.org/api/query?search_query=all:{query}&max_results=3"

response = requests.get(url)
root = ET.fromstring(response.content)

# Parse and print papers
for entry in root.findall('{http://www.w3.org/2005/Atom}entry'):
    title = entry.find('{http://www.w3.org/2005/Atom}title').text
    abstract = entry.find('{http://www.w3.org/2005/Atom}summary').text
    print(f"Title: {title}\n")
    print(f"Abstract: {abstract[:200]}...\n")
    print("-" * 80)