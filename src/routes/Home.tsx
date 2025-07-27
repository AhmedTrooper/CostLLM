import { useLLMStore } from "@/store/LLMStore";
import { Card, CardHeader } from "@heroui/card";
import { number } from "framer-motion";

export default function Home() {
  const llmInfo = useLLMStore((state) => state.llmInfo);
  if (!llmInfo) {
    return <div className="p-8">Loading...</div>;
  }
  return (
    <div className="p-8 grid justify-items-center justify-center">
      {llmInfo.map((llm) => (
        <Card
          key={llm.id}
          className="mb-4 w-full max-w-[70vw] sm:max-w-[80vw] p-2 sm:p-4"
        >
          <CardHeader>
            <h2 className="text-xl font-bold">{llm.name}</h2>
          </CardHeader>
          <p className="text-gray-700">
            {parseFloat(llm.pricing.prompt) * 1000000}$ / million tokens
          </p>
        </Card>
      ))}
    </div>
  );
}
