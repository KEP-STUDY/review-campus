import type { AxiosError, AxiosResponse } from 'axios'

export type ResponseSuccessHandler<T = unknown> = (res: AxiosResponse<T>) => Promise<void> | void

export type ResponseErrorHandler<T = unknown> = (err: AxiosError<T>) => Promise<void> | void
