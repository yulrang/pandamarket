import { useCallback, useState } from "react";

export function useAsync(asyncFunction: (...args: any[]) => Promise<any>) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const wrappedFunction = useCallback(
    async (...args: any[]) => {
      try {
        setPending(true);
        setError("");
        return await asyncFunction(...args);
      } catch (error) {
        const nextError = new Error("error");
        setError(nextError.message);
        return;
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );
  return [pending, error, wrappedFunction];
}