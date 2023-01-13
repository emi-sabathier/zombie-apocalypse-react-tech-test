import { useEffect, useState } from 'react';

export interface UseFetchDataType<T> {
    isLoading: boolean;
    dataList: T | null;
}

export const useFetch = <T,>(url: string): UseFetchDataType<T> => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [dataList, setDataList] = useState<T | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                const json = await res?.json();
                if (json.data.length > 0) {
                    setDataList(json);
                    setIsLoading(false);
                }
            } catch (e) {
                if (e instanceof Error) {
                    throw new Error(e.message);
                }
            }
        })();
    }, []);

    return {
        isLoading,
        dataList,
    };
};
