import { useRef, useEffect } from "react";
export function useOnce(callback) {
    const hasRun = useRef(false);
    useEffect(() => {
        if (!hasRun.current) {
            hasRun.current = true;
            if (callback) {
                callback();
            }
        }
    }, []);
}