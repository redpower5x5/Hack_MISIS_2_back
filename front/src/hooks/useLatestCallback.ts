import { useEffect, useRef } from "react";

const useLatestCallback = <Callback extends (...args: unknown[]) => unknown>(
  cb: Callback
): Callback => {
  const cbRef = useRef(cb);
  useEffect(() => {
    cbRef.current = cb;
  });

  return useRef(((...args) => {
    return cbRef.current(...args);
  }) as Callback).current;
};

export default useLatestCallback;
