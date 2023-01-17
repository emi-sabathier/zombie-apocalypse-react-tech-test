import { useEffect, useState } from 'react';

export interface UseFetchDataType<T> {
    isLoading: boolean;
    response: T | null;
    error: boolean;
}

export const useFetch = <T,>(url: string): UseFetchDataType<T> => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                const json = await res?.json();
                if (json.data.length > 0 || Object.keys(json.data).length > 0) {
                    setResponse(json);
                    setIsLoading(false);
                }
            } catch (e) {
                if (e instanceof Error) {
                    setError(true);
                    throw new Error(e.message);
                }
            }
        })();
    }, []);

    return {
        error,
        isLoading,
        response,
    };
};
