import { LLMStoreState } from "@/interface/store/LLMStoreInterface";
import { create } from "zustand";

export const useLLMStore = create<LLMStoreState>((set, get) => ({
  baseUrl: "https://openrouter.ai/api/v1/models",
  llmInfo: null,
  tokenNumber: 0,
  loadingLLMInfo: false,
  fetchLLmComplete: false,
  fetchFailed: false,
  setBaseUrl: (value: string) => set({ baseUrl: value }),
  setLLMInfo: (llminformation) => set({ llmInfo: llminformation }),
  setTokenNumber: (value) => set({ tokenNumber: value }),
  setLoadingLLMInfo: (loading) => set({ loadingLLMInfo: loading }),
  setFetchLLmComplete: (complete) => set({ fetchLLmComplete: complete }),
  setFetchFailed: (failed) => set({ fetchFailed: failed }),
  fetchLLMInfo: async () => {
    set({ loadingLLMInfo: true, fetchLLmComplete: false, fetchFailed: false });
    try {
      const response = await fetch(get().baseUrl);
      if (!response.ok) throw new Error("Network response was not ok");
      let data = await response.json();
      console.log("Fetched LLM info:", data);

      data = data["data"];
      data.sort();
      set({ llmInfo: data, fetchLLmComplete: true });
    } catch (error) {
      console.error("Failed to fetch LLM info:", error);
      set({ fetchFailed: true });
    } finally {
      set({ loadingLLMInfo: false });
    }
  },
}));
