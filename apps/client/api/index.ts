import axios, { AxiosRequestConfig, Method, AxiosResponse, AxiosError } from 'axios'

export type ResponseSuccessHandler<T = unknown> = (res: AxiosResponse<T>) => Promise<void> | void
export type ResponseErrorHandler<T = unknown> = (err: AxiosError<T>) => Promise<void> | void

export interface RequestProps<T = unknown> {
  method?: Method
  url: string
  data?: unknown
  config?: AxiosRequestConfig
  onSuccess: ResponseSuccessHandler<T>
  onError: ResponseErrorHandler<T>
}

const customAxios = axios.create({
  baseURL: `/api`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json;charset=utf-8',
  },
})

const request = async <T>({
  method = 'get',
  url,
  data,
  config,
  onSuccess,
  onError,
}: RequestProps<T>) => {
  const hasData = ['get', 'delete'].indexOf(method) < 0
  try {
    const res = await (hasData
      ? customAxios[method]<T>(url, data, config)
      : customAxios[method]<T>(url, config))
    await onSuccess(res)
  } catch (err) {
    await onError(err)
  }
}

export default request
