import type { AxiosRequestConfig, Method } from 'axios'
import { ResponseSuccessHandler, ResponseErrorHandler } from '.'

export interface RequestProps<T = unknown> {
  method?: Method
  url: string
  data?: unknown
  config?: AxiosRequestConfig
  onSuccess: ResponseSuccessHandler<T>
  onError: ResponseErrorHandler<T>
}
