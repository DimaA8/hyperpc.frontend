import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseUrl } from 'api/BaseUrl'
import { EndPoints } from 'api/EndPoints'
import { ICatalog } from 'types/catalog'

export const catalogApi = createApi({
  reducerPath: 'catalog',
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints(build) {
    return {
      getCatalog: build.query<ICatalog, void>({
        query: () => EndPoints.CATALOG
      })
    }
  },
})

export const { useGetCatalogQuery } = catalogApi