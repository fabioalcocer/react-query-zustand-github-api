import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import api from '../api/github'
import { Repository } from './types'

async function fetchRepos(ctx: QueryFunctionContext) {
  const userName = ctx.queryKey[1]
  const { data } = await api.get<Repository[]>(
    `/users/${userName}/repos?per_page=120`
  )
  return data
}

export function useFetchRepositories(userName: string) {
  return useQuery(['repositories', userName], fetchRepos)
}
