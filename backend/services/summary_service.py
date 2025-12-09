from oumi.inference import LlamaCppInferenceEngine
from oumi.core.configs import InferenceConfig, ModelParams
from oumi.core.types.conversation import Conversation, Message, Role
from typing import List, Dict

# Global engine (initialized once)
_engine = None
_inference_config = None


def _get_engine():
    """Lazy initialization of the LLM engine"""
    global _engine, _inference_config
    if _engine is None:
        model_params = ModelParams(
            model_name="bartowski/SmolLM2-135M-Instruct-GGUF",
            model_kwargs={"filename": "SmolLM2-135M-Instruct-Q8_0.gguf"}
        )
        _engine = LlamaCppInferenceEngine(model_params)
        _inference_config = InferenceConfig()
    return _engine, _inference_config



def summarize_text(text: str, instruction: str = "Summarize this in 2-3 sentences") -> str:
    """
    Summarize given text
    
    Args:
        text: Text to summarize
        instruction: Instruction for the model
        
    Returns:
        Summary string
    """
    engine, config = _get_engine()
    prompt = f"{instruction}:\n\n{text}"
    
    conversation = Conversation(
        messages=[Message(role=Role.USER, content=prompt)]
    )
    
    output = engine.infer(input=[conversation], inference_config=config)
    return output[0].messages[-1].content



def summarize_papers(papers: List[Dict]) -> List[Dict]:
    """
    Add summaries to a list of papers
    
    Args:
        papers: List of paper dictionaries with 'abstract' field
        
    Returns:
        Papers with added 'summary' field
    """
    for paper in papers:
        paper['summary'] = summarize_text(paper['abstract'])
    return papers












