import { useEffect, useState } from "react";

export function useFetch(fetchFunction, params) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const stringParams = params ? new URLSearchParams(params).toString() : '';

    useEffect(() => {
        // Спросить GPT почему используются 2 пары скобок
        (async () => {
            try {
                setIsLoading(true);
                const result = await fetchFunction(params);
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [ fetchFunction, stringParams ])

    return { data, isLoading, error };
}