// Mock data for the research paper finder
export const mockPapers = [
  {
    id: '1',
    title: 'Attention Is All You Need: Revolutionizing Sequence-to-Sequence Models',
    authors: ['Ashish Vaswani', 'Noam Shazeer', 'Niki Parmar', 'Jakob Uszkoreit', 'Llion Jones', 'Aidan N. Gomez'],
    abstract: 'The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train.',
    ai_summary: 'Introduces the Transformer architecture that uses self-attention mechanisms exclusively, eliminating recurrence and convolutions. This breakthrough enables better parallelization and faster training while achieving state-of-the-art results in machine translation tasks.',
    published_date: '2017-06-12',
    url: 'https://arxiv.org/abs/1706.03762',
    source: 'arxiv',
  },
  {
    id: '2',
    title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
    authors: ['Jacob Devlin', 'Ming-Wei Chang', 'Kenton Lee', 'Kristina Toutanova'],
    abstract: 'We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result, the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models for a wide range of tasks.',
    ai_summary: 'BERT revolutionizes NLP by pre-training bidirectional transformers on unlabeled text. The model captures context from both directions simultaneously, enabling superior performance across multiple downstream tasks with minimal task-specific modifications.',
    published_date: '2018-10-11',
    url: 'https://arxiv.org/abs/1810.04805',
    source: 'arxiv',
  },
  {
    id: '3',
    title: 'Language Models are Few-Shot Learners: GPT-3 and In-Context Learning',
    authors: ['Tom Brown', 'Benjamin Mann', 'Nick Ryder', 'Melanie Subbiah'],
    abstract: 'Recent work has demonstrated substantial gains on many NLP tasks and benchmarks by pre-training on a large corpus of text followed by fine-tuning on a specific task. While typically task-agnostic in architecture, this method still requires task-specific fine-tuning datasets of thousands or tens of thousands of examples. We show that scaling up language models greatly improves task-agnostic, few-shot performance, sometimes even reaching competitiveness with prior state-of-the-art fine-tuning approaches.',
    ai_summary: 'GPT-3 demonstrates that massive language models can perform various NLP tasks with minimal examples through in-context learning. This paradigm shift reduces the need for task-specific fine-tuning, opening new possibilities for general-purpose AI systems.',
    published_date: '2020-05-28',
    url: 'https://arxiv.org/abs/2005.14165',
    source: 'semantic_scholar',
  },
  {
    id: '4',
    title: 'An Image is Worth 16x16 Words: Vision Transformers for Image Classification',
    authors: ['Alexey Dosovitskiy', 'Lucas Beyer', 'Alexander Kolesnikov', 'Dirk Weissenborn'],
    abstract: 'While the Transformer architecture has become the de-facto standard for natural language processing tasks, its applications to computer vision remain limited. In vision, attention is either applied in conjunction with convolutional networks, or used to replace certain components of convolutional networks while keeping their overall structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to sequences of image patches can perform very well on image classification tasks.',
    ai_summary: 'Vision Transformer (ViT) applies pure transformer architecture to image classification by treating images as sequences of patches. This approach achieves excellent results without convolutions, demonstrating transformers\' versatility beyond NLP.',
    published_date: '2020-10-22',
    url: 'https://arxiv.org/abs/2010.11929',
    source: 'arxiv',
  },
  {
    id: '5',
    title: 'Deep Residual Learning for Image Recognition: Understanding Skip Connections',
    authors: ['Kaiming He', 'Xiangyu Zhang', 'Shaoqing Ren', 'Jian Sun'],
    abstract: 'Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth.',
    ai_summary: 'ResNet introduces skip connections that enable training of extremely deep networks by learning residual mappings. This innovation solves the degradation problem and allows networks with hundreds of layers to be effectively trained.',
    published_date: '2015-12-10',
    url: 'https://arxiv.org/abs/1512.03385',
    source: 'semantic_scholar',
  },
  {
    id: '6',
    title: 'Generative Adversarial Networks: A New Paradigm for Generative Models',
    authors: ['Ian J. Goodfellow', 'Jean Pouget-Abadie', 'Mehdi Mirza', 'Bing Xu', 'David Warde-Farley'],
    abstract: 'We propose a new framework for estimating generative models via an adversarial process, in which we simultaneously train two models: a generative model G that captures the data distribution, and a discriminative model D that estimates the probability that a sample came from the training data rather than G. The training procedure for G is to maximize the probability of D making a mistake.',
    ai_summary: 'GANs introduce adversarial training where a generator and discriminator compete to produce realistic data. This game-theoretic approach revolutionizes generative modeling, enabling synthesis of highly realistic images and other content.',
    published_date: '2014-06-10',
    url: 'https://arxiv.org/abs/1406.2661',
    source: 'arxiv',
  },
];

export const mockAgentDecisions = {
  transformers: {
    source: 'arxiv',
    reasoning: 'Based on your query about transformers, I\'m searching ArXiv for the most recent and foundational papers on transformer architectures. ArXiv has comprehensive coverage of this topic given its origins in deep learning research.',
  },
  nlp: {
    source: 'semantic_scholar',
    reasoning: 'For NLP-related queries, I\'m leveraging Semantic Scholar\'s citation network to find highly-cited and influential papers. This source excels at identifying impactful research in natural language processing.',
  },
  'computer vision': {
    source: 'arxiv',
    reasoning: 'Computer vision research is extensively published on ArXiv. I\'m searching for papers that bridge traditional CV techniques with modern deep learning approaches, including vision transformers.',
  },
  'machine learning': {
    source: 'semantic_scholar',
    reasoning: 'For broad machine learning topics, Semantic Scholar provides excellent coverage across multiple venues. I\'m identifying papers with high citation counts and strong influence scores.',
  },
  default: {
    source: 'arxiv',
    reasoning: 'Analyzing your query to find the most relevant research papers. I\'m searching ArXiv for recent preprints and established papers in this domain, prioritizing highly-cited and influential work.',
  },
};

export const getAgentDecision = (query) => {
  const lowerQuery = query.toLowerCase();
  
  for (const [key, decision] of Object.entries(mockAgentDecisions)) {
    if (key !== 'default' && lowerQuery.includes(key)) {
      return decision;
    }
  }
  
  return mockAgentDecisions.default;
};

export const filterPapers = (query) => {
  const lowerQuery = query.toLowerCase();
  
  return mockPapers.filter((paper) => {
    const titleMatch = paper.title.toLowerCase().includes(lowerQuery);
    const abstractMatch = paper.abstract.toLowerCase().includes(lowerQuery);
    const summaryMatch = paper.ai_summary.toLowerCase().includes(lowerQuery);
    
    return titleMatch || abstractMatch || summaryMatch;
  });
};
