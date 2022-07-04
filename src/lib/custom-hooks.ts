import { useEffect, useState } from "react";

export function useFetch(request: RequestInfo, init?: RequestInit) {
  const [response, setResponse] = useState<null | Response>(null);
  const [error, setError] = useState<Error | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch(request, {
          ...init,
          signal: abortController.signal,
        });
        setResponse(await response?.json());
        setIsLoading(false);
      } catch (error) {
        if (isAbortError(error)) {
          return;
        }
        setError(error as any);
        setIsLoading(false);
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [init, request]);
  const responseJson = response.json()
  return { responseJson, error, isLoading };
}

// type guards
function isAbortError(error: any): error is DOMException {
  if (error && error.name === "AbortError") {
    return true;
  }
  return false;
}