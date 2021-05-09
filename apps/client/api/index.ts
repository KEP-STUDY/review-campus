import axios from 'axios'
import { RequestProps } from 'interfaces'

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
  try {
    const res = await customAxios[method]<T>(url, data, config)
    await onSuccess(res)
  } catch (err) {
    await onError(err)
  }
}

export default request
