import {useEffect, useState} from "react";
import apiClient from "@/services/apiClient.ts";
import {AxiosRequestConfig, CanceledError} from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[]
}

export default function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any): FetchResponse<T> {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setLoading(true)

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
    }, deps ? [...deps] : []);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return {data, error, loading}
}