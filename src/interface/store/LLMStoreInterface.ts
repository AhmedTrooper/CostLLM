import { LLMInfo, TokenNumber } from "../types/LLMInfo";

export interface LLMStoreState {
  baseUrl: string;
  llmInfo: LLMInfo[] | null;
  tokenNumber: number | TokenNumber;
  setBaseUrl: (value: string) => void;
  setLLMInfo: (llminformation: LLMInfo[] | null) => void;
  setTokenNumber: (value: number | TokenNumber) => void;
  loadingLLMInfo: boolean;
  setLoadingLLMInfo: (loading: boolean) => void;
  fetchLLmComplete: boolean;
  setFetchLLmComplete: (complete: boolean) => void;
  fetchFailed: boolean;
  setFetchFailed: (failed: boolean) => void;
  fetchLLMInfo: () => Promise<void>;
}
