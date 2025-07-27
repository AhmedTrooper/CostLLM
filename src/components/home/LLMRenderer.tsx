import { useLLMStore } from "@/store/LLMStore";
import { Card } from "@heroui/react";

export default function LLMRenderer() {
  const llmInfo = useLLMStore((state) => state.llmInfo);
  if (!llmInfo) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      {llmInfo.map((llm) => (
        <Card
          key={llm.id}
          className="mb-4"
        >
          <h2 className="text-xl font-bold">{llm.name}</h2>
          <p className="text-gray-700">{llm.description}</p>
        </Card>
      ))}
    </div>
  );
}
