import {useEffect, useState} from "react";
import apiClient from "@/services/apiClient.ts";
import {AxiosRequestConfig, CanceledError} from "axios";
import {GameQuery} from "@/App.tsx";

interface FetchResponse<T> {
    count: number;
    results: T[]
}

export default function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: GameQuery): FetchResponse<T> {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setLoading(true)
        //console.log(requestConfig)
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
            .then(res => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            })

        return () => controller.abort()
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps ? [...deps] : []);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return {data, error, loading}
}