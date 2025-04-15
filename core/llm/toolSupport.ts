export const PROVIDER_TOOL_SUPPORT: Record<
  string,
  (model: string) => boolean | undefined
> = {
  "continue-proxy": (model) => true,
  anthropic: (model) => true,
  openai: (model) => true,
  gemini: (model) => true,
  vertexai: (model) => true,
  bedrock: (model) => true,
  ollama: (model) => true,
  sambanova: (model) => true,
};
