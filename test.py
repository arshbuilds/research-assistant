from oumi.inference import LlamaCppInferenceEngine
from oumi.core.configs import InferenceConfig, ModelParams
from oumi.core.types.conversation import Conversation, Message, Role

# Use a GGUF-compatible model
model_params = ModelParams(
    model_name="bartowski/SmolLM2-135M-Instruct-GGUF",
    model_kwargs={"filename": "SmolLM2-135M-Instruct-Q8_0.gguf"}
)

engine = LlamaCppInferenceEngine(model_params)

conversation = Conversation(
    messages=[Message(
        role=Role.USER, 
        content="We introduce a new method for training neural networks using attention mechanisms. Our approach achieves state-of-the-art results on multiple benchmarks including ImageNet and COCO. The key innovation is a multi-head self-attention layer that allows the model to focus on different parts of the input simultaneously."
    )]
)

inference_config = InferenceConfig()
output = engine.infer(input=[conversation], inference_config=inference_config)

# Fixed - print is now on its own line
print(output[0].messages[-1].content)