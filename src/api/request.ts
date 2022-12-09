import { useFetch } from '@vueuse/core'
const url = ''
export const useBot = async () => {
  const { isFetching, error, data } = await useFetch(url)
}
